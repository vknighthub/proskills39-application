"use client"

import LoginUserForm from "@/components/auth/login-form";
import Layout from "@/layouts/_layout";
import { GetStaticProps } from "next";
import { signIn } from 'next-auth/react';
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

const Login = () => {
    const { t } = useTranslation('common');

    return (
        <Layout>
            <div className="primary-content-area container content-padding">
                <div className="extra-small-section">
                    <div className="page-title text-center">
                        <h2>
                            <span className="gradient-text">{t("text-account")}</span> {t("text-login")}
                        </h2>
                    </div>

                    <LoginUserForm />


                    <div className="social-login">
                        <Link className="menu-link" href="/forgot-password">Forgot Password?</Link>
                    </div>
                </div>
            </div>

        </Layout>
    );


};
export default Login;
