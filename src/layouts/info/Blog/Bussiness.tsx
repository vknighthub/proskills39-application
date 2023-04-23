import { Business } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    list_business: Business[]
}

const Bussiness = ({ list_business }: Props) => {
    return (
        <div className="primary-content-area container content-padding">
            <div className="page-title-section">
                <h2>
                    <span className="gradient-text">Business</span>
                </h2>
            </div>
            {/*  POSTS GRID */}
            <div className="news-feed grid-3-columns">
                {list_business.map((business) => (
                    <div className="news-item" key={business.id}>
                        <div className="news-thumb">
                            {" "}
                            <Link href="/14-blog-post-centered">
                                <Image src={business.image} alt="" width={458} height={306} />
                            </Link>{" "}
                        </div>
                        <div className="news-content">
                            <div className="news-meta">
                                <div className="news-tags">
                                    <span className="tag-item">
                                        <Link href="#">{business.catalog}</Link>
                                    </span>
                                </div>
                                by{" "}
                                <Link href="/anhben">
                                    AnhBen
                                </Link>
                                , March 26th, 2023
                            </div>
                            <div className="news-title h5">
                                {" "}
                                <Link href="/14-blog-post-centered">
                                    {business.title}
                                </Link>{" "}
                            </div>
                            <div className="news-excerpt">
                                {business.content}
                            </div>
                            <div className="read-more-link">
                                {" "}
                                <Link href="/14-blog-post-centered">

                                    Read More
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#arrow-right2-icon" />
                                    </svg>
                                </Link>{" "}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/*  PAGINATION */}
        </div>
    )
}

export default Bussiness