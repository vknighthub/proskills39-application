import { BlogDetail } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';

type Props = {
    list_blog: BlogDetail[] | undefined
}

const Blog = ({ list_blog }: Props) => {

    return (
        <div className="primary-content-area container content-padding">
            <div className="page-title-section">
                <h2>
                    Our<span className="gradient-text"> Blog</span>
                </h2>
            </div>
            {/*  POSTS GRID */}
            <div className="news-feed grid-3-columns">
                {list_blog?.map((blog) => (
                    <div className="news-item" key={blog.id}>
                        <div className="news-thumb" >
                            <Link href={`/blog-detail/${blog.slug}`}>
                                {blog.typefile === 'video' ?
                                    <iframe
                                        src={blog.image}
                                    >

                                    </iframe>
                                    :
                                    <Image
                                        src={blog.image}
                                        alt=""
                                        width={458}
                                        height={300}
                                        style={{ maxWidth: '100%', maxHeight: '300px', minHeight: '300px' }}
                                    />
                                }
                            </Link>
                        </div>
                        <div className="news-content">
                            <div className="news-meta">
                                <div className="news-tags">
                                    <span className="tag-item">
                                        {blog.catalog.name}
                                    </span>
                                </div>
                                by{" "}
                                <Link href={`/user-profile/${blog.author.username}`}>
                                    {blog.author.fullname}
                                </Link>
                                , {blog.publdt}
                            </div>
                            <div className="news-title h5">
                                {" "}
                                <Link href={`/blog-detail/${blog.slug}`}>
                                    {blog.title}
                                </Link>{" "}
                            </div>
                            <div className="news-excerpt">
                                {parse(blog.introduce)}
                            </div>
                            <div className="read-more-link">
                                {" "}
                                <Link href={`/blog-detail/${blog.slug}`}>
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

export default Blog