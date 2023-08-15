import background_academy from '@/assets/images/service/background-academy.png'
import vector_academy from '@/assets/images/service/vector-academy.png'
import { sliderPhoneAcademy } from '@/components/styles/sliderProps'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {}

const MobileAcademy = (props: Props) => {
    return (
        <>
            <div className="row pd-35">
                <Swiper {...sliderPhoneAcademy} className="featured-carousel">
                    <div className="swiper-wrapper">
                        <div className="featured-box">
                            <div className="featured-box-wrapper grid-1-columns">

                                <SwiperSlide className="swiper-slide" >
                                    <div className="component-acedemy" >
                                        <div className="overlap-group">
                                            <Image className="vector" alt="Vector" src={vector_academy} />
                                            <Image className="img" alt="Vector" src={background_academy} />
                                            <Image
                                                className="academy-image"
                                                alt="image1"
                                                src="https://api.proskills39.com/files/uploads%2Fimages%2Facademy%2Facademy1.png"
                                                width={164}
                                                height={152}
                                            />
                                            <p className="mother-care-service">Equipped with Blockchain knowledge, ready to catch the new trend.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide" >
                                    <div className="component-acedemy" >
                                        <div className="overlap-group">
                                            <Image className="vector" alt="Vector" src={vector_academy} />
                                            <Image className="img" alt="Vector" src={background_academy} />
                                            <Image
                                                className="academy-image"
                                                alt="image2" src="https://api.proskills39.com/files/uploads%2Fimages%2Facademy%2Facademy2.png"
                                                width={164}
                                                height={152}
                                            />
                                            <p className="mother-care-service">Improve skills, get attractive jobs</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide" >
                                    <div className="component-acedemy" >
                                        <div className="overlap-group">
                                            <Image className="vector" alt="Vector" src={vector_academy} />
                                            <Image className="img" alt="Vector" src={background_academy} />
                                            <Image
                                                className="academy-image"
                                                alt="image3"
                                                src="https://api.proskills39.com/files/uploads%2Fimages%2Facademy%2Facademy3.png"
                                                width={164}
                                                height={152}
                                            />
                                            <p className="mother-care-service">Training knowledge and skills for Catalyst Proposer, Community Reviewer...</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </div>
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default MobileAcademy