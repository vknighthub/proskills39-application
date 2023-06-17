import { Newestservice } from '@/types';
import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

type PageProps = {
    data: Newestservice[]
}

export const NewestService = ({ data }: PageProps) => {
    const {t} = useTranslation('common')
    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    <span className="gradient-text">{t('text-newest')}</span> {t('text-service')}
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
                                <div className="featured-creators-info mw-15">
                                    <div className="title h4">
                                        {" "}
                                        <Link href={`/categories/services/servicedetail/${service.slug}`}>
                                            {service.title}
                                        </Link>{" "}
                                    </div>
                                    <div className="item-meta">
                                        <span className="avatar box-26">
                                            {" "}
                                            <Link href={`/user-profile/${service.username}`}>
                                                {service.sellerInfor?.avatar &&
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
