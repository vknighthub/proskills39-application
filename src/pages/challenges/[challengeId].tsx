import client from '@/data/client'
import Layout from '@/layouts/_layout'
import Seo from '@/pages/_seo'
import { ChallengeResult, NextPageWithLayout } from '@/types'
import invariant from 'invariant'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ChanllengePage from './../../layouts/info/ChanllengePage'
import routes from '@/config/routes'

type PageProps = {
    challenge: ChallengeResult
    challengeId: string
}

type ParsedQueryParams = {
    challengeId: string
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    invariant(locales, 'locales is not defined')
    const data = await client.challenge.all(process.env.NEXT_PUBLIC_FUND9)
    const result = data.result.data
    const paths = result?.flatMap((challenge) =>
        locales?.map((locale) => ({
            params: { challengeId: challenge.challengeId.toString() },
            locale,
        })),
    )
    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<
    PageProps,
    ParsedQueryParams
> = async ({ params, locale }) => {
    const { challengeId } = params! //* we know it's required because of getStaticPaths
    try {
        const challenge = await client.proposal.get(challengeId)
        return {
            props: {
                challengeId,
                challenge,
                ...(await serverSideTranslations(locale!, ['common', 'footer'])),
            },
            revalidate: 60, // In seconds
        }
    } catch (error) {
        //* if we get here, the product doesn't exist or something else went wrong
        return {
            notFound: true,
        }
    }
}

const ChallengePage: NextPageWithLayout<InferGetStaticPropsType<
    typeof getStaticProps
>> = ({ challenge, challengeId }) => {
    const challengeDetail = challenge.result.data

    return (
        <>
            <Seo
                title="ProSkills39 - Voter Tool"
                description={challengeDetail.challengeName}
                url={routes.chanllengesUrl(challengeDetail.challengeId)}
                image_url={challengeDetail.challengeImage}
            />

            <ChanllengePage data={challenge} challengeId={challengeId} />
        </>
    )
}

ChallengePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default ChallengePage
