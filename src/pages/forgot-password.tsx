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
            <div className="primary-content-area container content-padding">
                <div className="extra-small-section">
                    <div className="page-title text-center">
                        <h2>
                            <span className="gradient-text">{t("text-forgot-password")}</span>
                        </h2>
                    </div>

                    <ForgotPasswordForm />

                </div>
            </div>

        </Layout>
    );


};
export default ForgotPassword;
