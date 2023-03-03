import React from 'react'
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import BecomeACreatorHero from './../layouts/creator/BecomeACreatorHero'
import BecomeACreatorForm from './../layouts/creator/BecomeACreatorForm'

type Props = {}

const Seller: NextPageWithLayout = (props: Props) => {
    return (
        <div>
            <BecomeACreatorHero />
            <BecomeACreatorForm />
        </div>
    )
}

Seller.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default Seller
