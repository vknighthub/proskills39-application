import { BlogDetail } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import rectangle from "@/assets/images/content/blog/rectangle.svg"
import seemore from "@/assets/images/content/blog/seemore.svg"
import vector from "@/assets/images/content/blog/vector-187-1.svg"
import lifecoaching from "@/assets/images/content/blog/life-coaching-1.png"
import longai from "@/assets/images/content/blog/longai.png"



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
                                <div className="see-more">See more</div>
                                <Image className="img" alt="Img" src={seemore} />
                            </div>
                        </div>
                        <Image className="vector" alt="Vector" src={vector} />
                        <div className="overlap-group">
                            <div className="div" />
                            <Image className="life-coaching" alt="Life coaching" src={lifecoaching} />
                        </div>
                        <Image className="nh-ng-v-n-freelancer" alt="Nh ng v n freelancer" src={longai} />
                        <p className="ch-o-c-nh-b-n-ang">
                            Chào cả nhà! Bạn đang nghĩ đến việc trở thành freelancer? Tuyệt vời! Đó là cách tuyệt nhất để làm chủ công việc
                            và làm việc theo ý muốn.
                        </p>
                        <div className="overlap-group-2">
                            <div className="by">By</div>
                            <div className="element">31/05/2023</div>
                            <a className="alyssa-sweeten" href="" rel="noopener noreferrer" target="_blank">
                                Alyssa Sweeten
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {/*  PAGINATION */}
        </div>
    )
}

export default Blog