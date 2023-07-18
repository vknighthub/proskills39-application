import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import comming_soon from '@/assets/images/comming-soon-web.png'
import Image from 'next/image';

type Props = {}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const Influencers: NextPageWithLayout = (props: Props) => {
    return (
        <>
            <div className="primary-content-area background-content">
                <div className="single-post medium-section mt-6">
                    <Image src={comming_soon} alt="" style={{ textAlign: 'center' }} width={1920} height={600} />
                </div>
            </div>
        </>
    )
}
Influencers.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default Influencers