import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profilecover from '@/assets/images/content/profile/profile-cover-1.png'
import avatar from '@/assets/images/avatar.png'
import { useMe } from '@/data/user';

const ProfileHeader = () => {
    const { me } = useMe();
    return (
        <>
            <div className="profile-header-section">
                <div className="cover-image">
                    <Image src={profilecover} alt="" />
                </div>
                <div className="about-author-section container">
                    <div className="profile-header-user-profile">
                        <div className="avatar box-152">
                            <Link href="/profile-info">
                                <Image src={avatar} alt="Avatar" />
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
                                <div className="number">12</div>
                                <div className="label">Followers</div>
                            </div>
                            <div className="following-number">
                                <div className="number">2</div>
                                <div className="label">Following</div>
                            </div>
                            <div className="likes-number">
                                <div className="number">2</div>
                                <div className="label">Proposal Rating</div>
                            </div>
                        </div>
                        <div className="profile-author-info">
                            <h3 className="author-name gradient-text">
                                <Link href="/08-profile-page">
                                    {me?.data.fullname}
                                </Link>
                            </h3>
                            <div className="author-meta">@{me?.data.username}</div>
                            <div className="download-file">
                                Ox465d53...d9c6
                                <svg className="crumina-icon">
                                    <use xlinkHref="#copy-icon" />
                                </svg>
                            </div>
                        </div>
                        <div className="projects-meta">
                            <div className="projects-number">
                                <div className="number">4</div>
                                <div className="label">Consider</div>
                            </div>
                            <div className="onsale-number">
                                <div className="number">12</div>
                                <div className="label">On rating</div>
                            </div>
                            <div className="country">
                                <div className="number">0 </div>
                                <div className="label">No rating</div>
                            </div>
                        </div>
                    </div>

                    <div className="author-description">
                        <p>
                            {me?.data.aboutme}
                            <span className="bold">Read More</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="profile-header-mobile">
                <div className="cover-image">
                    <Image src={profilecover} alt="" />
                </div>
                <div className="about-author-section container">
                    <div className="profile-header-user-profile">
                        <div className="avatar box-64 bordered">
                            <Link href="/08-profile-page">
                                <Image src={avatar} alt="" />
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
                                    {me?.data.fullname}
                                </Link>
                            </h5>
                            <div className="author-meta">@{me?.data.username}</div>
                            <div className="download-file">
                                Ox465d53...d9c6
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

export default ProfileHeader