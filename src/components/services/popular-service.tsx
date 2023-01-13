import Image from "next/image"
import Link from "next/link"
import news_thumb1 from '../../assets/images/content/latest-news/news-thumb1.png'

const list_popular = [
    {
        id: 1,
        name: 'Reputation'
    },
    {
        id: 2,
        name: 'Appreciate'
    },
    {
        id: 3,
        name: 'The most orders'
    },
    {
        id: 4,
        name: 'Many offers'
    },
    {
        id: 5,
        name: 'Newest'
    },

]

const HomePopularService = () => {
    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Most popular <span className="gradient-text">Service</span>
                </div>
                <div className="all-items-link">
                    {" "}
                    <Link href="/12-blog-grid" className="tag-see-all">
                        See all
                    </Link>{" "}
                </div>
            </div>
            <div className="latest-news-box grid-6-columns">

                {list_popular.map((popular, index) => (
                    <div className="news-item" key={index}>
                        <div className="news-thumb">
                            {" "}
                            <Link href="/14-blog-post-centered">
                                <Image
                                    src={news_thumb1}
                                    width={460}
                                    height={260}
                                    alt=""
                                    loading="lazy"
                                />
                            </Link>{" "}
                        </div>
                        <div className="news-content">
                            <div className="news-meta">
                                <div className="news-tags">
                                    <span className="tag-item">
                                        <a>{popular.name}</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}
export default HomePopularService