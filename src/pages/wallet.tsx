import React from 'react'
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import Image from 'next/image'
import nami from '@/assets/images/content/wallet/nami.svg'
import eternl from '@/assets/images/content/wallet/eternl.png'
import momo from '@/assets/images/content/wallet/momo.svg'
import Link from 'next/link'


type Props = {}

const listWallet = [
    {
        id: 'nami',
        name: 'Nami',
        image: nami,
        description: 'Nami is a browser based wallet extension to interact with the Cardano blockchain and is non-custodial.',
        color: 'turquoise-gradient',
        linkdownload: 'https://namiwallet.io/'
    },
    {
        id: 'eternl',
        name: 'Eternl',
        image: eternl,
        description: 'A Cardano light wallet for the Cardano community. Establish Eternl as one of the major Cardano',
        color: 'orange-gradient',
        linkdownload: 'https://eternl.io/app/mainnet/welcome'
    }
]

const Wallet: NextPageWithLayout = ({ }: Props) => {
    return (
        <div className="primary-content-area container content-padding">
            <div className="wallet-wrapper section-small">
                <div className="section-title text-center">
                    <span className="gradient-text">Connect</span> your Wallet
                </div>
                <div className="wallet-grid">
                    {listWallet.map((wallet) => (
                        <div className={`wallet-item ${wallet.color}`} key={wallet.id}>
                            <div className="wallet-icon">
                                <Image src={wallet.image} alt="eternl" style={{ width: '70px', height: '70px'}} />
                            </div>
                            <div className="wallet-info">
                                <div className="title h5"> <a href={wallet.linkdownload} target="_blank" rel="noreferrer">{wallet.name}</a></div>
                                <div className="description">
                                    {wallet.description}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="notification-text text-center">
                    New to wallets?{' '}
                    <Link href="/19-faq">
                        Learn how to make a wallet
                    </Link>{' '}
                    in our FAQs page
                    <br /> and check other helpful guides to get started!
                </div>
            </div>
        </div>
    )
}

Wallet.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default Wallet
