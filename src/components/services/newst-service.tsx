import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project_thumb_1 from '@/assets/images/content/previews/project-thumb-1.png'
import project_thumb_3 from '@/assets/images/content/previews/project-thumb-3.png'
import project_thumb_21 from '@/assets/images/content/previews/project-thumb-21.png'
import subtle_image_1 from '@/assets/images/content/subtle-images/subtle-image-1.png'


export const NewestService = () => {
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
                <div className="featured-creators-item">
                    <Image
                        src={subtle_image_1}
                        width={470}
                        height={540}
                        alt=""
                        loading="lazy"
                    />
                    <div className="featured-creators-wrapper">
                        <div className="featured-creators-info-wrapper">
                            <div className="featured-creators-info">
                                <div className="title h4">
                                    {" "}
                                    <Link href="/08-profile-page">
                                        Dexter Stark
                                    </Link>{" "}
                                </div>
                                <div className="item-meta">
                                    <span className="avatar box-26">
                                        {" "}
                                        <Link href="/08-profile-page">
                                            <img
                                                src="img/avatar.png"
                                                height={100}
                                                width={100}
                                                alt=""
                                                loading="lazy"
                                            />
                                        </Link>{" "}
                                        <span className="verified">
                                            <svg className="crumina-icon">
                                                <use xlinkHref="#check-icon" />
                                            </svg>
                                        </span>
                                    </span>
                                    @DexterStark
                                </div>
                            </div>
                            <div className="follow-me gradient-border_white-bg">
                                <button className="btn btn-normal">Follow!</button>
                            </div>
                        </div>
                        <ul className="social-icons-list">
                            <li className="social-icon icon-border">
                                {" "}
                                <a href="#">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#link-icon" />
                                    </svg>
                                </a>
                            </li>
                            <li className="social-icon icon-border">
                                {" "}
                                <a href="#">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#facebook-icon" />
                                    </svg>
                                </a>
                            </li>
                            <li className="social-icon icon-border">
                                {" "}
                                <a href="#">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#twitter-icon" />
                                    </svg>
                                </a>
                            </li>
                            <li className="social-icon icon-border">
                                {" "}
                                <a href="#">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#instagram-icon" />
                                    </svg>
                                </a>
                            </li>
                            <li className="social-icon icon-border">
                                {" "}
                                <a href="#">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#twitch-icon" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div className="about-creator">
                            <p>
                                I’m a graphic designer and illustrator from Mexico City. Since 2
                                years ago I specialize on big mural pieces and street art that
                                you can find in countries all around the world!
                            </p>
                        </div>
                        <div className="creator-stats">
                            <div className="stats-item">
                                <div className="number title">12.3K</div>
                                <div className="label">Followers</div>
                            </div>
                            <div className="stats-item">
                                <div className="number title">7.2K</div>
                                <div className="label">Following</div>
                            </div>
                            <div className="stats-item">
                                <div className="number title">135</div>
                                <div className="label">Created</div>
                            </div>
                            <div className="stats-item">
                                <div className="number title">9</div>
                                <div className="label">On Sale</div>
                            </div>
                        </div>
                        <div className="projects-previews">
                            <div className="preview-box">
                                {" "}
                                <Link href="/05-product-page">
                                    <Image
                                        src={project_thumb_1}
                                        width={68}
                                        height={68}
                                        alt=""
                                        loading="lazy"
                                    />
                                </Link>{" "}
                            </div>
                            <div className="preview-box">
                                {" "}
                                <Link href="/06-product-page-v3">
                                    <img
                                        src="img/content/previews/project-thumb-2.png"
                                        height={66}
                                        width={66}
                                        alt=""
                                        loading="lazy"
                                    />
                                </Link>{" "}
                            </div>
                            <div className="preview-box">
                                {" "}
                                <Link href="/05-product-page">
                                    <Image
                                        src={project_thumb_3}
                                        width={68}
                                        height={68}
                                        alt=""
                                        loading="lazy"
                                    />
                                </Link>{" "}
                            </div>
                            <div className="preview-box">
                                {" "}
                                <Link href="/05-product-page">
                                    <Image
                                        src={project_thumb_21}
                                        height={50}
                                        width={50}
                                        alt=""
                                        loading="lazy"
                                    />
                                </Link>{" "}
                            </div>
                            <div className="preview-box more-projects">
                                {" "}
                                <Link href="/08-profile-page">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#dots-icon" />
                                    </svg>
                                </Link>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
