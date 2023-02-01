import Layout from '@/layouts/_layout'
import React from 'react'
import CatalystVoterTool from '@/layouts/info/CatalystVoterTool'
import type {
    GetStaticPaths,
    GetStaticProps,
    InferGetStaticPropsType,
} from 'next';
import { Challenge, NextPageWithLayout, SettingsQueryOptions } from '@/types';
import { dehydrate, QueryClient } from 'react-query';
import client from '@/data/client';
import { API_ENDPOINTS } from '@/data/client/endpoints';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type PageProps = {
    challenge: Challenge;
};

export const getStaticProps: GetStaticProps<
    PageProps
> = async ({ locale }) => {
    const queryClient = new QueryClient();
    try {
        const challenge = await client.challenge.get(process.env.NEXT_PUBLIC_FUND9);
        await Promise.all([
            queryClient.prefetchQuery(
                [API_ENDPOINTS.SETTINGS, { language: locale }],
                ({ queryKey }) =>
                    client.settings.all(queryKey[1] as SettingsQueryOptions)
            )
        ]);
        return {
            props: {
                challenge,
                ...(await serverSideTranslations(locale!, ['common'])),
                dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
            },
            revalidate: 60,
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};


const dRep: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = (challenge) => {
    return (
        <Layout>
            <CatalystVoterTool data={challenge} />
        </Layout>
    )
}

export default dRep;
