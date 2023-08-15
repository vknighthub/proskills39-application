import React from 'react'
import { Popuparcategory } from '@/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sliderPopularCategories } from '@/components/styles/sliderProps'
import Image from "next/image";
import Link from "next/link";

type PageProps = {
    data: Popuparcategory[]
}

const SwipperCategories = ({ data }: PageProps) => {
    return (
        <div className="row">
            <Swiper {...sliderPopularCategories} className="featured-carousel">
                <div className="swiper-wrapper">
                    <div className="featured-box">
                        <div className="featured-box-wrapper grid-1-columns">

                            {data.map((categories, index) => (
                                <SwiperSlide className="swiper-slide" key={index}>
                                    <div className="component-popular-categories" >
                                        <Link href={`/categories/${categories.slug}`}>
                                            <div className="overlap-group-wrapper">
                                                <div className="overlap-group">
                                                    <div className="element">
                                                        <Image className="img" alt="Element" src={categories.image} width={233} height={114} />
                                                        <div className="digital-marketing">{categories.name}</div>
                                                    </div>
                                                    <p className="text-wrapper">
                                                        {categories.details}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </div>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default SwipperCategories