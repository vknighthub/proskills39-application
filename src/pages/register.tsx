import RegisterUserForm from '@/components/auth/register-form'
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'


const Register: NextPageWithLayout = () => {
    return (
        <div className="primary-content-area content-padding background-login">
            <div className="extra-small-section">
                <div className="page-title text-center">
                    
                    <h2>
                            <svg className="svg-register" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradient" y1="0" y2="1">
                                        <stop stopColor="#0061D3" offset="0" />
                                        <stop stopColor="#04CDF9" offset="1" />
                                    </linearGradient>
                                </defs>
                                <g>
                                    <text id="text" y="100" font-style="normal" letterSpacing="0.15rem" font-weight="700" stroke-width="2" stroke="url(#gradient)" fill="none">
                                    Register Account
                                    </text>
                                </g>
                            </svg>
                        </h2>
                </div>
                <RegisterUserForm username={undefined} />
                <div className="register-notice">
                    You’ll receive a confirmation email in your inbox with a link to
                    activate your account.
                </div>
            </div>
        </div>
    )
}
Register.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
    try {
        return {
            props: {
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


export default Register;
