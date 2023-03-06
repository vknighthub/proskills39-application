import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { featuredCarousel } from '@/components/styles/sliderProps';
import artwork_2 from '@/assets/images/content/artworks/artwork-2.png'


const list = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    }
]

const ProposalRelated = () => {
    return (
        <div className="section-padding overflow-hidden">
            <div className="section-title-wrapper">
                <div className="section-title">
                    <span className="gradient-text">Proposal</span> Related
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
            <Swiper {...featuredCarousel} className="collections-carousel">

                <div className="featured-carousel">
                    <div className="swiper-wrapper">
                        {list.map((value) => (
                            <SwiperSlide className="swiper-slide" key={value.id}>
                                <div className="featured-item">
                                    <div className="featured-item-wrapper">
                                        <div className="featured-item-content">
                                            <div className="fav-counter">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#heart-icon" />
                                                </svg>
                                                <span className="count">1</span>
                                            </div>

                                            <div className="featured-item-info">
                                                <div className="title">
                                                    Cross-Chain Fake NFT Protection
                                                </div>
                                                <p style={{ minHeight: "120px" }}>Ethereum  NFT ecosystem is struggling from a lack of trust due to plagiarism, counterfeits and scams, and Cardano NFT ecosystem is starting to experience more of these same problems.</p>
                                                <div className="item-meta">
                                                    <span className="avatar box-26" >
                                                        <Link href="/08-profile-page">
                                                            <Image src={artwork_2} alt="" width={30} height={30} />
                                                        </Link>
                                                        <span className="verified">
                                                            <svg className="crumina-icon">
                                                                <use xlinkHref="#check-icon" />
                                                            </svg>
                                                        </span>
                                                    </span>

                                                </div>
                                                <p className="text-success">proskills39 team is compiling a summary for this proposal</p>
                                                <span className="gradient-text">Fund:</span> <i>F9: The Great Migration (from Ethereum)</i>
                                            </div>
                                        </div>
                                        <div className="featured-item-post-content">
                                            <div className="featured-item-pricebox">
                                                <div className="price-caption">Current Budget</div>
                                                <div className="price"> bugetProposal</div>
                                            </div>
                                            <div className="social-share-box">
                                                <div className="social-caption">View proposal in idealscale</div>
                                                <div className="share-icons">

                                                    <Link target="_blank" href={`https://cardano.ideascale.com/c/idea/`}>
                                                        <svg className="crumina-icon" style={{ width: '18px', height: '18px' }}>
                                                            <use xlinkHref="#bell-icon" />
                                                        </svg>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default ProposalRelated;
