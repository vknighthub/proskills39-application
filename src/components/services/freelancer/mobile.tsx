import frame from '@/assets/images/freelancer/frame.png';
import punkfreelancer from '@/assets/images/freelancer/punk-freelancer.png';
import maximize_2 from '@/assets/images/svg/maximize-2.svg';
import { featuredFreelancer } from '@/components/styles/sliderProps';
import { FreelancersLevel } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';


type PageProps = {
    data: FreelancersLevel[]
}
const MobileFreelancer = ({ data }: PageProps) => {
    return (
        <>
            <Swiper {...featuredFreelancer} className="featured-carousel ml-lg-2 mr-lg-2">
                <div className="swiper-wrapper">
                    <div className="featured-box">
                        <div className="featured-box-wrapper grid-6-columns">
                            {data.map((value: FreelancersLevel) => (
                                <SwiperSlide className="swiper-slide" key={value.id}>
                                    <Link href={`/freelancer/${value.slug}`}>
                                        <div className="box-freelancer">
                                            <div className="component-wrapper">
                                                <div className="component">
                                                    <div className="overlap">
                                                        <div className="group">
                                                            <div className="vector">
                                                                <div className="overlap-group">
                                                                    <Image className="img" alt="Vector" src={frame} />
                                                                    <Image
                                                                        className="avatar-freelancer"
                                                                        alt="Chuot punk"
                                                                        src={value.image ? value.image : punkfreelancer}
                                                                        width={228}
                                                                        height={158}
                                                                        style={{ borderRadius: 10 }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-wrapper">
                                                            <Image src={value.icon} alt={value.title} width={45} height={45}></Image>
                                                        </div>
                                                        <div className="div">
                                                            <div
                                                                className="group-wrapper"
                                                                style={{
                                                                    backgroundImage: `url(${maximize_2.src})`,
                                                                }}
                                                            >

                                                            </div>
                                                            <div className="overlap-2">
                                                                <div className="text-wrapper-2">{value.description}</div>
                                                                <div className="rectangle-2" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </div>
                    </div>
                </div>
            </Swiper>
            
        </>
    )
}

export default MobileFreelancer