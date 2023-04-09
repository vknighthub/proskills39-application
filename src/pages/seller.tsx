import React from 'react'
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import BecomeACreatorHero from './../layouts/creator/BecomeACreatorHero'
import BecomeACreatorForm from './../layouts/creator/BecomeACreatorForm'
import { GetServerSideProps, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Config } from '@/config'
import routes from '@/config/routes'
import { getAuthCredentials } from '@/components/auth/use-auth'
import { allowedRoles, hasAccess, isAuthenticated } from '@/data/client/token.utils'

type Props = {}

const Seller: NextPageWithLayout = (props: Props) => {
    return (
        <div>
            <BecomeACreatorHero />
            <BecomeACreatorForm />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    try {

        const { locale } = ctx;
        const generateRedirectUrl =
            locale !== Config.defaultLanguage
                ? `/${locale}${routes.login}`
                : routes.login;

        const { token, permission } = getAuthCredentials(ctx);

        if (
            !isAuthenticated({ token, permission }) ||
            !hasAccess(allowedRoles, permission)
        ) {
            return {
                redirect: {
                    destination: generateRedirectUrl,
                    permanent: false,
                },
            };
        }

        return {
            props: {
                language: locale,
                ...(await serverSideTranslations(locale!, ['common','footer'])),
            }
        };
    } catch (error) {
        console.log(error)
        //* if we get here, the product doesn't exist or something else went wrong
        return {
            notFound: true,
        };
    }
};

Seller.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default Seller
