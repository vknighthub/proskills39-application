import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react'
import image from '@/assets/images/content/product-img/truth.jpg'
import seller from '@/assets/images/content/product-img/seller.jpg'
import sellerdtl from '@/assets/images/content/product-img/seller.png'
import salepayment from '@/assets/images/content/product-img/Safe_Payments.png'
import securecommunications from '@/assets/images/content/product-img/Secure_Communications.png'



type Props = {}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const TrustSafetyPage: NextPageWithLayout = (props: Props) => {
    return (
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
                        src={image}
                        width={1742}
                        height={980}
                        alt=""
                    />
                </div>
            </div>
            <div className="product-info">
                <div className="product-info-wrapper">
                    <div className="page-title-section">
                        <h1>Trust Matters Most</h1>
                    </div>
                    <div className="product-author avatar-block">
                        <div className="avatar-meta">
                            <div className="avatar-title">
                                <span className="gradient-text">Millions of v2Package. Millions of users.</span>
                            </div>
                        </div>
                    </div>
                    <div className="place-bid">
                        <button className="btn btn-wide btn-dark">Join a Proskills39</button>
                    </div>
                </div>
            </div>
            <div className="related-section container">
                <div className="section-title-wrapper">
                    <h3>Getting To Know Your Sellers Is Easy</h3>
                </div>
                <div className="section-title-wrapper">
                    <h5 className="text-center">Feedback and reputation are essential to the Proskills39 marketplace. With seller ratings, levels and buyer feedback, we&rsquo;ve made it simple to review, compare and purchase the services you need.</h5>
                </div>
            </div>
            <div className="featured-box grid-12-columns">
                <div className="featured-item v2">
                    <div className="featured-item-content">
                        <div className="featured-item-wrapper text-center">
                            <Image src={seller} alt="" width={1004} height={700} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="related-section container">
                <div className="section-title-wrapper">
                    <h3>Buy And Sell, Worry Free</h3>
                </div>
                <div className="section-title-wrapper">
                    <h5 className="text-center">With millions of orders taking place, Proskills39 uses the latest high tech anti-fraud and data security measures to keep your transactions and data safe.</h5>
                </div>
            </div>

            <div className="featured-box grid-3-columns">

                <div className="featured-item v2">
                    <div className="featured-item-wrapper">
                        <div className="featured-item-content">
                            <div className="featured-item-image text-center">
                                <Image src={sellerdtl} alt="" />
                            </div>
                            <div className="featured-item-info">
                                <div className="title">
                                    Personal Details
                                </div>
                                <div className="item-meta">
                                    <span>
                                        Proskills39 values your privacy. Your data is secure at all times and we&rsquo;ll never share your personal information with third parties.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured-item v2">
                    <div className="featured-item-wrapper">
                        <div className="featured-item-content">
                            <div className="featured-item-image text-center">
                                <Image src={salepayment} alt="" />
                            </div>
                            <div className="featured-item-info">
                                <div className="title">
                                    Safe Payments
                                </div>
                                <div className="item-meta">
                                    <span>
                                        All transactions are conducted on the Proskills39 platform. Whether a buyer uses a credit card, PayPal or other form of payment, we handle everything, and ensure the security of your personal details. Proskills39 is committed to the highest security standards as a Level 1 PCI-DSS service provider.                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured-item v2">
                    <div className="featured-item-wrapper">
                        <div className="featured-item-content">
                            <div className="featured-item-image text-center">
                                <Image src={securecommunications} alt="" />
                            </div>
                            <div className="featured-item-info">
                                <div className="title">
                                    Secure Communications
                                </div>
                                <div className="item-meta">
                                    <span>
                                        You can safely communicate and exchange files with any Seller on Fiverr through our secure messaging system.                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
TrustSafetyPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default TrustSafetyPage