import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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

const ServicePage: NextPageWithLayout = (props: Props) => {
    return (
        <div>ServicePage</div>
    )
}
ServicePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default ServicePage