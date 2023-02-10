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

export default function GrapphicsDesign({ }: Props) {
    return (
        <>
            <Seo
                title="ProSkills39 - Graphics & Design"
                description="Put simply, graphic design is the art and craft of creating visual content that communicates a concept, an idea or a brand message to the public. Logos, artworks, drawings, illustrations, cards, emails and a whole paraphernalia of designs are all around us. You can see them in print and digital media, in shops, restaurants and cafes, on billboards, books and magazines, in the apps we use, the sites we visit and the physical and digital products we buy."
                url={routes.grapphic_design}
                image_url='https://proskills39.com/_next/image?url=https%3A%2F%2Ffiverr-res.cloudinary.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Fattachments%2Fgeneric_asset%2Fasset%2F431c7d880582a199f5b240dde2694206-1626594004536%2FLogo%2520_%2520Brand%2520Identity_B_2x.png&w=384&q=75'
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