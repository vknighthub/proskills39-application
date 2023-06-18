import Image from "next/image"
import Link from "next/link"
import repotation_management from '@/assets/images/service/Reputation-Management.jpg'
import appreciate from '@/assets/images/service/appreciate.jpg'
import the_most_order from '@/assets/images/service/Bigger-Orders.jpg'
import special_offer from '@/assets/images/service/special-offer.jpg'
import newest from '@/assets/images/service/newest.png'
import { Mostpopularservice } from "@/types"

const list_popular = [
    {
        id: 1,
        name: 'Reputation',
        image: repotation_management
    },
    {
        id: 2,
        name: 'Appreciate',
        image: appreciate
    },
    {
        id: 3,
        name: 'The most orders',
        image: the_most_order
    },
    {
        id: 4,
        name: 'Many offers',
        image: special_offer
    },
    {
        id: 5,
        name: 'Newest',
        image: newest
    },

]

type Props = {
    data: Mostpopularservice[]
}

const HomePopularService = ({ data }: Props) => {
    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Most popular <span className="gradient-text">Sub categories</span>
                </div>
                <div className="all-items-link">
                    {" "}
                    <Link href="/12-blog-grid" className="tag-see-all">
                        See all
                    </Link>{" "}
                </div>
            </div>
            <div className="latest-news-box grid-5-columns">

                {data.map((popular, index) => (
                    <div className="news-item" key={index}>
                        <div className="service-thumb">
                            {" "}
                            <Link href={`/categories/services/${popular.slug}`}>
                                <Image
                                    src={popular.image}
                                    width={460}
                                    height={200}
                                    sizes="min-height:300px"
                                    alt={popular.name}
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