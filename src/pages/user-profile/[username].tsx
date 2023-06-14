import avatar from '@/assets/images/avatar.png'
import certificate from '@/assets/images/content/certificate.png'
import education from '@/assets/images/content/education.png'
import iconcheck from '@/assets/images/content/icon-check.svg'
import iconuncheck from '@/assets/images/content/uncheck.png'
import profilecover from '@/assets/images/content/profile/profile-cover-1.png'
import skillsimage from '@/assets/images/content/skills.png'
import routes from '@/config/routes'
import { FetchUserProfile } from '@/data/blog'
import client from '@/data/client'
import ServiceListOfSeller from '@/layouts/info/Seller/ServiceListOfSeller'
import Servicepopular from '@/layouts/info/Seller/Servicepopular'
import Layout from '@/layouts/_layout'
import Seo from '@/layouts/_seo'
import { NextPageWithLayout, UserProfilePageResponse } from '@/types'
import { Icon } from '@iconify/react'
import Chip from '@mui/material/Chip'
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

    const certifications = data.profile.certifications
    const educations = data.profile.educations
    const skills = data.profile.skills

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
                        <Image src={data.profile.banner ? data.profile.banner : profilecover} alt={"Cover"} width={2115} height={320} />
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
                                    <div className="string">{data.profile.datecreated}</div>
                                    <div className="label">Date join</div>
                                </div>
                                <div className="likes-number">
                                    <div className="string">{data.profile.city}</div>
                                    <div className="label">City</div>
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

                        <div className="author-description" >
                            {data.profile.aboutme && parse(data.profile.aboutme)}
                        </div>

                        <div className="container">
                            <div className="placed-bid mt-5" >
                                <div className="bid-placer">
                                    <div className="avatar box-53">
                                        <Image src={skillsimage} alt="avatar" />
                                    </div>
                                    <div className="bid-info">
                                        <div className="bid-date">
                                            {skills.length > 0 ?
                                                skills.map((sk: any) => (
                                                    <Chip label={`${sk.skillname} - ${sk.level}`} variant='outlined' color='success' sx={{ marginRight: 2 }} key={sk.id} />
                                                ))
                                                :
                                                <>
                                                    <span className="gradient-text fs-5 ms-xl-1">This person has no skills. Be careful while using their services</span>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="bid-box">
                                    <div className=" box-42">
                                        <Image src={skills.length > 0 ? iconcheck : iconuncheck} alt="skills" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="placed-bid mt-5 ">
                                <div className="bid-placer">
                                    <div className="avatar box-53 mr-3">
                                        <Image src={certificate} alt="certificate" />
                                    </div>
                                    {certifications.length > 0 ?
                                        certifications.map((certification: any) => (
                                            <div className="bid-info" key={certification.id}>
                                                <div className="bid-title">
                                                    <span className="gradient-text">{certification.name}</span>
                                                </div>
                                                <div className="bid-date">{certification.issuedplace} / {certification.year}</div>
                                                <div className="featured-box ms-xl-3 mt-3">
                                                    {certification.images.map((img: any) => (
                                                        <Image alt={img.id} src={img.thumbnail} width={600} height={300} key={img.id} />
                                                    ))}
                                                </div>
                                            </div>
                                        ))
                                        :
                                        <>
                                            <span className="gradient-text fs-5 ms-xl-3">This person has no certification. Be careful while using their services</span>
                                        </>
                                    }
                                </div>
                                <div className="bid-box">
                                    <div className=" box-42">
                                        <Image src={certifications.length > 0 ? iconcheck : iconuncheck} alt="certification" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="placed-bid mt-5" >
                                <div className="bid-placer">
                                    <div className="avatar box-53">
                                        <Image src={education} alt="avatar" />
                                    </div>
                                    {educations.length > 0 ?
                                        educations.map((education: any) => (
                                            <div className="bid-info" key={education.id}>
                                                <div className="bid-title">
                                                    <span className="gradient-text">{education.universityname} - {education.contryofuniversity}</span>
                                                </div>
                                                <div className="bid-date">{education.major} / {education.year}</div>
                                                <div className="featured-box grid-2-columns mt-3">
                                                    {education.images.map((img: any) => (
                                                        <Image alt={img.id} src={img.thumbnail} width={600} height={300} key={img.id} />
                                                    ))}
                                                </div> </div>
                                        ))
                                        :
                                        <>
                                            <span className="gradient-text fs-5 ms-xl-3">This person has no education. Be careful while using their services</span>
                                        </>
                                    }
                                </div>
                                <div className="bid-box">
                                    <div className=" box-42">
                                        <Image src={educations.length > 0 ? iconcheck : iconuncheck} alt="educations" />
                                    </div>
                                </div>
                            </div> </div>
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