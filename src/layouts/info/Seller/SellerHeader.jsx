import Rating from '@/utils/get-star'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SellerHeader = ({data}) => {

    return (
        <>
            <div className="profile-header-section">
                <div className="cover-image">
                    <Image src={data.cover} alt="" />
                </div>
                <div className="about-author-section container">
                    <div className="profile-header-user-profile">
                        <div className="avatar box-152">
                            <Link href="/profile-info">
                                <Image src={data.avatar} alt="Avatar" />
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
                                <div className="string">{data.from}</div>
                                <div className="label">From</div>
                            </div>
                            <div className="following-number">
                                <div className="string">{data.membersince}</div>
                                <div className="label">Member since</div>
                            </div>
                            <div className="likes-number">
                                <div className="string">{data.language.mainLanguage}</div>
                                <div className="label">Language</div>
                            </div>
                        </div>
                        <div className="profile-author-info">
                            <h3 className="author-name gradient-text">
                                <Link href={`/user-profile/${data.username}`}>
                                    {data.fullname}
                                </Link>
                            </h3>
                            <div className="author-meta">@{data.username}</div>
                            <div className="download-file">
                                {data.wallet.address}
                                <svg className="crumina-icon">
                                    <use xlinkHref="#copy-icon" />
                                </svg>
                            </div>
                        </div>
                        <div className="projects-meta">
                            <div className="projects-number">
                                <div className="string">{data.skills.mainskills}</div>
                                <div className="label">Skills</div>
                            </div>
                            <div className="onsale-number">
                                <div className="string">{data.lastdelivery}</div>
                                <div className="label">Last delivery</div>
                            </div>
                            <div className="country">
                                <div className="string"><Rating rating={data.rating} /></div>
                                <div className="label">On rating</div>
                            </div>
                        </div>
                    </div>

                    <div className="author-description">
                        <p>
                            {data.introduce}
                            <span className="bold">Read More</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="profile-header-mobile">
                <div className="cover-image">
                    <Image src={data.cover} alt="" />
                </div>
                <div className="about-author-section container">
                    <div className="profile-header-user-profile">
                        <div className="avatar box-64 bordered">
                            <Link href={`/user-profile/${data.username}`}>
                                <Image src={data.avatar} alt="" />
                            </Link>
                            <span className="verified">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#check-icon" />
                                </svg>
                            </span>
                        </div>
                        <div className="profile-author-info">
                            <h5 className="author-name gradient-text">
                                <Link href="/profile-info">
                                    {data.fullname}
                                </Link>
                            </h5>
                            <div className="author-meta">@{data.username}</div>
                            <div className="download-file">
                                {data.wallet.address}
                                <svg className="crumina-icon">
                                    <use xlinkHref="#copy-icon" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SellerHeader