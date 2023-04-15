import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react'

type Props = {}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const PrivacyPolicy: NextPageWithLayout = (props: Props) => {
    return (
        <div className="primary-content-area container content-padding">
            <div className="single-post medium-section">
                <div className="post-heading">
                    <h2>ProSkills39 Service Marketplace Privacy Policy</h2>
                    <div className="news-meta">
                        <div className="post-author">
                            Thank you for using our Service Marketplace platform. We are committed to protecting your privacy and providing you with a safe and secure experience while using our platform. This privacy policy describes how we collect, use, and share your personal information.
                        </div>
                    </div>
                </div>

                <div className="post-content">
                    <h4 className="content-heading">1.	Information we collect</h4>
                    <p>To use ProSkills39 Service Marketplace, we require personal information, including your email, Facebook, Twitter, Discord, Github/Google login, and username. We may also gather your name, address, payment, authentication details, linked social media accounts, gigs, purchases, education, and communication data with ProSkills39 and other users. We collect information about your services, location, preferences, and platform interactions, such as pages visited, searches made, and transactions completed.</p>
                </div>
                <div className="post-content">
                    <h4 className="content-heading">2.	How we use your information</h4>
                    <p>We process your personal information under lawful grounds, as required by applicable laws. In most cases, we process your data with your consent, to fulfill a contract or legal obligation, or to pursue our legitimate business interests. These interests are balanced with your rights and conducted proportionately.</p>
                    <p>We use your information to provide and improve our platform and services. This includes facilitating transactions, processing payments, and communicating with you about your account and services. We also use your information to personalize your experience, send you marketing communications, and conduct research and analysis.</p>
                </div>
                <div className="post-content">
                    <h4 className="content-heading">3.	Sharing your information</h4>
                    <p>We may share your information with third-party service providers who help us provide and improve our platform and services. For example, we may share your information with payment processors, fraud prevention services, and customer support providers. We may also share your information with our business partners and affiliates for marketing and promotional purposes.</p>
                    <p>We dont sell or rent your personal information to third parties for their marketing purposes without your explicit consent. We share your personal information with third parties, including other users of the site, service providers, social media partners, and law enforcement agencies. When you share your personal information with other users, you do so at your own risk. We may also share your information in the context of a corporate transaction. The Site is protected by reCAPTCHA, and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
                <div className="post-content">
                    <h4 className="content-heading">4.	Data retention</h4>
                    <p>We retain your information as long as necessary to provide our platform and services and to comply with our legal obligations. If you would like us to delete your information, please contact us at support@proskills39.com.</p>
                </div>
                <div className="post-content">
                    <h4 className="content-heading">5.	Security</h4>
                    <p>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>                  
                </div>
                <div className="post-content">
                    <h4 className="content-heading">6.	Children</h4>
                    <p>Our Platform is available to users aged 18 and above who can legally enter into a binding contract. Users under 18 but over 13 may use the Site with parental or guardian permission. We do not knowingly collect information from children under 13, and parents should supervise their children use of the Site. If we receive information from or about a child under 13, we will delete it. Please contact us at support@proskills39.com if you have any concerns.</p>
                    <p></p>
                </div>
                <div className="post-content">
                    <h4 className="content-heading">7.	Your rights</h4>
                    <p>You have the right to access and correct your personal information. You also have the right to object to the processing of your personal information and to request the deletion of your personal information in certain circumstances. To exercise your rights, please contact us at support@proskills39.com.</p>
                </div>
                <div className="post-content">
                    <h4 className="content-heading">8.	Changes to this policy</h4>
                    <p>We may update this privacy policy from time to time. The most current version of the policy will always be available on our website. If we make material changes to the policy, we will notify you by email or through our platform.</p>
                    <p>If you have any questions or concerns about this privacy policy, please contact us at support@proskills39.com.</p>
                </div>

            </div>
        </div>
    )
}
PrivacyPolicy.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default PrivacyPolicy