"use client"

import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import Layout from "@/layouts/_layout";
import { GetStaticProps } from "next";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const ForgotPassword = () => {
    const { t } = useTranslation('common');

    return (
        <Layout>
            <div className="primary-content-area content-padding background-login">
                <div className="extra-small-section">
                    <div className="page-title text-center account-login-layout" >
                        <h2>
                            <svg style={{ width: 850, height: 137, textAlign: 'center' }} xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradient" y1="0" y2="1">
                                        <stop stopColor="#0061D3" offset="0" />
                                        <stop stopColor="#04CDF9" offset="1" />
                                    </linearGradient>
                                </defs>
                                <g>
                                    <text id="text" y="100" font-size="60" font-style="normal" letterSpacing="0.15rem" font-weight="700" stroke-width="2" stroke="url(#gradient)" fill="none">
                                    {t("text-forgot-password")}
                                    </text>
                                </g>
                            </svg>
                        </h2>
                    </div>

                    <ForgotPasswordForm />

                </div>
            </div>

        </Layout>
    );


};
export default ForgotPassword;
