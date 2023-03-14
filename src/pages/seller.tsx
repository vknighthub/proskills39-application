import React from 'react'
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import BecomeACreatorHero from './../layouts/creator/BecomeACreatorHero'
import BecomeACreatorForm from './../layouts/creator/BecomeACreatorForm'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const Seller: NextPageWithLayout = (props: Props) => {
    return (
        <div>
            <BecomeACreatorHero />
            <BecomeACreatorForm />
        </div>
    )
}

Seller.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default Seller
