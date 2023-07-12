import { useMe } from '@/data/user'
import ProfileInfoForm from '@/layouts/info/Profile/ProfileInfoForm'
import ProfileInfoSidebar from '@/layouts/info/Profile/ProfileInfoSidebar'
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import banner from '@/assets/images/user/banner.png'
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
            <div className="image">
                <div className="screen-shot-wrapper">
                    <Image className="screen-shot"
                        alt="Screen shot"
                        src={banner}
                    />
                </div>
            </div>
            <div className=" container grid-left-sidebar  ">
                <ProfileInfoSidebar />
            </div>
            <div className="main-content-area">
                <div className="page-title">
                        <h2>
                            <span className="gradient-text">Profile</span> Info
                        </h2>
                    </div>
            </div>
        </div>
    )
}
ProfileInformation.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default ProfileInformation