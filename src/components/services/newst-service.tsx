import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import subtle_image_1 from '@/assets/images/service/logo-design.webp'
import subtle_image_2 from '@/assets/images/service/logo.webp'
import avatar_Weperfectionist from '@/assets/images/avatar/weperfectlonlst.jpg';
import avatar_Logoflow from '@/assets/images/avatar/logoflow.webp';

export const NewestService = () => {
    const list_new_services = [
        {
            id: 1,
            name: 'Weperfectionist',
            link: 'Fonts-&-Tyographyservices-36',
            image: subtle_image_1,
            avatar: avatar_Weperfectionist,
            tag: '@weperfectionist',
            content: 'We Perfectionist is a highly talented and dedicated team, focused on providing unique logo design absolutely from scratch. A Logo is the face of your brand which is as equally important as the success of your business and we make sure to dig into the pillars of your success in depth.'
        },
        {
            id: 2,
            name: 'Logoflow',
            link: 'Fonts-&-Tyographyservices-36',
            image: subtle_image_2,
            avatar: avatar_Logoflow,
            tag: '@logoflow',
            content: 'This Gig is of one of many design kinds we offer. Flat design concepts are one of our fortes. For the logo to be timeless it doesnot need to be with complex structures or patterns. It just needs to be simple, memorable and which gives a distinctive essence to your business'
        }
    ]
    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    <span className="gradient-text">Newest</span> service
                </div>
                <div className="all-items-link">
                    {" "}
                    <Link href="/10-creators">
                        Explore all service
                    </Link>{" "}
                </div>
            </div>
            <div className="featured-creators-box grid-2-columns">
                {list_new_services.map((service, index) => (
                    <div className="featured-creators-item" key={index}>
                        <Image
                            src={service.image}
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
                                        <Link href={`/categories/services/servicedetail/${service.link}`}>
                                            {service.name}
                                        </Link>{" "}
                                    </div>
                                    <div className="item-meta">
                                        <span className="avatar box-26">
                                            {" "}
                                            <Link href="/08-profile-page">
                                                <Image
                                                    src={service.avatar}
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
                                        {service.tag}
                                    </div>
                                </div>
                                <div className="follow-me gradient-border_white-bg">
                                    <button className="btn btn-normal">View detail!</button>
                                </div>
                            </div>

                            <div className="about-creator">
                                <p>
                                    {service.content}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}
