import { BlogDetail } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';

type Props = {
    list_blog: BlogDetail[] | undefined
}

const Blog = ({ list_blog }: Props) => {
    console.log(list_blog)
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
                        <div className="news-thumb">
                            {" "}
                            <Link href={blog.slug}>
                                <Image src={blog.image} alt="" width={458} height={300} />
                            </Link>{" "}
                        </div>
                        <div className="news-content">
                            <div className="news-meta">
                                <div className="news-tags">
                                    <span className="tag-item">
                                        <Link href={blog.slug}>{blog.title}</Link>
                                    </span>
                                </div>
                                by{" "}
                                <Link href={blog.author.username}>
                                    {blog.author.fullname}
                                </Link>
                                , {blog.publdt}
                            </div>
                            <div className="news-title h5">
                                {" "}
                                <Link href="/14-blog-post-centered">
                                    {blog.title}
                                </Link>{" "}
                            </div>
                            <div className="news-excerpt">
                                {parse(blog.introduce)}
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

export default Blog