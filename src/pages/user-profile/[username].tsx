import avatar from '@/assets/images/avatar.png'
import profilecover from '@/assets/images/content/profile/profile-cover-1.png'
import routes from '@/config/routes'
import { FetchUserProfile } from '@/data/blog'
import client from '@/data/client'
import ServiceListOfSeller from '@/layouts/info/Seller/ServiceListOfSeller'
import Servicepopular from '@/layouts/info/Seller/Servicepopular'
import Layout from '@/layouts/_layout'
import Seo from '@/layouts/_seo'
import { NextPageWithLayout, UserProfilePageResponse } from '@/types'
import { Icon } from '@iconify/react'
import parse from 'html-react-parser'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import invariant from 'tiny-invariant'
import ServiceTopAvargage from './../../layouts/info/Seller/ServiceTopAvargage'

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
    }, [username])

    return (
        <>
            <Seo
                title="ProSkills39 - Userprofile"
                description={userprofile.result.data.profile.fullname}
                url={routes.userprofile(username)}
                image_url={userprofile.result.data.profile.avatar}
            />
            <div className="primary-content-area profile-page">
                <div className="profile-header-section">
                    <div className="cover-image">
                        <Image src={profilecover} alt={"Cover"} width={2115} height={320} />
                    </div>
                    <div className="about-author-section container">
                        <div className="profile-header-user-profile">
                            <div className="avatar box-152">
                                <Link href="/profile-info">
                                    <Image src={data.profile.avatar ? data.profile.avatar : avatar} alt={data.profile.fullname} width={80} height={80} />
                                </Link>
                                <span className="verified">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#check-icon" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="author-primary-info">
                            <div className="activity-meta">
                                <div className="followers-number">
                                    <div className="string">{data.profile.country}</div>
                                    <div className="label">From</div>
                                </div>
                                <div className="following-number">
                                    <div className="string">{data.profile.email}</div>
                                    <div className="label">Email</div>
                                </div>
                                <div className="likes-number">
                                    <div className="string">{data.profile.phone}</div>
                                    <div className="label">Phone</div>
                                </div>
                            </div>
                            <div className="profile-author-info">
                                <h3 className="author-name gradient-text">
                                    <Link href="/08-profile-page">
                                        {data.fullname}
                                    </Link>
                                </h3>
                                <div className="author-meta">@{data.profile.username}</div>
                            </div>
                            <div className="projects-meta">
                                <div className="projects-number">
                                    <div className="string">
                                        {
                                            data.profile.gender === 1 
                                            ? <Icon color="success" fontSize="large" icon='fontisto:male' />
                                            : <Icon color="success" fontSize="large" icon='fa:female' />
                                        }

                                    </div>
                                    <div className="label">Gender</div>
                                </div>
                                <div className="onsale-number">
                                    <div className="string">
                                        {data.profile.isSeller ?
                                            <Icon color="success" fontSize="large" icon='mdi:account-tick-outline' />
                                            :
                                            <Icon color="error" fontSize="large" icon='uiw:user-delete'></Icon>
                                        }
                                    </div>
                                    <div className="label">Seller</div>
                                </div>
                                <div className="country">
                                    <div className="string">
                                        {data.profile.isBuyer ?
                                            <Icon color="success" fontSize="large" icon='mdi:account-tick-outline' />
                                            :
                                            <Icon color="error" fontSize="large" icon='uiw:user-delete'></Icon>
                                        }
                                    </div>
                                    <div className="label">Buyer</div>
                                </div>
                            </div>
                        </div>

                        <div className="author-description">
                            {data.profile.aboutme && parse(data.profile.aboutme)}
                        </div>
                    </div>
                </div>


                <ServiceListOfSeller data={data.services.allservice.data} />

                <Servicepopular data={data.services.servicepopular.data} />

                <ServiceTopAvargage data={data.services.servicetopaverage.data} />


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