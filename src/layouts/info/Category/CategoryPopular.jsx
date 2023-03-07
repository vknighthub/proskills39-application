import { featuredCarousel } from '@/components/styles/sliderProps';
import Image from '@/components/ui/image';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import routes  from '@/config/routes';

const CategoryPopular = ({ data }) => {
    return (
        <div className="container section-padding overflow-hidden">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Most popular in <span className="gradient-text">{data.name}</span>
                </div>
                <div className="title-navigation">
                    <div className="featured-carousel-icon swiper-button-prev">
                        <svg className="crumina-icon">
                            <use xlinkHref="#arrow-left2-icon" />
                        </svg>
                    </div>
                    <div className="featured-carousel-icon swiper-button-next">
                        <svg className="crumina-icon">
                            <use xlinkHref="#arrow-right2-icon" />
                        </svg>
                    </div>
                </div>
            </div>
            <Swiper {...featuredCarousel} className="featured-carousel">
                <div className="swiper-wrapper">
                    {data && data.listPopular && data.listPopular.map((item) => (
                        <SwiperSlide className="swiper-slide" key={item.id}>
                            <div className="featured-item">
                                <div className="featured-item-wrapper">
                                    <div className="featured-item-content">

                                        <div className="creator-box">

                                            <div className="box-64">
                                                <Link href={`/${routes.service.servicelist(item.slug)}`}>
                                                    <Image
                                                        src={item.image}
                                                        width={100}
                                                        height={100}
                                                        alt={item.name}
                                                    />
                                                </Link>
                                            </div>

                                            <div className="creator-meta title">
                                                <Link href={`/${routes.service.servicelist(item.slug)}`}>{item.name}</Link>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </div>
            </Swiper>
        </div>
    );
};
export default CategoryPopular;
