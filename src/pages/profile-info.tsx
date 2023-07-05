import { useMe } from '@/data/user'
import ProfileInfoForm from '@/layouts/info/Profile/ProfileInfoForm'
import ProfileInfoSidebar from '@/layouts/info/Profile/ProfileInfoSidebar'
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    try {
        return {
            props: {
                ...(await serverSideTranslations(locale!, ['common', 'footer'])),
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


const ProfileInformation: NextPageWithLayout = () => {
    const { me } = useMe();

    const profile = me?.data
    return (
        <div className="primary-content-area background-content">
            <div className=" container content-padding grid-left-sidebar  ">
                {/* / Profile Info Sidebar */}
                <ProfileInfoSidebar />
                {/* / Profile Info Sidebar */}
                <div className="main-content-area">
                    <div className="page-title">
                        <h2>
                            <span className="gradient-text">Profile</span> Info
                        </h2>
                    </div>
                    <ProfileInfoForm profileinfo={profile} />
                </div>
            </div>
        </div>
    )
}
ProfileInformation.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default ProfileInformation