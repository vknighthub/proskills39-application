import avatar from "@/assets/images/avatar.png";
import { artworksCarousel } from "@/components/styles/sliderProps";
import Rating from "@/utils/get-star";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ComparePackage from './ComparePackage';
import parse from 'html-react-parser';

const ServiceDetailMedia = ({ data, compare, setPrice, setPackages }) => {

    return (
        <>
            <div className="product">
                <div className="product-media">
                    {data.services.image.map((image,index)=>(
                        <a key={index}
                        className="expand-icon"
                        data-fslightbox=""
                        href={image.url}
                    >
                        <svg className="crumina-icon">
                            <use xlinkHref="#maximize-icon" />
                        </svg>
                    </a>
                    ))}
                    
                    <div className="product-img">

                        <Swiper {...artworksCarousel} id="homeSlider" className="swiper" style={{overflowY: 'scroll !important'}}>
                            <div className="categories-nav">
                                <a className="arrow arrow-left swiper-button-prev">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#arrow-left2-icon" />
                                    </svg>
                                </a>
                                <a className="arrow arrow-right swiper-button-next">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#arrow-right2-icon" />
                                    </svg>
                                </a>
                            </div>
                            <div className="swiper-wrapper">
                                {data.services.image?.map((image, index) => (
                                    <SwiperSlide id="slide-1" className="swiper-slide" key={index}  >
                                        <Image src={image.url} alt="product" width={986} height={986} />
                                    </SwiperSlide>
                                ))}
                            </div>
                        </Swiper>
                    </div>
                </div>

                <div className="product-info product-seller ">
                    <h4>About The Seller</h4>
                    <div className="avatar-block">
                        <div className="avatar box-152">
                            {" "}
                            <Link href={`/user-profile/${data.seller.username}`}>
                                <Image src={data.seller?.avatar ? data.seller.avatar : avatar} alt="avatar" width={80} height={80} />
                            </Link>{" "}
                            <span className="verified">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#check-icon" />
                                </svg>
                            </span>
                        </div>
                        <div className="avatar-meta">
                            <div className="avatar-title">
                                <span className="gradient-text">
                                    {" "}
                                    <Link href={`/user-profile/${data.seller.username}`}>
                                        {data.seller.username}
                                    </Link>{" "}

                                </span>
                            </div>
                            <div className="avatar-meta">{data.seller.title}</div>
                            <div className="avatar-meta mt-3">
                                <Rating rating={data.seller.rating} />
                            </div>
                        </div>
                    </div>

                    <div className="product-seller-info">
                        <div className="placed-seller mt-3">
                            <div className="bid-placer">
                                <div className="bid-info">
                                    <div className="bid-title">
                                        <span className="gradient-text">
                                            From
                                        </span>
                                    </div>
                                    <div className="bid-date">{data.seller.country}</div>
                                </div>
                            </div>
                            <div className="bid-box">
                                <div className="crypto-value gradient-text">Member since</div>
                                <div className="currency-value">{data.seller.membersince}</div>
                            </div>
                        </div>
                        <div className="placed-seller mt-3">
                            <div className="bid-placer">
                                <div className="bid-info">
                                    <div className="bid-title">
                                        <span className="gradient-text">
                                            Language
                                        </span>
                                    </div>
                                    <div className="bid-date">{data.seller.language}</div>
                                </div>
                            </div>
                            <div className="bid-box">
                                <div className="crypto-value gradient-text">Last delivery</div>
                                <div className="currency-value">{data.seller.lastdeliverydate}</div>
                            </div>
                        </div>

                        <div className="placed-seller-description mt-3">
                            <span className="mt-3">{data.seller.introduce && parse(data.seller.introduce)}</span>
                        </div>
                    </div>
                </div>

                <ComparePackage data={compare} setPrice = {setPrice} setPackages = {setPackages}/>

            </div>
        </>
    );
};

export default ServiceDetailMedia;
