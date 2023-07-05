import triangle from '@/assets/svg/triangle-popular-service.svg'
import { Box } from '@/components/styles/Box'
import { Mostpopularservice } from "@/types"
import Image from "next/image"
import Link from "next/link"

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
                    <Link href={`/categories/services/servicedetail/${popular.slug}`} key={index}>
                        <div className="component-popular-service" >
                            <div className="overlap-group">
                                <Image className="popular-service" alt="" src={popular.image} width={230} height={122} />
                                <div className="career-counselling">{popular.name}</div>
                            </div>
                            <Image className="vector" alt="Vector" src={triangle} />
                        </div>
                    </Link>
                ))}


            </div>
        </div>
    )
}
export default HomePopularService