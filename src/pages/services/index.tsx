import routes from '@/config/routes';
import Layout from '@/layouts/_layout'
import Seo from '@/pages/_seo';
import { NextPageWithLayout } from '@/types'
import CutText from '@/utils/CutText';
import RatingStars from '@/utils/ratingstar';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import newest from '@/assets/images/svg/newest.svg';
import { FetchAllServices } from '@/data/service';
import { getPagination, pagination } from '@/utils/util';
import iconv2p from '@/assets/images/svg/iconv2p.svg'


type Props = {}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};


const ServicePage: NextPageWithLayout = (props: Props) => {
    const [active, setActive] = useState(1);

    const { data, total, refetch } = FetchAllServices(
        {
            page: active,
            limit: 20,
        }
    )

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

    return (
        <>
            <Seo
                title="ProSkills39 - Pro Skills For Your Success"
                description="Nền tảng kết nối nhà cung cấp dịch vụ, chuyên gia với những người có nhu cầu sử dụng dịch vụ, kỹ năng đó."
                url={routes.services}
                image_url='https://api.proskills39.com/system/logo/logo-seo.png'
            />
            <div className="primary-content-area background-content">
                <div className="single-post medium-section mt-6">
                    <div className="post-heading">
                        <div className="news-meta">
                            <svg style={{ width: 650, height: 137, textAlign: 'center' }} xmlns="http://www.w3.org/2000/svg">
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
                                        Service MarketPlace
                                    </text>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="container section-padding overflow-hidden">

                    <div className="featured-box">
                        <div className="featured-box-wrapper grid-5-columns">
                            {data?.listservice.map((item: any) => (
                                <div className="featured-item" key={item.id} >
                                    <Link href={`/categories/services/servicedetail/${item.slug}`}>
                                        <div className="featured-item-wrapper newest-service">
                                            <div className="featured-item-content">
                                                <div className="featured-item-image">
                                                    <Image src={item.overviews.files[0]?.url ? item.overviews.files[0].url : newest} alt="" width={238.4} height={162} />
                                                </div>
                                                <div className="featured-item-info">

                                                    <div className="title">
                                                        {item.title}
                                                    </div>
                                                    <RatingStars value={item.averagerating} />
                                                    <div className="avatar-block">
                                                        <div className="avatar box-26">
                                                            <Link href="/profile-info">
                                                                <Image src={item.sellerInfor.avatar}
                                                                    alt="Avatar"
                                                                    width={32}
                                                                    height={32}
                                                                />
                                                            </Link>
                                                            <span className="verified">
                                                                <svg className="crumina-icon">
                                                                    <use xlinkHref="#check-icon" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="avatar-meta">
                                                            <div className="avatar-title">
                                                                <span className="gradient-text fs-6">
                                                                    <Link href={`/user-profile/${item.sellerInfor.username}`}>
                                                                        {item.sellerInfor.fullname}
                                                                    </Link>{" "}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="item-money">
                                                        <Image
                                                            src={iconv2p}
                                                            alt="v2p icon"
                                                            width={56}
                                                            height={56}
                                                        />
                                                        <span className="fs-5">{item.price}</span>
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
ServicePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default ServicePage