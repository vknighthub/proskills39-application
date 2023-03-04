import routes from '@/config/routes';
import client from '@/data/client';
import ProposalDetail from '@/layouts/info/ProposalDetail';
import Layout from '@/layouts/_layout';
import Seo from '@/layouts/_seo';
import { NextPageWithLayout, ProposalDetailType } from '@/types';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';



type PageProps = {
    proposal: ProposalDetailType;
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

    return (
        <>
            <Seo
                title="ProSkills39 - Voter Tool"
                description="Voter Tool is a part of the AIM Community Tool series developed by the community for the community. It is designed to assist you in your analysis of Cardano Project Catalyst"
                url={routes.proposals}
                image_url='https://fileup.to/9uY6/logo-black.svg'
            />
            <ProposalDetail data={proposal} />
        </>
    )
}

ProposalPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default ProposalPage;