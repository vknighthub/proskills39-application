import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import subtle_image_1 from '@/assets/images/service/logo-design.webp'
import subtle_image_2 from '@/assets/images/service/logo.webp'
import avatar_Weperfectionist from '@/assets/images/avatar/weperfectlonlst.jpg';
import avatar_Logoflow from '@/assets/images/avatar/logoflow.webp';
import { Newestservice } from '@/types'

type PageProps = {
    data: Newestservice[]
}

export const NewestService = ({ data }: PageProps) => {
    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    <span className="gradient-text">Newest</span> service
                </div>
                <div className="all-items-link">
                    {" "}
                    <Link href="/services/services">
                        Explore all service
                    </Link>{" "}
                </div>
            </div>
            <div className="featured-creators-box grid-2-columns">
                {data.map((service, index) => (
                    <div className="featured-creators-item" key={index}>
                        <Image
                            src={service.files[0].url}
                            width={470}
                            height={340}
                            alt=""
                            loading="lazy"
                        />
                        <div className="featured-creators-wrapper">
                            <div className="featured-creators-info-wrapper">
                                <div className="featured-creators-info">
                                    <div className="title h4">
                                        {" "}
                                        <Link href={`/categories/services/servicedetail/${service.slug}`}>
                                            {service.title}
                                        </Link>{" "}
                                    </div>
                                    <div className="item-meta">
                                        <span className="avatar box-26">
                                            {" "}
                                            <Link href="/08-profile-page">
                                                <Image
                                                    src={service.sellerInfor.avatar}
                                                    height={100}
                                                    width={100}
                                                    alt="Weperfectionist"
                                                />
                                            </Link>{" "}
                                            <span className="verified">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#check-icon" />
                                                </svg>
                                            </span>
                                        </span>
                                        @{service.username}
                                    </div>
                                </div>
                                <div className="follow-me gradient-border_white-bg">
                                    <button className="btn btn-normal">View detail!</button>
                                </div>
                            </div>

                            <div className="about-creator">
                                <p>
                                    {service.descriptions}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}
