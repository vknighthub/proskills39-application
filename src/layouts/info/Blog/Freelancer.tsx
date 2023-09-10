import { Freelancers } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    list_freelancer: Freelancers[]
}

const Freelancer = ({ list_freelancer }: Props) => {
    
    return (
        <div className="primary-content-area container content-padding">
            <div className="page-title-section">
                <h2>
                    <span className="gradient-text">Freelancers</span>
                </h2>
            </div>
            {/*  POSTS GRID */}
            <div className="news-feed grid-3-columns">
                {list_freelancer.map((freelancer) => (
                    <div className="news-item" key={freelancer.id}>
                        <div className="news-thumb">
                            {" "}
                            <Link href="/14-blog-post-centered">
                                <Image src={freelancer.image} alt="" width={458} height={306} />
                            </Link>{" "}
                        </div>
                        <div className="news-content">
                            <div className="news-meta">
                                <div className="news-tags">
                                    <span className="tag-item">
                                        <Link href="#">{freelancer.catalog}</Link>
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
                                    {freelancer.title}
                                </Link>{" "}
                            </div>
                            <div className="news-excerpt">
                                {freelancer.content}
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

export default Freelancer