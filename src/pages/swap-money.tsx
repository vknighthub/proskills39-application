import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

type Props = {}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    }
}

const SwapMoney: NextPageWithLayout = (props: Props) => {
    return (
        <>
            <div className="primary-content-area container content-padding">
                <div className="page-title-section">
                    <h2>
                        <span className="gradient-text">Board exchange rate to v2p</span>
                    </h2>
                </div>
            </div>
            <div className="collectors-box">
                <table className="content-table">
                    <thead>
                        <tr>
                            <th scope="col" className="heading-label">
                                Currency
                            </th>
                            <th scope="col" className="heading-label">
                                Exchange rate
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}
SwapMoney.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default SwapMoney
