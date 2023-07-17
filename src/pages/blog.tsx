import routes from '@/config/routes';
import Layout from '@/layouts/_layout';
import Seo from '@/pages/_seo';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import Blog from '@/layouts/info/Blog/Blog';


import { FetchBlog } from '@/data/blog';
import { useRouter } from 'next/router';


type Props = {}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};



const BlogPage: NextPageWithLayout = (props: Props) => {

    const { locale } = useRouter()

    const { data } = FetchBlog(locale)


    return (
        <>
            <Seo
                title="ProSkills39 - Blog page"
                description="Introduce your friends to the easiest way to get things done"
                url={routes.blog}
                image_url='https://api.proskills39.com/system/logo/logo-seo.png'
            />
            <div className="background-content">
                <Blog list_blog={data?.blog} />
            </div>
        </>
    )
}
BlogPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default BlogPage