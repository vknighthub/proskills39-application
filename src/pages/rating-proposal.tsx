import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import ProfileHeader from './ratings/ProfileHeader'
import RatingPageTabs from './ratings/RatingPageTabs'
type Props = {}

const RatingProposal: NextPageWithLayout = (props: Props) => {

    return (
        <div className="primary-content-area profile-page">
            <ProfileHeader />

            <RatingPageTabs />

        </div>
    )
}
RatingProposal.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default RatingProposal
