import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import paypal from '@/assets/images/content/wallet/paypal.svg'
import momo from '@/assets/images/content/wallet/momo.svg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    }
}

const listWallet = [
    {
        id: 'paypal',
        name: 'Paypal',
        image: paypal,
        description: 'PayPal is the faster, safer way to send and receive money or make an online payment. Get started or create a merchant account to accept payments.',
        color: 'turquoise-gradient',
        linkdownload: 'https://www.paypal.com/us/home',
        link: '/wallet/paypal'
    },
    {
        id: 'momo',
        name: 'Momo',
        image: momo,
        description: 'MoMo is the most popular online payment application in Vietnam today, with many incentives when used to pay for services.Let register at momo',
        color: 'purple-gradient-diagonal',
        linkdownload: 'https://momo.vn/',
        link: '/wallet/momo'
    }
]

const TopUp: NextPageWithLayout = (props: Props) => {
    return (
        <>
            <div className="primary-content-area container content-padding">
                <div className="wallet-wrapper section-small">
                    <div className="section-title text-center">
                        <span className="gradient-text">Top Up v2p wallet</span>
                    </div>

                    <div className="wallet-grid">
                        {listWallet.map((wallet) => (
                            <div className={`wallet-item ${wallet.color}`} key={wallet.id}>
                                <Link href={wallet.link}>
                                    <div className="wallet-icon">
                                        <Image src={wallet.image} alt="eternl" style={{ width: '70px', height: '70px' }} />
                                    </div>
                                    <div className="wallet-info">
                                        <div className="title h5"> <a href={wallet.linkdownload} target="_blank" rel="noreferrer">{wallet.name}</a></div>
                                        <div className="description">
                                            {wallet.description}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="notification-text text-center">
                        Please choose a wallet you want to connect
                    </div>


                </div>
            </div>
        </>

    )
}
TopUp.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default TopUp
