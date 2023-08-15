
import background_service from '@/assets/images/service/background-service.png';
import triangle_top_right from '@/assets/svg/triangle-top-right.svg';
import { featuredOtherService } from '@/components/styles/sliderProps';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
    data: any
}

const MobileOtherSerivce = ({ data }: Props) => {
    return (
        <>
            
            <Swiper {...featuredOtherService} className="featured-carousel ml-lg-2 mr-lg-2">
                <div className="swiper-wrapper">
                    <div className="featured-box">
                        <div className="grid-2-columns">

                            {data.map((value:any) => (
                                <SwiperSlide className="swiper-slide" key={value.id}>
                                    <div className="component-other-service" >
                                        <div className="overlap">
                                            <Image className="vector" alt="Vector" src={triangle_top_right} />
                                            <Image className="img" alt={value.alt} src={background_service} />
                                            <Image className="image-1" alt={value.alt} src={value.image1} width={162.69} height={267.73} />
                                            <Image className="image-2" alt={value.alt} src={value.image2} width={162.69} height={267.73} />
                                            <p className="mother-care-service">{value.description}</p>
                                            <div className="group">
                                                <div className="overlap-group">
                                                    <button className="btn view-detail btn-dark"> View detail !</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </div>
                </div>
            </Swiper>
            
        </>
    )
}

export default MobileOtherSerivce