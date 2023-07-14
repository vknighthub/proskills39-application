import ChatContent from '@/layouts/info/Chat/ChatContent';
import ChatSidebarLeft from '@/layouts/info/Chat/ChatSidebarLeft';
import Layout from '@/layouts/_layout';
import { NextPageWithLayout } from '@/types';
import { Box } from '@mui/material';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import invariant from 'tiny-invariant';

const InboxPage: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ seller }) => {
    return (
        <div className="primary-content-area background-content">
            <div className="container section-padding">
                <div className="section-title-wrapper">
                    <div className="section-title">
                        Contact to <span className="gradient-text">  {seller}</span>
                    </div>
                </div>
                <div className="featured-box">
                    <Box
                        className='app-chat'
                        sx={{
                            width: '100%',
                            display: 'flex',
                            borderRadius: 1,
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: 6,
                            border: `1px solid #fff`
                        }}
                    >
                        <ChatSidebarLeft />
                        <ChatContent />
                    </Box>
                </div>
            </div>

        </div>
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