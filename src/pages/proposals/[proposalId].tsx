import routes from '@/config/routes';
import client from '@/data/client';
import ProposalDetail from '@/layouts/info/ProposalDetail';
import Layout from '@/layouts/_layout';
import Seo from '@/layouts/_seo';
import { NextPageWithLayout, ProposalDetailType, ProposalResult } from '@/types';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';



type PageProps = {
    proposal: ProposalResult;
}

type ParsedQueryParams = {
    proposalId: string;
};

export const getStaticPaths: GetStaticPaths = async (
    {
        locales,
    }
) => {
    invariant(locales, 'locales is not defined');
    return { paths: [], fallback: 'blocking' };
};


export const getStaticProps: GetStaticProps<
    PageProps,
    ParsedQueryParams
> = async ({ params, locale }) => {

    const { proposalId } = params!; //* we know it's required because of getStaticPaths
    try {
        const proposal = await client.proposal.getbyid(proposalId, locale);
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
    const proposalDetail = proposal.result.data.proposal_infor
    return (
        <>
            <Seo
                title="ProSkills39 - Voter Tool"
                description={proposalDetail.proposalName}
                url={routes.proposalsUrl(proposalDetail.proposalId)}
                image_url='https://api.proskills39.com/system/logo/logotest.png'
            />
            <ProposalDetail data={proposal} />
        </>
    )
}

ProposalPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default ProposalPage;