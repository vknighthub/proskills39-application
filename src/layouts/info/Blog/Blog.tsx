import rectangle from "@/assets/images/content/blog/rectangle.svg";
import seemore from "@/assets/images/content/blog/seemore.svg";
import vector from "@/assets/images/content/blog/vector-187-1.svg";
import { BlogDetail } from '@/types';
import Image from 'next/image';
import Link from 'next/link';



type Props = {
    list_blog: BlogDetail[] | undefined
}

const Blog = ({ list_blog }: Props) => {

    return (
        <div className="primary-content-area container content-padding">
            <div className="page-title-section">
                <h2>
                    <span className="gradient-text">Our Blog</span>
                </h2>
            </div>
            {/*  POSTS GRID */}
            <div className="news-feed grid-3-columns">
                {list_blog?.map((blog) => (
                    <div className={`component-blog`} key={blog.id}>
                        <div className="overlap">
                            <Image className="rectangle" alt="Rectangle" src={rectangle} />
                            <div className="group">
                                <div className="see-more">
                                    <Link href ={`/blog-detail/${blog.slug}`}>
                                        See more
                                    </Link>
                                </div>
                                <Image className="img" alt="Img" src={seemore} />
                            </div>
                        </div>
                        <Image className="vector" alt="Vector" src={vector} />
                        <div className="overlap-group">
                            {blog.typefile === 'image' ?
                                <Image src={blog.image} width={452} height={264} alt={blog.title} />
                                :
                                <iframe src={blog.image} width={452} height={250} />
                            }
                        </div>
                        <h6 className="nh-ng-v-n-freelancer" >
                            {blog.title}
                        </h6>

                        <p className="ch-o-c-nh-b-n-ang">
                            {blog.introduce}
                        </p>
                        <div className="overlap-group-2">
                            <div className="by">By</div>
                            <div className="element">{blog.publdt}</div>
                            <Link className="alyssa-sweeten" href={`/user-profile/${blog.author.username}`} rel="noopener noreferrer" target="_blank">
                                {blog.author.fullname}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {/*  PAGINATION */}
        </div>
    )
}

export default Blog