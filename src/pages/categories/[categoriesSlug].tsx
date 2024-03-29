import client from "@/data/client";
import Layout from "@/layouts/_layout";
import CategoryPage from "@/layouts/info/Category";
import { Category, NextPageWithLayout, CategoryPaginator } from '@/types';
import invariant from "invariant";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Seo from "@/pages/_seo";
import routes from "@/config/routes";

type ParsedQueryParams = {
    categoriesSlug: string;
};


export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async ({
    locales,
}) => {
    invariant(locales, 'locales is not defined');
    const data = await client.categories.all();
    const result = data.result.data
    const paths = result?.flatMap((category: any) =>
        locales?.map((locale) => ({
            params: { categoriesSlug: category.slug },
            locale,
        }))
    );
    return {
        paths,
        fallback: true,
    };
};

type PageProps = {
    category: CategoryPaginator;
};


export const getStaticProps: GetStaticProps<
    PageProps,
    ParsedQueryParams
> = async ({ params, locale }) => {
    const { categoriesSlug } = params!; //* we know it's required because of getStaticPaths
    try {
        const category = await client.categories.get({
            slug: categoriesSlug,
            language: locale
        });
        return {
            props: {
                category,
                ...(await serverSideTranslations(locale!, ['common', 'footer'])),
            },
            revalidate: 60, // In seconds
        };
    } catch (error) {
        //* if we get here, the product doesn't exist or something else went wrong
        return {
            notFound: true,
        };
    }
};

const CategoriesPage: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
>
    = ({ category }) => {

        const categoryDetail = category.result.data

        return (
            <>
                <Seo title="ProSkills39 - Categories"
                    description={categoryDetail.description}
                    url={routes.categoriesUrl(categoryDetail.url)}
                    image_url={categoryDetail.image} />
                <CategoryPage category={categoryDetail} />
            </>
        )

    }

CategoriesPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};


export default CategoriesPage;
