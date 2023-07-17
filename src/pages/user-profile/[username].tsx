import profilecover from '@/assets/images/content/profile/profile-cover-1.jpg'
import routes from '@/config/routes'
import { FetchUserProfile } from '@/data/blog'
import client from '@/data/client'
import { useFollow } from '@/data/user'
import ProfileInfoSidebarSeller from '@/layouts/info/Profile/ProfileInfoSidebarSeller'
import ServiceListOfSeller from '@/layouts/info/Seller/ServiceListOfSeller'
import ServiceTopAvargage from '@/layouts/info/Seller/ServiceTopAvargage'
import Layout from '@/layouts/_layout'
import Seo from '@/pages/_seo'
import { NextPageWithLayout, UserProfilePageResponse } from '@/types'
import parse from 'html-react-parser'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import invariant from 'tiny-invariant'


type PageProps = {
    username: string;
    userprofile: UserProfilePageResponse;
}

type ParsedQueryParams = {
    username: string;
};


const UserProfilePage: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ username, userprofile }) => {

    const { data, refetch } = FetchUserProfile(username, userprofile)

    useEffect(() => {
        refetch()
    }, [username, userprofile])


    const [isFollow, setIsFollow] = useState(data.profile.isFollow)
    const { mutate: handleProcessFollow } = useFollow()
    const handleFollow = (event: any) => {
        event.preventDefault()
        if (data.profile.isFollow) {
            setIsFollow(true)
        } else {
            handleProcessFollow({ username: username })
        }
    }

    useEffect(() => {
        if (data.profile.isFollow) {
            setIsFollow(true)
        }
    }, [data.profile.isFollow])

    return (
        <>
            <Seo
                title="ProSkills39 - Userprofile"
                description={userprofile.result.data.profile.fullname}
                url={routes.userprofile(username)}
                image_url={userprofile.result.data.profile.avatar}
            />
            <div className="primary-content-area profile-page background-content">
                <div className="profile-header-section">
                    <div className="cover-image">
                        <Image src={data.profile.banner ? data.profile.banner : profilecover} alt={"Cover"} width={1920} height={320} />
                    </div>
                    <div className="about-author-section container">

                        <div className=" container grid-left-sidebar  ">
                            <ProfileInfoSidebarSeller data={data} />
                            <div className="main-content-area ml-lg-4 mt-5">
                                <div className="page-title">
                                    <h4>
                                        <span className="gradient-text">About</span> me
                                    </h4>
                                    {parse(data.profile.aboutme)}
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

                <div className="primary-content-area container content-padding">
                    <div className="page-title-section">
                        <h2>
                            <span className="gradient-text">{userprofile.result.data.profile.fullname}</span> Best service
                        </h2>
                    </div>
                    <ServiceTopAvargage data={data.services.servicetopaverage.data} />

                </div>

                <div className="primary-content-area container content-padding">
                    <div className="page-title-section">
                        <h2>
                            <span className="gradient-text">{userprofile.result.data.profile.fullname}</span> Service
                        </h2>
                    </div>
                    <ServiceListOfSeller data={data.services.allservice.data} />
                </div>

            </div>
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async (
    {
        locales,
    }
) => {
    invariant(locales, 'locales is not defined');
    return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<
    PageProps,
    ParsedQueryParams
> = async ({ params, locale }) => {

    const { username } = params!; //* we know it's required because of getStaticPaths

    try {
        const userprofile = await client.users.userinfo({ username: username });

        return {
            props: {
                username,
                userprofile,
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

UserProfilePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default UserProfilePage