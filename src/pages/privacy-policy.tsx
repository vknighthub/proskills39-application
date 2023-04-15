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

                </div>

            </div>
        </div>
    )
}
PrivacyPolicy.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default PrivacyPolicy