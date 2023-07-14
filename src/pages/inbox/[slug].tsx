import Layout from '@/layouts/_layout';
import { NextPageWithLayout } from '@/types';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import invariant from 'tiny-invariant';

const InboxPage: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({seller}) => {
    return (
        <div>{seller}</div>
    )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    invariant(locales, 'locales is not defined')
    return {
        paths: [],
        fallback: 'blocking',
    }
}
export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const { slug } = params! //* we know it's required because of getStaticPaths

    try {
        return {
            props: {
                seller: slug,
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

InboxPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default InboxPage