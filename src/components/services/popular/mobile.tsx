import triangle from '@/assets/svg/triangle-popular-service.svg'
import { sliderPopularCategories } from '@/components/styles/sliderProps'
import { Mostpopularservice } from '@/types'
import Image from "next/image"
import Link from "next/link"
import { SwiperSlide, Swiper } from 'swiper/react'

type Props = {
    data: Mostpopularservice[]
}
const MobilePopularSerivce = ({ data }: Props) => {
    return (
        <>
            <div className="row">
                <Swiper {...sliderPopularCategories} className="featured-carousel">
                    <div className="swiper-wrapper">
                        <div className="featured-box">
                            <div className="latest-news-box grid-1-columns">
                                {data.map((popular, index) => (
                                    <SwiperSlide className="swiper-slide" key={index}>
                                        <Link href={`/categories/services/servicedetail/${popular.slug}`}>
                                            <div className="component-popular-service" >
                                                <div className="overlap-group">
                                                    <Image className="popular-service"
                                                        alt=""
                                                        src={popular.image}
                                                        width={370}
                                                        height={150}
                                                    />
                                                    <div className="career-counselling">{popular.name}</div>
                                                </div>
                                                <Image className="vector" alt="Vector" src={triangle} />
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}

                            </div>
                        </div>
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default MobilePopularSerivce