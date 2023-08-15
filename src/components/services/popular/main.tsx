import triangle from '@/assets/svg/triangle-popular-service.svg'
import { Mostpopularservice } from '@/types'
import Image from "next/image"
import Link from "next/link"

type Props = {
    data: Mostpopularservice[]
}
const MainPopularSerivce = ({ data }: Props) => {
    return (
        <>
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
        </>
    )
}

export default MainPopularSerivce