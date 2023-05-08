import OTPPasswordForm from '@/components/auth/otp-form';
import Layout from '@/layouts/_layout';
import invariant from 'invariant';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ConfirmOTP = ({ username, email }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
                    <OTPPasswordForm username={username} email={email} />
                </div>
            </div>

        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    invariant(locales, 'locales is not defined')
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
    const { username, email } = params! //* we know it's required because of getStaticPaths
    try {
        return {
            props: {
                username,
                email,
                ...(await serverSideTranslations(locale!, ['common', 'footer'])),
            },
            revalidate: 60, // In seconds
        }
    } catch (error) {
        //* if we get here, the product doesn't exist or something else went wrong
        return {
            notFound: true,
        }
    }
}
export default ConfirmOTP