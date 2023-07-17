import RegisterUserForm from '@/components/auth/register-form'
import routes from '@/config/routes'
import Layout from '@/layouts/_layout'
import Seo from '@/pages/_seo'
import { NextPageWithLayout } from '@/types'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import invariant from 'tiny-invariant'


const Register: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ username }) => {
    return (
        <>
            <Seo
                title="ProSkills39 - Register new user"
                description={`Nền tảng kết nối nhà cung cấp dịch vụ, chuyên gia với những người có nhu cầu sử dụng dịch vụ, kỹ năng đó.
                Khi bạn đăng ký sẽ nhận được phàn quà hấp dẫn từ  ${username} `}
                url={routes.register}
                image_url='https://api.proskills39.com/system/logo/logotest.png'
            />
            <div className="primary-content-area container content-padding">
                <div className="extra-small-section">
                    <div className="page-title text-center">
                        <h2>
                            <span className="gradient-text">Register</span> Account
                        </h2>
                    </div>
                    <RegisterUserForm username={username} />
                    <div className="register-notice">
                        You’ll receive a confirmation email in your inbox with a link to
                        activate your account.
                    </div>
                </div>
            </div>
        </>
    )
}
Register.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}


export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const { username } = params!
    try {
        return {
            props: {
                username,
                ...(await serverSideTranslations(locale!, ['common', 'footer'])),
            },
            revalidate: 60, // In seconds
        };
    } catch (error) {
        console.log(error)
        //* if we get here, the product doesn't exist or something else went wrong
        return {
            notFound: true,
        };
    }
};

export const getStaticPaths: GetStaticPaths = async (
    {
        locales,
    }
) => {
    invariant(locales, 'locales is not defined');
    return { paths: [], fallback: 'blocking' };
};

export default Register;
