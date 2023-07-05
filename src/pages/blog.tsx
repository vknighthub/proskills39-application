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

    const list_news = [
        {
            id: 1,
            image: image_news_1.src,
            catalog: 'BUSINESS NEWS',
            title: 'Semi-Annual Small Business Needs Index: Strength and Optimism is Still Present',
            content: 'Businesses are building back and finding new ways to reach their customers.'
        },
        {
            id: 2,
            image: image_news_2.src,
            catalog: 'PRODUCT NEWS',
            title: 'Introducing Proskills39 Fashion Store',
            content: 'Now you can use Proskills39’s new Fashion Design services to grow your business from idea to implementation.'
        },
        {
            id: 3,
            image: image_news_3.src,
            catalog: 'FREELANCER TIPS',
            title: 'Here’s to Writing a New Chapter; From Proskills39 CEO',
            content: 'We believe that 2020 marks the beginning of a decade in which freelancing will take another step forward.'
        }
    ]

    const list_business = [
        {
            id: 1,
            image: image_business_1.src,
            catalog: 'WEB PROGRAMMING',
            title: '5 Ways to Enhance Your Business Website in 2023',
            content: 'If its been a while since your last website upgrade, you may be missing out on some big opportunities. Here are five enhancements to consider for 2023.'
        },
        {
            id: 2,
            image: image_business_2.src,
            catalog: 'BUSINESS TIPS',
            title: '3 Ways Using Proskills39 Freelancers Can Help You Scale Your Business',
            content: 'Now you can use Proskills39’s new Fashion Design services to grow your business from idea to implementation.'
        },
        {
            id: 3,
            image: image_business_3.src,
            catalog: 'PROGRAMMING & TECH',
            title: 'How No-Code Solutions Let You Build Apps Without Coding Skills',
            content: 'In this blog article by our partner Appy Pie, we are exploring what no-code app development is all about and how it has revolutionized the world of app development.'
        }
    ]

    const list_freelancer = [
        {
            id: 1,
            image: image_freelancer_1.src,
            catalog: 'GENERAL',
            title: 'Meet Proskills39 Pro Freelancer: Ian Cally Hollyman',
            content: 'Meet our new Music & Audio Pro seller, internationally renowned music producer, Ian Hollyman (Cally)!'
        },
        {
            id: 2,
            image: image_freelancer_2.src,
            catalog: 'MOBILE APPS',
            title: 'Build Apps Without Code and Grow Your Career',
            content: 'The mobile app industry is growing. Find out how you can unlock new career opportunities by building apps without knowing how to code!'
        },
        {
            id: 3,
            image: image_freelancer_3.src,
            catalog: 'CAREER COUNSELING',
            title: '10 Different Types Of Bosses And How To Work With Them',
            content: 'We’ll help you identify different kinds of bosses and how to work with the type of boss you have (or might have in the future).'
        }
    ]


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

                <News list_news={list_news} />

                <Bussiness list_business={list_business} />

                <Freelancer list_freelancer={list_freelancer} />
            </div>
        </>
    )
}
BlogPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default BlogPage