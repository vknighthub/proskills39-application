import Image from "next/image"
import Link from "next/link"
import repotation_management from '@/assets/images/service/Reputation-Management.jpg'
import appreciate from '@/assets/images/service/appreciate.jpg'
import the_most_order from '@/assets/images/service/Bigger-Orders.jpg'
import special_offer from '@/assets/images/service/special-offer.jpg'
import newest from '@/assets/images/service/newest.png'
import { Mostpopularservice } from "@/types"
import { Box } from '@/components/styles/Box'
import triangle from '@/assets/svg/triangle.svg'

type Props = {
    data: Mostpopularservice[]
}

const HomePopularService = ({ data }: Props) => {
    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Most popular <span className="gradient-text">Service</span>
                </div>
                <div className="all-items-link">
                    <Link href="/services">
                        <Box />
                    </Link>
                </div>
            </div>
            <div className="latest-news-box grid-5-columns">
                {data.map((popular, index) => (
                    <div className="component-popular-service" key={index}>
                        <div className="overlap-group">
                            <Image className="popular-service" alt="" src={popular.image} width={230} height={122} />
                            <div className="career-counselling">{popular.name}</div>
                        </div>
                        <Image className="vector" alt="Vector" src={triangle} />
                    </div>
                ))}


            </div>
        </div>
    )
}
export default HomePopularService