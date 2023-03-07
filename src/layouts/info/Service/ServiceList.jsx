import avatar from '@/assets/images/avatar.png';
import { artworksCarousel } from "@/components/styles/sliderProps";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const ServiceList = ({ service }) => {
    return (

        <div className="featured-item">
            <div className="featured-item-wrapper">
                <div className="featured-item-content">
                    <div className="fav-counter">
                        <svg className="crumina-icon">
                            <use xlinkHref="#heart-icon" />
                        </svg>{" "}
                        <span className="count">10</span>
                    </div>
                    <div className="featured-item-image ">
                        {" "}
                        <Link href="/05-product-page">
                            <Swiper {...artworksCarousel} id="homeSlider" className="swiper">
                                <div className="swiper-wrapper">
                                    {service.overviews.files.map((file, index) => (
                                        <SwiperSlide id="slide-1" className="swiper-slide" key={index}>
                                            <Image src={file.url} alt={file.title} width={300} height={300} />
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </Link>{" "}
                    </div>
                    <div className="featured-item-info">
                        <div className="title">
                            {" "}
                            <Link href="/05-product-page">
                                
                            </Link>{" "}
                        </div>
                        <div className="item-meta">
                            <span className="avatar box-26">
                                {" "}
                                <Link href="/08-profile-page">
                                    <Image src={service.sellerInfor.avatar ? service.sellerInfor.avatar : avatar} alt="Avatar" width={80} height={80} />
                                </Link>{" "}
                                <span className="verified">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#check-icon" />
                                    </svg>{" "}
                                </span>
                            </span>
                            @{service.username}
                        </div>
                    </div>
                </div>
                <div className="featured-item-post-content">
                    <div className="featured-item-pricebox">
                        <div className="price-caption">Starting at</div>
                        <div className="price">v2P {service.price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServiceList;
