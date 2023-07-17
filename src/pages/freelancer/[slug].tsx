import routes from '@/config/routes'
import { FetchFreelancerByLevel } from '@/data/freelancer'
import Layout from '@/layouts/_layout'
import Seo from '@/pages/_seo'
import { NextPageWithLayout } from '@/types'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import invariant from 'tiny-invariant'
import frame from '@/assets/images/freelancer/frame.png';
import punkfreelancer from '@/assets/images/freelancer/punk-freelancer.png';
import maximize_2 from '@/assets/images/svg/maximize-2.svg';
import { getPagination, pagination } from '@/utils/util'
import Link from 'next/link'
import Spinner from '@/components/spinner'

const FreelacerPage: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({ slug }) => {
    const [active, setActive] = useState(1);

    const { data, total, refetch,isLoading } = FetchFreelancerByLevel({
        slug: slug,
        page: active,
        limit: 10,
        language: 'en'
    })

    const [state, setstate] = useState<number[]>([]);


    useEffect(() => {
        if (total) {
            pagination(".news-item", 20, active);
            setstate(getPagination(total, 20));
        }

    }, [total, active]);


    useEffect(() => {
        refetch()
    }, [active])

    if (isLoading) return <Spinner />

    return (
        <>
            <Seo
                title="ProSkills39 - Pro Skills For Your Success - Freelancer"
                description="Nền tảng kết nối nhà cung cấp dịch vụ, chuyên gia với những người có nhu cầu sử dụng dịch vụ, kỹ năng đó."
                url={routes.freelancer(slug!)}
                image_url='https://api.proskills39.com/system/logo/BEN.png'
            />
            <div className="primary-content-area background-content">
                <div className="single-post medium-section mt-6">
                    <div className="post-heading">
                        <h1 className="home-page-title">
                            Freelancer
                        </h1>
                        <div className="news-meta">
                            <svg style={{ width: 390, height: 137, textAlign: 'center' }} xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradient" y1="0" y2="1">
                                        <stop stopColor="#0061D3" offset="0" />
                                        <stop stopColor="#04CDF9" offset="1" />
                                    </linearGradient>
                                </defs>
                                <g>
                                    <text id="text" y="100"
                                        fontSize="60"
                                        fontStyle="normal"
                                        letterSpacing="0.15rem"
                                        fontWeight="700"
                                        strokeWidth="2" stroke="url(#gradient)" fill="none">
                                        {data?.title}
                                    </text>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="container section-padding overflow-hidden">
                    <div className="featured-box">
                        <div className="featured-box-wrapper grid-5-columns">
                            {data?.listdata?.map((freelancer) => (
                                <div className="box-freelancer" key={freelancer.username}>
                                    <Link href={`/user-profile/${freelancer.username}`}>
                                        <div className="component-wrapper">
                                            <div className="component">
                                                <div className="overlap">
                                                    <div className="group">
                                                        <div className="vector">
                                                            <div className="overlap-group">
                                                                <Image className="img" alt="Vector" src={frame} />
                                                                <Image
                                                                    className="avatar-freelancer"
                                                                    alt="Chuot punk"
                                                                    src={freelancer.avatar ? freelancer.avatar : punkfreelancer}
                                                                    width={228}
                                                                    height={158}
                                                                    style={{ borderRadius: 10 }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-wrapper">
                                                        <Image src={freelancer.level_icon} alt={freelancer.level_title} width={45} height={45}></Image>
                                                    </div>
                                                    <div className="div">
                                                        <div
                                                            className="group-wrapper"
                                                            style={{
                                                                backgroundImage: `url(${maximize_2.src})`,
                                                            }}
                                                        >

                                                        </div>
                                                        <div className="overlap-2">
                                                            <div className="text-wrapper-2">{freelancer.fullname}</div>
                                                            <div className="rectangle-2" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pagination-section flex-center">
                        <ul className="pagination-list">
                            <li className="page-item page-nav-prev">
                                <a
                                    href="#"
                                    className="muted3-color"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActive(active === 1 ? 1 : active - 1);
                                    }}
                                >
                                    Prev
                                </a>
                            </li>
                            {state &&
                                state.map((s, i) => (
                                    <li key={i} className={`page-item ${active === s ? "active" : ""}`}>
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActive(s);
                                            }}
                                        >
                                            {s}
                                        </a>
                                    </li>
                                ))}
                            <li className="page-item page-nav-next">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActive(active === state.length ? state.length : active + 1);
                                    }}
                                    className="page-item page-nav-next"
                                >
                                    Next
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}
export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const { slug } = params!
    try {
        return {
            props: {
                slug,
                ...(await serverSideTranslations(locale!, ['common', 'footer'])),
            },
            revalidate: 60, // In seconds
        };
    } catch (error) {
        console.log(error)
        //* if we get here, the product doesn't exist or something else went wrong
        return {
            notFound: true,
        };
    }
};
export const getStaticPaths: GetStaticPaths = async (
    {
        locales,
    }
) => {
    invariant(locales, 'locales is not defined');
    return { paths: [], fallback: 'blocking' };
};
FreelacerPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default FreelacerPage