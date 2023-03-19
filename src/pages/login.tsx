"use client"

import LoginUserForm from "@/components/auth/login-form";
import Layout from "@/layouts/_layout";
import { GetStaticProps } from "next";
import { signIn } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

    const loginAction = () => {
        signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_WEBSITE_URL })
    }

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
                        <div className="social-login-text">
                            {t('text-other-login')}
                        </div>
                        <div className="social-login-buttons">
                            <button className="btn btn-normal facebook">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#facebook-icon" />
                                </svg>
                            </button>
                            <button onClick={() => loginAction()} className="btn btn-normal gmail">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#gmail-icon" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );


};
export default Login;
