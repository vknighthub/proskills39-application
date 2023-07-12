import { useMe } from '@/data/user'
import ProfileInfoForm from '@/layouts/info/Profile/ProfileInfoForm'
import ProfileInfoSidebar from '@/layouts/info/Profile/ProfileInfoSidebar'
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import banner from '@/assets/images/user/banner.png'
import parse from 'html-react-parser'
import ServiceTopAvargage from '@/layouts/info/Seller/ServiceTopAvargage'
import ServiceListOfSeller from '@/layouts/info/Seller/ServiceListOfSeller'

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
            <div className="profile-header-section">
                <div className="cover-image">
                    <Image src={profile?.banner ? profile.banner : banner} alt={"Cover"} width={1920} height={320} />
                </div>
                <div className=" container grid-left-sidebar  ">
                    <ProfileInfoSidebar />
                    <div className="main-content-area ml-lg-4 mt-5">
                        <div className="page-title">
                            <h4>
                                <span className="gradient-text">About</span> me
                            </h4>
                            {profile?.aboutme && parse(profile?.aboutme)}
                        </div>
                        <div className="page-title">
                            <h4>
                                <span className="gradient-text">Work</span> history
                            </h4>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
ProfileInformation.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default ProfileInformation