import avatar from '@/assets/images/avatar.png';
import iconv2p from '@/assets/images/svg/iconv2p.svg';
import newest from '@/assets/images/svg/newest.svg';
import { featuredMoileNewestService } from '@/components/styles/sliderProps';
import { Newestservice } from '@/types';
import CutText from '@/utils/CutText';
import RatingStars from '@/utils/ratingstar';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';


type PageProps = {
    data: Newestservice[]
}

const MobileNewsestService = ({ data }: PageProps) => {
    return (
        <>
            <Swiper {...featuredMoileNewestService} className="featured-carousel mr-lg-2">
                <div className="swiper-wrapper">
                    <div className="featured-box">
                        <div className="featured-box-wrapper grid-1-columns">

                            {data.map((value) => (
                                <SwiperSlide className="swiper-slide" key={value.id}>
                                    <div className="featured-item">
                                        <Link href={`/categories/services/servicedetail/${value.slug}`}>
                                            <div className="featured-item-wrapper newest-service">
                                                <div className="featured-item-content">
                                                    <div className="featured-item-image">
                                                        <Image src={value.files[0]?.url ? value.files[0].url : newest} 
                                                        alt="" 
                                                        width={350} 
                                                        height={180} />
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="categories">
                                                            {value.catname}
                                                        </div>
                                                        <div className="title">
                                                            <CutText content={value.title} start={0} end={200} />
                                                        </div>
                                                        <RatingStars value={value.averagerating} />

                                                        <div className="avatar-block mt-2">
                                                            <div className="avatar box-26">
                                                                <Link href="/profile-info">
                                                                    <Image src={value.sellerInfor.avatar ? value.sellerInfor.avatar : avatar}
                                                                        alt="Avatar"
                                                                        width={32}
                                                                        height={32}
                                                                    />
                                                                </Link>
                                                                <span className="verified">
                                                                    <svg className="crumina-icon">
                                                                        <use xlinkHref="#check-icon" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <div className="avatar-meta">
                                                                <div className="avatar-title">
                                                                    <span className="gradient-text fs-6">
                                                                        <Link href={`/user-profile/${value.sellerInfor.username}`}>
                                                                            {value.sellerInfor.fullname}
                                                                        </Link>{" "}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item-money">
                                                            <Image
                                                                src={iconv2p}
                                                                alt="v2p icon"
                                                                width={40}
                                                                height={40}
                                                            />
                                                            <span className="fs-5">{value.price}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </Link>
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

export default MobileNewsestService