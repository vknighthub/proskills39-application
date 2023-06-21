import newest from '@/assets/images/svg/newest.svg';
import { featuredNewestService } from '@/components/styles/sliderProps';
import { Newestservice } from '@/types';
import RatingStars from '@/utils/ratingstar';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import CutText from './../../utils/CutText';

type PageProps = {
    data: Newestservice[]
}

export const NewestService = ({ data }: PageProps) => {
    const { t } = useTranslation('common')
    console.log(data)
    return (
        <div className="container section-padding overflow-hidden">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Newest<span className="gradient-text"> Service</span>
                </div>
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
            <Swiper {...featuredNewestService} className="featured-carousel">
                <div className="swiper-wrapper">
                    <div className="featured-box">
                        <div className="featured-box-wrapper grid-6-columns">
                            {data.map((value) => (
                                <SwiperSlide className="swiper-slide" key={value.id}>
                                    <div className="featured-item" >
                                        <Link href={`/categories/`}>
                                            <div className="featured-item-wrapper newest-service">
                                                <div className="featured-item-content">
                                                    <div className="featured-item-image">
                                                        <Image src={newest} alt="" width={238.4} height={162}/>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <RatingStars value={2.3} />
                                                        <div className="title">
                                                            <CutText content={value.introduce} start={0} end={20} />
                                                        </div>
                                                        <div className="item-meta">
                                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8 13.75C8 14.0261 8.22386 14.25 8.5 14.25C8.77614 14.25 9 14.0261 9 13.75H8ZM9 3.25C9 2.97386 8.77614 2.75 8.5 2.75C8.22386 2.75 8 2.97386 8 3.25H9ZM10.3824 5.80756C10.5205 6.04671 10.8263 6.12865 11.0654 5.99057C11.3046 5.8525 11.3865 5.54671 11.2485 5.30756L10.3824 5.80756ZM10.5338 5.06969L10.1008 5.31969V5.31969L10.5338 5.06969ZM7.84755 8.25999L8.02017 7.79073L8.02015 7.79073L7.84755 8.25999ZM9.15262 8.74002L9.32522 8.27076L9.32521 8.27075L9.15262 8.74002ZM6.4664 11.9303L6.03339 12.1803L6.4664 11.9303ZM6.61774 11.1924C6.47967 10.9533 6.17387 10.8714 5.93473 11.0094C5.69558 11.1475 5.61364 11.4533 5.75171 11.6924L6.61774 11.1924ZM9.49591 12.7421L9.74591 13.1751L9.49591 12.7421ZM7.50425 4.25794L7.75425 4.69095L7.50425 4.25794ZM15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5V16.5C12.9183 16.5 16.5 12.9183 16.5 8.5H15.5ZM8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5H0.5C0.5 12.9183 4.08172 16.5 8.5 16.5V15.5ZM1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5V0.5C4.08172 0.5 0.5 4.08172 0.5 8.5H1.5ZM8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5H16.5C16.5 4.08172 12.9183 0.5 8.5 0.5V1.5ZM11.2485 5.30756L10.9668 4.81969L10.1008 5.31969L10.3824 5.80756L11.2485 5.30756ZM6.89941 11.6803L6.61774 11.1924L5.75171 11.6924L6.03339 12.1803L6.89941 11.6803ZM8.98002 9.20928C10.3469 9.71203 10.5072 11.5809 9.24591 12.3091L9.74591 13.1751C11.7414 12.023 11.4878 9.06619 9.32522 8.27076L8.98002 9.20928ZM7.25425 3.82492C5.25875 4.97703 5.51238 7.93382 7.67494 8.72925L8.02015 7.79073C6.6533 7.28797 6.493 5.41914 7.75425 4.69095L7.25425 3.82492ZM9 13.75V13.0368H8V13.75H9ZM9 13.0368V8.5H8V13.0368H9ZM9.24591 12.3091C9.00117 12.4504 8.7375 12.5242 8.47494 12.5374L8.52506 13.5362C8.94229 13.5152 9.36069 13.3975 9.74591 13.1751L9.24591 12.3091ZM8.47494 12.5374C7.85024 12.5688 7.23255 12.2573 6.89941 11.6803L6.03339 12.1803C6.56138 13.0948 7.54027 13.5856 8.52506 13.5362L8.47494 12.5374ZM7.67493 8.72925L8.32738 8.96926L8.67262 8.03074L8.02017 7.79073L7.67493 8.72925ZM8.32741 8.96927L8.98003 9.20929L9.32521 8.27075L8.67259 8.03073L8.32741 8.96927ZM9 8.5L9 3.96323H8L8 8.5H9ZM9 3.96323V3.25H8V3.96323H9ZM10.9668 4.81969C10.4387 3.90511 9.45976 3.41437 8.4749 3.46386L8.52509 4.4626C9.14984 4.4312 9.76759 4.74265 10.1008 5.31969L10.9668 4.81969ZM8.4749 3.46386C8.05774 3.48482 7.63941 3.60255 7.25425 3.82492L7.75425 4.69095C7.99895 4.54967 8.26258 4.47579 8.52509 4.4626L8.4749 3.46386Z" fill="url(#paint0_linear_269_2235)" />
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_269_2235" x1="1.83236" y1="17.4754" x2="12.6164" y2="16.75" gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#0061D3" />
                                                                        <stop offset="1" stop-color="#04CDF9" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                            {value.price}
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
        </div>
    )
}
