import routes from '@/config/routes';
import { FetchBlogDetail } from '@/data/blog';
import client from '@/data/client';
import Layout from '@/layouts/_layout';
import Seo from '@/layouts/_seo';
import { NextPageWithLayout } from '@/types';
import parse from 'html-react-parser';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import invariant from 'tiny-invariant';


const BlogDetailPage: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ slug, locale, blogdetail }) => {

    const { data, refetch } = FetchBlogDetail(slug, locale, blogdetail);

    useEffect(() => {
        refetch()
    }, [slug, locale, blogdetail])

    return (
        <>
            <Seo title="ProSkills39 - Blog Detail"
                description={blogdetail.result.data.introduce}
                url={routes.blogDetailUrl(slug)}
                image_url={blogdetail.result.data.image}
            />
            <div className="primary-content-area container content-padding">
                <div className="single-post medium-section">
                    <div className="post-heading">
                        <div className="news-tags">
                            <span className="tag-item" style={{ marginRight: "7px" }}>
                                <Link href={`/categories/${data.catalog.id}`}>{data.catalog.name}</Link>
                            </span>
                        </div>

                        <h1>
                            {data.title}
                        </h1>
                        <div className="news-meta">
                            <div className="post-author">
                                by{" "}
                                <Link href={`/seller/${data.author.username}`}>
                                    {data.author.fullname}
                                </Link>
                                , {data.publdt}
                            </div>

                        </div>
                    </div>
                    <div className="post-featured-image">
                        <Image
                            src={data.image}
                            alt={data.title}
                            width={940}
                            height={530}
                        />
                    </div>

                    <div className="post-content">
                        {parse(data.content)}
                    </div>
                    <div className="comments-section">
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {

    const { slug } = params!; //* we know it's required because of getStaticPaths
    try {
        const blogdetail = await client.blog.getdetail({
            slug: slug,
            language: locale
        });
        return {
            props: {
                slug,
                locale,
                blogdetail,
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


export const getStaticPaths: GetStaticPaths = async ({
    locales,
}) => {
    invariant(locales, 'locales is not defined');
    return {
        paths: [],
        fallback: 'blocking',
    };
};
BlogDetailPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
export default BlogDetailPage