import client from '@/data/client';
import Layout from '@/layouts/_layout';
import { NextPageWithLayout, ProposalDetailType } from '@/types';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProposalDetail from '@/layouts/info/ProposalDetail'



type PageProps = {
    proposal: ProposalDetailType;
}

type ParsedQueryParams = {
    proposalId: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [], fallback: 'blocking' };
};


export const getStaticProps: GetStaticProps<
    PageProps,
    ParsedQueryParams
> = async ({ params, locale }) => {
    const { proposalId } = params!; //* we know it's required because of getStaticPaths
    try {
        const proposal = await client.proposal.getbyid(proposalId);
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

const ProposalPage: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ proposal }) => {


    return (
        <ProposalDetail data={proposal} />
    )
}

ProposalPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default ProposalPage;