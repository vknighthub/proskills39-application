import client from '@/data/client';
import Layout from '@/layouts/_layout';
import ProposalDetail from '@/layouts/info/ProposalDetail';
import { NextPageWithLayout, ProposalResult } from '@/types';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';



type PageProps = {
    proposal: ProposalResult;
}

type ParsedQueryParams = {
    proposalId: string;
};


export const getServerSideProps: GetServerSideProps<
    PageProps,
    ParsedQueryParams
> = async ({ params, locale }) => {

    const { proposalId } = params!; //* we know it's required because of getStaticPaths
    try {
        const proposal = await client.proposal.getbyid(proposalId, locale);
        return {
            props: {
                proposal,
                ...(await serverSideTranslations(locale!, ['common', 'footer'])),
            }
        };
    } catch (error) {
        //* if we get here, the product doesn't exist or something else went wrong
        return {
            notFound: true,
        };
    }
};

const ProposalPage: NextPageWithLayout<
    InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ proposal }) => {
    const proposalDetail = proposal.result.data.proposal_infor
    return (
        <>
            <NextSeo
                title="ProSkills39-Voter Tool"
                description={proposalDetail.proposalName}
                openGraph={{
                    title: "ProSkills39 - Voter Tool",
                    site_name: "ProSkills39 - Voter Tool",
                    type: "website",
                    url: `https://proskills39.com/proposals/${proposalDetail.proposalId}`,
                    description: `${proposalDetail.proposalName}`,
                    images: [
                        {
                            url: "https://api.proskills39.com/system/logo/logo-seo.png",
                            width: 1200,
                            height: 630,
                            alt: "ProSkills39 - Voter Tool",
                        }
                    ],
                    book: {
                        authors: [
                            "https://anhben.com",
                        ]
                    }
                }}
                twitter={{
                    handle: "@ProSkills39",
                    site: "@ProSkills39",
                    cardType: "summary_large_image",
                }}
                canonical={`https://www.proskills39.com/proposals/${proposalDetail.proposalId}`}
            />
            <ProposalDetail data={proposal} />
        </>
    )
}

ProposalPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default ProposalPage;