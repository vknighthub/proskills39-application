import { featuredCarousel } from '@/components/styles/sliderProps';
import explore from '@/data/categories/graphics-design-explore.json';
import popular from '@/data/categories/graphics-design-popular.json';
import faqs from '@/data/categories/graphics-design-faqs.json';

import Layout from '@/layouts/_layout';
import GrapphicsDesignExplore from '@/layouts/info/grapphicdesign/GrapphicsDesignExplore';
import GrapphicsDesignPopular from '@/layouts/info/grapphicdesign/GrapphicsDesignPopular';
import GrapphicsDesignFAQs from '@/layouts/info/grapphicdesign/GrapphicsDesignFAQs';
import { Swiper, SwiperSlide } from "swiper/react";
import Seo from '@/layouts/_seo';
import routes from '@/config/routes';


type Props = {}

export default function ProgrammingTech({ }: Props) {
    return (
        <>
            <Seo
                title="ProSkills39 - Programing & Technical"
                description="Web programming or development use code to focus on the website functionality and ensure it works and is easy to use. It involves markup, writing, network security and coding which is client and server side. The most popular web programming languages are HTML, XML, JavaScript, PHP, ASP.Net and Python."
                url={routes.programing_tech}
                image_url='http://api.proskills39.com/system/categories/image/1-programming-tech-desktop.png'
            />
            <Layout>
                <div className="container section-padding overflow-hidden">
                    <div className="section-title-wrapper">
                        <div className="section-title">
                            Most popular in <span className="gradient-text">Graphics & Design</span>
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
                            {popular && popular.map((item) => (
                                item.featured && (
                                    <SwiperSlide className="swiper-slide" key={item.id}>
                                        <GrapphicsDesignPopular data={item} />
                                    </SwiperSlide>
                                )
                            ))}
                        </div>
                    </Swiper>
                </div>

                <div className="container section-padding overflow-hidden">
                    <div className="section-title-wrapper">
                        <div className="section-title">
                            Explore <span className="gradient-text">Graphics & Design</span>
                        </div>
                    </div>
                    <GrapphicsDesignExplore data={explore} />
                </div>

                <div className="primary-content-area section-medium content-padding">
                    <div className="page-title text-center">
                        <h2>
                            <span className="gradient-text">Graphics & Design</span> FAQs
                        </h2>
                    </div>
                    <GrapphicsDesignFAQs faqs={faqs} />
                </div>


            </Layout>
        </>
    )
}