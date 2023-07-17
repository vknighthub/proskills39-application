import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react'
import masterpage from '@/assets/images/content/community/masterpage.png'
import Seo from '@/pages/_seo';
import routes from '@/config/routes';
import Link from 'next/link';

type Props = {}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const CommunityStandard: NextPageWithLayout = (props: Props) => {
    const listcommunity = [
        {
            id: 1,
            name: 'Proskills39 community',
            url: 'https://t.me/ProSkills39Academy',
            content: 'Join the ongoing conversation with the virtual Proskills39 community to discuss whatever’s on your mind.'
        },
        {
            id: 2,
            name: 'Global community',
            url: 'https://t.me/ProSkills39Global',
            content: 'Join the ongoing conversation with the virtual Proskills39 community to discuss whatever’s on your mind.'
        },
        {
            id: 3,
            name: 'Academy community',
            url: 'https://t.me/ProSkills39Academy',
            content: 'Join the ongoing conversation with the virtual Proskills39 community to discuss whatever’s on your mind.'
        },
        {
            id: 4,
            name: 'Proskills39 facebook',
            url: 'https://www.facebook.com/groups/1499021330627526/?ref=share',
            content: 'Join the ongoing conversation with the virtual Proskills39 community to discuss whatever’s on your mind.'
        },
        {
            id: 5,
            name: 'Customer support',
            url: 'https://www.facebook.com/groups/1499021330627526/?ref=share',
            content: 'Questions or Concerns? Speak with our Support and Help Center. They’re online 24/7 to address concerns.'
        },
        {
            id: 6,
            name: 'Blog',
            url: '/blog',
            content: 'Stay on top of the latest—from Proskills39 updates to industry best practies, insider tips, and more. '
        },
    ]
    return (
        <>
            <Seo
                title="ProSkills39 - Community"
                description="Explore how our community has been influenced by every corner of the world."
                url={routes.community}
                image_url='https://api.proskills39.com/system/logo/logotest.png'
            />
            <div className="product-page product-version-2">
                <div className="product-media">
                    <div className="product-img">
                        <a
                            className="expand-icon"
                            data-fslightbox="lightbox"
                            href="img/content/product-img/product-1-large.png"
                        >
                            <svg className="crumina-icon">
                                <use xlinkHref="#maximize-icon" />
                            </svg>
                        </a>
                        <Image
                            src={masterpage}
                            width={1742}
                            height={980}
                            alt=""
                        />
                    </div>
                </div>
                <div className="product-info">
                    <div className="product-info-wrapper">
                        <div className="page-title-section">
                            <h1>Proskills39 Community</h1>
                        </div>
                    </div>
                </div>
                <div className="related-section container">
                    <div className="section-title-wrapper">
                        <h3>MEET THE COMMUNITY</h3>
                    </div>
                    <div className="featured-box grid-6-columns">
                        <div className="featured-item v2 center">
                            <iframe width="600" height="350" src="https://www.youtube.com/embed/fJU9cwWNAxs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                        <div className="featured-item v2 center">
                            <iframe width="600" height="350" src="https://www.youtube.com/embed/kc0HY8omsRs" title="Sắp 30 - Trịnh Đình Quang [LYRIC VIDEO]" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                    </div>
                </div>
                <div className="related-section container mt-5">
                    <div className="section-title-wrapper ">
                        <h3>RESOURCES</h3>
                    </div>
                    <div className="featured-box grid-6-columns">
                        {listcommunity.map((community) => (
                            <div className="featured-item v2" key={community.id}>
                                <div className="featured-item-wrapper">
                                    <div className="featured-item-content">
                                        <div className="featured-item-info">
                                            <div className="title">
                                                {" "}
                                                <Link href={community.url}>
                                                    {community.name}
                                                </Link>{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item-post-content">
                                        <div className="social-share-box">
                                            <div className="share-icons">
                                                <p>{community.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
CommunityStandard.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default CommunityStandard