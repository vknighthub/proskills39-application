import client from '@/data/client';
import Layout from '@/layouts/_layout';
import { NextPageWithLayout, ServicePaginator } from '@/types';
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import ServicePagination from '@/layouts/info/Service/ServicePagination'
import Seo from '@/layouts/_seo';
import routes from '@/config/routes';


type ParsedQueryParams = {
    servicesSlug: string;
};

type PageProps = {
    services: ServicePaginator;
};


export const getStaticPaths: GetStaticPaths = async (
    {
        locales,
    }
) => {
    invariant(locales, 'locales is not defined');
    return { paths: [], fallback: 'blocking' };
};


export const getStaticProps: GetStaticProps<
    PageProps,
    ParsedQueryParams
> = async ({ params, locale }) => {
    const { servicesSlug } = params!; //* we know it's required because of getStaticPaths
    try {
        const services = await client.services.get({
            slug: servicesSlug,
            language: locale
        });
        return {
            props: {
                services,
                ...(await serverSideTranslations(locale!, ['common'])),
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

const ServicesPage: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ services }) => {
    const servicesDetail = services.result.data
    return (
        <>
            <Seo title="ProSkills39 - Service"
                description="Work with specialized services on your blockchain and cryptocurrency projects."
                url={routes.service.servicelist("servicesDetail.categoriesname")}
                image_url='https://api.proskills39.com/system/logo/logotest.png' />
            <ServicePagination service={servicesDetail} />
        </>
    )
}
ServicesPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default ServicesPage