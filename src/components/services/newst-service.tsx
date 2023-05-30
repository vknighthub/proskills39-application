import { Newestservice } from '@/types';
import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';

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
                            src={service.files[0]?.url}
                            width={470}
                            height={340}
                            alt=""
                        />
                        <div className="featured-creators-wrapper">
                            <div className="featured-creators-info-wrapper">
                                <div className="featured-creators-info mw-20">
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
                                                {service.sellerInfor.avatar &&
                                                    <Image
                                                        src={service.sellerInfor.avatar}
                                                        height={100}
                                                        width={100}
                                                        alt="Weperfectionist"
                                                    />
                                                }
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
                                <div className="follow-me gradient-border_white-bg ml-lg-1">
                                    <Link href={`/categories/services/servicedetail/${service.slug}`} className="btn btn-normal">View detail!</Link>
                                </div>
                            </div>

                            <div className="about-creator">
                                <p>
                                    {service.introduce && parse(service.introduce)}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}
