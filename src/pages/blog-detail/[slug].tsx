import routes from '@/config/routes';
import { FetchBlogDetail } from '@/data/blog';
import client from '@/data/client';
import Layout from '@/layouts/_layout';
import Seo from '@/layouts/_seo';
import { BlogDetail, NextPageWithLayout } from '@/types';
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

    const blog = data.blogdetail
    const blogbyuser = data?.blogbyuser
    const blogcategory = data?.blogbycatagories
    const blogtopview = data?.blogtopview

    useEffect(() => {
        const gridItems = document.querySelectorAll('.grid-item-category');
        let numColumns = Math.ceil(gridItems.length / 3);
        if (numColumns <= 1) {
            numColumns = 3
        }
        const gridContainer = document.querySelector('.grid-container-category') as HTMLElement;
        if (gridContainer) {
            gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
        }
    }, []);

    useEffect(() => {
        const gridItems = document.querySelectorAll('.grid-item-user');
        let numColumns = Math.ceil(gridItems.length / 3);
        if (numColumns <= 2) {
            numColumns = 3
        }
        const gridContainer = document.querySelector('.grid-container-user') as HTMLElement;
        if (gridContainer) {
            gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
        }
    }, []);

    useEffect(() => {
        const gridItems = document.querySelectorAll('.grid-item-topview');
        let numColumns = Math.ceil(gridItems.length / 3);
        if (numColumns <= 2) {
            numColumns = 3
        }
        const gridContainer = document.querySelector('.grid-container-topview') as HTMLElement;
        if (gridContainer) {
            gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
        }
    }, []);

    useEffect(() => {
        const paragraph = document.getElementById("content");
        const paragraphs = paragraph?.querySelectorAll('p');
        
        if (paragraphs) {
            paragraphs.forEach((paragraph) => {
                console.log(paragraph.innerHTML.trim())
                if (paragraph.innerHTML.trim() === '&nbsp;') {
                    paragraph.innerHTML = '';
                }
            });
        }
    }, []);


    return (
        <>
            <Seo title="ProSkills39 - Blog Detail"
                description={blogdetail.result.data.blogdetail.introduce}
                url={routes.blogDetailUrl(slug)}
                image_url={blogdetail.result.data.blogdetail.image}
            />
            <div className="primary-content-area container content-padding">
                <div className="single-post medium-section">
                    <div className="post-heading">

                        <h1>
                            {blog.title}
                        </h1>
                        <div className="news-meta">
                            <div className="post-author">
                                by{" "}
                                <Link href={`/user-profile/${blog.author.username}`}>
                                    {blog.author.fullname}
                                </Link>
                                , {blog.publdt}
                            </div>

                        </div>
                    </div>
                    <div className="post-featured-image">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={940}
                            height={530}
                        />
                    </div>

                    <div id="content" className="post-content">
                        {parse(blog.content)}
                    </div>
                    <div className="comments-section">
                    </div>
                </div>
            </div>

            <div className="primary-content-area container content-padding">
                <div className="page-title-section">
                    <h2>
                        <span className="gradient-text">Blog by {blog.author.fullname} </span>
                    </h2>
                </div>
                {/*  POSTS GRID */}
                {blogbyuser.total !== 0 ?
                    <div className="grid-container-user grid-3-columns" >
                        {blogbyuser.data.map((blog: BlogDetail) => (
                            <div className="grid-item-user" key={blog.id} >
                                <div className="news-thumb" >
                                    <Link href={`/blog-detail/${blog.slug}`}>
                                        <Image
                                            src={blog.image}
                                            alt=""
                                            width={458}
                                            height={300}
                                            style={{ maxWidth: '100%', maxHeight: '300px', minHeight: '300px' }}
                                        />
                                    </Link>
                                </div>
                                <div className="news-content">
                                    <div className="news-meta">
                                        <div className="news-tags">
                                            <span className="tag-item">
                                                {blog.catalog.name}
                                            </span>
                                        </div>
                                        by{" "}
                                        <Link href={blog.author.username}>
                                            {blog.author.fullname}
                                        </Link>
                                        , {blog.publdt}
                                    </div>
                                    <div className="news-title h5">
                                        {" "}
                                        <Link href={`/blog-detail/${blog.slug}`}>
                                            {blog.title}
                                        </Link>{" "}
                                    </div>
                                    <div className="news-excerpt">
                                        {parse(blog.introduce)}
                                    </div>
                                    <div className="read-more-link">
                                        {" "}
                                        <Link href={`/blog-detail/${blog.slug}`}>

                                            Read More
                                            <svg className="crumina-icon">
                                                <use xlinkHref="#arrow-right2-icon" />
                                            </svg>
                                        </Link>{" "}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <>
                        <div className="page-title-section">
                            <h4>
                                <span className="gradient-text">There are no related posts</span>
                            </h4>
                        </div>
                    </>
                }

                {/*  PAGINATION */}
            </div>

            <div className="primary-content-area container content-padding">
                <div className="page-title-section">
                    <h2>
                        <span className="gradient-text">Blog related to {blog.catalog.name} </span>
                    </h2>
                </div>
                {/*  POSTS GRID */}
                {blogcategory.total !== 0 ?
                    <div className="grid-container-category grid-3-columns" >
                        {blogcategory.data.map((blog: BlogDetail) => (
                            <div className="grid-item-category" key={blog.id} >
                                <div className="news-thumb" >
                                    <Link href={`/blog-detail/${blog.slug}`}>
                                        <Image
                                            src={blog.image}
                                            alt=""
                                            width={458}
                                            height={300}
                                            style={{ maxWidth: '100%', maxHeight: '300px', minHeight: '300px' }}
                                        />
                                    </Link>
                                </div>
                                <div className="news-content">
                                    <div className="news-meta">
                                        <div className="news-tags">
                                            <span className="tag-item">
                                                {blog.catalog.name}
                                            </span>
                                        </div>
                                        by{" "}
                                        <Link href={blog.author.username}>
                                            {blog.author.fullname}
                                        </Link>
                                        , {blog.publdt}
                                    </div>
                                    <div className="news-title h5">
                                        {" "}
                                        <Link href={`/blog-detail/${blog.slug}`}>
                                            {blog.title}
                                        </Link>{" "}
                                    </div>
                                    <div className="news-excerpt">
                                        {parse(blog.introduce)}
                                    </div>
                                    <div className="read-more-link">
                                        {" "}
                                        <Link href={`/blog-detail/${blog.slug}`}>

                                            Read More
                                            <svg className="crumina-icon">
                                                <use xlinkHref="#arrow-right2-icon" />
                                            </svg>
                                        </Link>{" "}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <>
                        <div className="page-title-section">
                            <h4>
                                <span className="gradient-text">There are no related posts</span>
                            </h4>
                        </div>
                    </>
                }
                {/*  PAGINATION */}
            </div>

            <div className="primary-content-area container content-padding">
                <div className="page-title-section">
                    <h2>
                        <span className="gradient-text">Blog Top View</span>
                    </h2>
                </div>
                {/*  POSTS GRID */}
                {blogtopview.total !== 0 ?
                    <div className="grid-container-topview grid-3-columns">
                        {blogtopview.data.map((blog: BlogDetail) => (
                            <div className="news-item-topview" key={blog.id}>
                                <div className="news-thumb" >
                                    <Link href={`/blog-detail/${blog.slug}`} >
                                        <Image
                                            src={blog.image}
                                            alt=""
                                            width={458}
                                            height={300}
                                            style={{ maxWidth: '100%', maxHeight: '300px', minHeight: '300px' }}
                                        />
                                    </Link>
                                </div>
                                <div className="news-content">
                                    <div className="news-meta">
                                        <div className="news-tags">
                                            <span className="tag-item">
                                                {blog.catalog.name}
                                            </span>
                                        </div>
                                        by{" "}
                                        <Link href={blog.author.username}>
                                            {blog.author.fullname}
                                        </Link>
                                        , {blog.publdt}
                                    </div>
                                    <div className="news-title h5">
                                        {" "}
                                        <Link href={`/blog-detail/${blog.slug}`}>
                                            {blog.title}
                                        </Link>{" "}
                                    </div>
                                    <div className="news-excerpt">
                                        {parse(blog.introduce)}
                                    </div>
                                    <div className="read-more-link">
                                        {" "}
                                        <Link href={`/blog-detail/${blog.slug}`}>

                                            Read More
                                            <svg className="crumina-icon">
                                                <use xlinkHref="#arrow-right2-icon" />
                                            </svg>
                                        </Link>{" "}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <>
                        <div className="page-title-section">
                            <h4>
                                <span className="gradient-text">There are no related posts</span>
                            </h4>
                        </div>
                    </>
                }
                {/*  PAGINATION */}
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