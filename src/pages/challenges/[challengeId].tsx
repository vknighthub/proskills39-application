import client from '@/data/client';
import Layout from '@/layouts/_layout';
import { NextPageWithLayout, Proposal } from '@/types';
import invariant from 'invariant';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProposalPage from '@/layouts/info/Proposal'

type PageProps = {
    proposal: Proposal;
}

type ParsedQueryParams = {
    challengeId: string;
};

export const getStaticPaths: GetStaticPaths = async ({
    locales,
}) => {
    invariant(locales, 'locales is not defined');
    const data = await client.challenge.all(process.env.NEXT_PUBLIC_FUND9);
    const result = data.result.data
    const paths = result?.flatMap((challenge) =>
        locales?.map((locale) => ({
            params: { challengeId: challenge.challengeId.toString() },
            locale,
        }))
    );
    return {
        paths,
        fallback: 'blocking',
    };
};


export const getStaticProps: GetStaticProps<
    PageProps,
    ParsedQueryParams
> = async ({ params, locale }) => {
    const { challengeId } = params!; //* we know it's required because of getStaticPaths
    try {
        const proposal = await client.proposal.get(challengeId);
        return {
            props: {
                proposal,
                ...(await serverSideTranslations(locale!, ['common'])),
            },
            revalidate: 60, // In seconds
        };
    } catch (error) {
        //* if we get here, the product doesn't exist or something else went wrong
        return {
            notFound: true,
        };
    }
};

const ChallengePage: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ proposal }) => {
    

    return (
        <ProposalPage data={proposal}/>
    )
}

ChallengePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default ChallengePage;