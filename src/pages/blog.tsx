import routes from '@/config/routes';
import Layout from '@/layouts/_layout';
import Seo from '@/layouts/_seo';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import image_news_2 from '@/assets/images/content/news/fashion.jpeg';
import image_news_3 from '@/assets/images/content/news/new_chappter.jpeg';
import image_news_1 from '@/assets/images/content/news/semi.png';

import Blog from '@/layouts/info/Blog/Blog';
import Bussiness from '@/layouts/info/Blog/Bussiness';
import Freelancer from '@/layouts/info/Blog/Freelancer';
import News from '@/layouts/info/Blog/News';

import image_business_1 from '@/assets/images/content/business/business_tips.png';
import image_business_2 from '@/assets/images/content/business/enhance.png';
import image_business_3 from '@/assets/images/content/business/solutions.png';

import image_freelancer_3 from '@/assets/images/content/freelancer/bosses.png';
import image_freelancer_1 from '@/assets/images/content/freelancer/cally.png';
import image_freelancer_2 from '@/assets/images/content/freelancer/withoucode.jpg';
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
                image_url='https://api.proskills39.com/system/logo/logotest.png'
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