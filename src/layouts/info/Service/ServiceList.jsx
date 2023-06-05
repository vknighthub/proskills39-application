import avatar from '@/assets/images/avatar.png';
import { artworksCarousel } from "@/components/styles/sliderProps";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const ServiceList = ({ service }) => {
    return (

        <div className="featured-item">
            <div className="featured-item-wrapper">
                <div className="featured-item-content" style={{ minHeight: 400 }}>
                    <div className="featured-item-image ">
                        {" "}
                        <Link href={`/categories/services/servicedetail/${service.slug}`}>
                            <Swiper {...artworksCarousel} id="homeSlider" className="swiper">
                                <div className="categories-nav">
                                    <button className="arrow arrow-left swiper-button-prev">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#arrow-left2-icon" />
                                        </svg>
                                    </button>
                                    <button className="arrow arrow-right swiper-button-next">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#arrow-right2-icon" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="swiper-wrapper">
                                    {service.overviews.files.map((file, index) => (
                                        <SwiperSlide id="slide-1" className="swiper-slide" key={index}>
                                            <Image src={file.url} alt={file.title} width={300} height={300} style={{ minHeight: 200 }} />
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </Link>{" "}
                    </div>
                    <div className="featured-item-info">
                        <div className="title">
                            {" "}
                            <Link href={`/categories/services/servicedetail/${service.slug}`}>
                                {service.title}
                            </Link>{" "}
                        </div>
                        <Link href={`/seller/${service.username}`}>
                            <div className="item-meta">
                                <span className="avatar box-26">
                                    <Image src={service.sellerInfor.avatar ? service.sellerInfor.avatar : avatar} alt="Avatar" width={80} height={80} />
                                    <span className="verified">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#check-icon" />
                                        </svg>{" "}
                                    </span>
                                </span>
                                @{service.username}
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="featured-item-post-content">
                    <div className="featured-item-pricebox">
                        <div className="price-caption">Starting at</div>
                        <div className="price">v2p {service.price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServiceList;
