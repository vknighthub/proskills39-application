import newest from '@/assets/images/svg/newest.svg';
import { featuredNewestService } from '@/components/styles/sliderProps';
import CutText from '@/utils/CutText';
import RatingStars from '@/utils/ratingstar';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

const ServiceTopAvargage = ({ data }) => {
    return (
        <>
            
            <div className="row">
                <div className="categories-nav-newest-service ">
                    <button className="swiper-button-prev-newest-service" >
                        <svg width="106" height="190" viewBox="0 0 106 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.1">
                                <path fillRule="evenodd" clipRule="evenodd" d="M102.895 186.908C107.035 182.786 107.035 176.103 102.895 171.981L25.5907 95L102.895 18.0194C107.035 13.8973 107.035 7.21384 102.895 3.09165C98.7558 -1.03055 92.0442 -1.03055 87.9046 3.09165L3.10466 87.5361C-1.0349 91.6583 -1.0349 98.3417 3.10466 102.464L87.9047 186.908C92.0442 191.031 98.7558 191.031 102.895 186.908Z" fill="#D9D9D9" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M102.895 186.908C107.035 182.786 107.035 176.103 102.895 171.981L25.5907 95L102.895 18.0194C107.035 13.8973 107.035 7.21384 102.895 3.09165C98.7558 -1.03055 92.0442 -1.03055 87.9046 3.09165L3.10466 87.5361C-1.0349 91.6583 -1.0349 98.3417 3.10466 102.464L87.9047 186.908C92.0442 191.031 98.7558 191.031 102.895 186.908Z" fill="url(#paint0_linear_440_1278)" />
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M105.414 112.527C106.195 111.746 106.195 110.48 105.414 109.699L90.8284 95.1133L105.414 80.5275C106.195 79.7464 106.195 78.4801 105.414 77.6991C104.633 76.918 103.367 76.918 102.586 77.6991L86.5858 93.6991C85.8047 94.4801 85.8047 95.7464 86.5858 96.5275L102.586 112.527C103.367 113.309 104.633 113.309 105.414 112.527Z" fill="#D9D9D9" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M105.414 112.527C106.195 111.746 106.195 110.48 105.414 109.699L90.8284 95.1133L105.414 80.5275C106.195 79.7464 106.195 78.4801 105.414 77.6991C104.633 76.918 103.367 76.918 102.586 77.6991L86.5858 93.6991C85.8047 94.4801 85.8047 95.7464 86.5858 96.5275L102.586 112.527C103.367 113.309 104.633 113.309 105.414 112.527Z" fill="url(#paint1_linear_440_1278)" />
                            <defs>
                                <linearGradient id="paint0_linear_440_1278" x1="159" y1="292.319" x2="23.7073" y2="279.939" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0061D3" />
                                    <stop offset="1" stopColor="#04CDF9" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_440_1278" x1="116" y1="132.5" x2="90.4713" y2="130.174" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0061D3" />
                                    <stop offset="1" stopColor="#04CDF9" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>
                <Swiper {...featuredNewestService} className="featured-carousel ml-lg-2 mr-lg-2">
                    <div className="swiper-wrapper">
                        <div className="featured-box">
                            <div className="featured-box-wrapper grid-6-columns">

                                {data.map((value) => (
                                    <SwiperSlide className="swiper-slide" key={value.id}>
                                        <div className="featured-item" >
                                            <Link href={`/categories/services/servicedetail/${value.slug}`} >
                                                <div className="featured-item-wrapper newest-service">
                                                    <div className="featured-item-content">
                                                        <div className="featured-item-image">
                                                            <Image src={value.overviews.files[0]?.url ? value.overviews.files[0].url : newest} alt="" width={238.4} height={162} />
                                                        </div>
                                                        <div className="featured-item-info">
                                                            <RatingStars value={value.averagerating} />
                                                            <div className="title">
                                                                <CutText content={value.title} start={0} end={20} />
                                                            </div>
                                                            <div className="item-money">
                                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 13.75C8 14.0261 8.22386 14.25 8.5 14.25C8.77614 14.25 9 14.0261 9 13.75H8ZM9 3.25C9 2.97386 8.77614 2.75 8.5 2.75C8.22386 2.75 8 2.97386 8 3.25H9ZM10.3824 5.80756C10.5205 6.04671 10.8263 6.12865 11.0654 5.99057C11.3046 5.8525 11.3865 5.54671 11.2485 5.30756L10.3824 5.80756ZM10.5338 5.06969L10.1008 5.31969V5.31969L10.5338 5.06969ZM7.84755 8.25999L8.02017 7.79073L8.02015 7.79073L7.84755 8.25999ZM9.15262 8.74002L9.32522 8.27076L9.32521 8.27075L9.15262 8.74002ZM6.4664 11.9303L6.03339 12.1803L6.4664 11.9303ZM6.61774 11.1924C6.47967 10.9533 6.17387 10.8714 5.93473 11.0094C5.69558 11.1475 5.61364 11.4533 5.75171 11.6924L6.61774 11.1924ZM9.49591 12.7421L9.74591 13.1751L9.49591 12.7421ZM7.50425 4.25794L7.75425 4.69095L7.50425 4.25794ZM15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5V16.5C12.9183 16.5 16.5 12.9183 16.5 8.5H15.5ZM8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5H0.5C0.5 12.9183 4.08172 16.5 8.5 16.5V15.5ZM1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5V0.5C4.08172 0.5 0.5 4.08172 0.5 8.5H1.5ZM8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5H16.5C16.5 4.08172 12.9183 0.5 8.5 0.5V1.5ZM11.2485 5.30756L10.9668 4.81969L10.1008 5.31969L10.3824 5.80756L11.2485 5.30756ZM6.89941 11.6803L6.61774 11.1924L5.75171 11.6924L6.03339 12.1803L6.89941 11.6803ZM8.98002 9.20928C10.3469 9.71203 10.5072 11.5809 9.24591 12.3091L9.74591 13.1751C11.7414 12.023 11.4878 9.06619 9.32522 8.27076L8.98002 9.20928ZM7.25425 3.82492C5.25875 4.97703 5.51238 7.93382 7.67494 8.72925L8.02015 7.79073C6.6533 7.28797 6.493 5.41914 7.75425 4.69095L7.25425 3.82492ZM9 13.75V13.0368H8V13.75H9ZM9 13.0368V8.5H8V13.0368H9ZM9.24591 12.3091C9.00117 12.4504 8.7375 12.5242 8.47494 12.5374L8.52506 13.5362C8.94229 13.5152 9.36069 13.3975 9.74591 13.1751L9.24591 12.3091ZM8.47494 12.5374C7.85024 12.5688 7.23255 12.2573 6.89941 11.6803L6.03339 12.1803C6.56138 13.0948 7.54027 13.5856 8.52506 13.5362L8.47494 12.5374ZM7.67493 8.72925L8.32738 8.96926L8.67262 8.03074L8.02017 7.79073L7.67493 8.72925ZM8.32741 8.96927L8.98003 9.20929L9.32521 8.27075L8.67259 8.03073L8.32741 8.96927ZM9 8.5L9 3.96323H8L8 8.5H9ZM9 3.96323V3.25H8V3.96323H9ZM10.9668 4.81969C10.4387 3.90511 9.45976 3.41437 8.4749 3.46386L8.52509 4.4626C9.14984 4.4312 9.76759 4.74265 10.1008 5.31969L10.9668 4.81969ZM8.4749 3.46386C8.05774 3.48482 7.63941 3.60255 7.25425 3.82492L7.75425 4.69095C7.99895 4.54967 8.26258 4.47579 8.52509 4.4626L8.4749 3.46386Z" fill="url(#paint0_linear_269_2235)" />
                                                                    <defs>
                                                                        <linearGradient id="paint0_linear_269_2235" x1="1.83236" y1="17.4754" x2="12.6164" y2="16.75" gradientUnits="userSpaceOnUse">
                                                                            <stop stopColor="#0061D3" />
                                                                            <stop offset="1" stopColor="#04CDF9" />
                                                                        </linearGradient>
                                                                    </defs>
                                                                </svg>
                                                                <span>{value.price}</span>
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
                <div className="categories-nav-newest-service col-1">
                    <button className="swiper-button-next-newest-service" >
                        <svg width="106" height="190" viewBox="0 0 106 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.1">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.10467 186.908C-1.03489 182.786 -1.03489 176.103 3.10467 171.981L80.4093 95L3.10468 18.0194C-1.03487 13.8973 -1.03487 7.21384 3.10468 3.09165C7.24424 -1.03056 13.9558 -1.03056 18.0954 3.09165L102.895 87.5361C107.035 91.6583 107.035 98.3417 102.895 102.464L18.0953 186.908C13.9558 191.031 7.24422 191.031 3.10467 186.908Z" fill="#D9D9D9" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.10467 186.908C-1.03489 182.786 -1.03489 176.103 3.10467 171.981L80.4093 95L3.10468 18.0194C-1.03487 13.8973 -1.03487 7.21384 3.10468 3.09165C7.24424 -1.03056 13.9558 -1.03056 18.0954 3.09165L102.895 87.5361C107.035 91.6583 107.035 98.3417 102.895 102.464L18.0953 186.908C13.9558 191.031 7.24422 191.031 3.10467 186.908Z" fill="url(#paint0_linear_440_1282)" />
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.585785 112.527C-0.195263 111.746 -0.195263 110.48 0.585785 109.699L15.1716 95.1133L0.585782 80.5275C-0.195266 79.7464 -0.195266 78.4801 0.585782 77.6991C1.36683 76.918 2.63316 76.918 3.41421 77.6991L19.4142 93.6991C20.1953 94.4801 20.1953 95.7464 19.4142 96.5275L3.41421 112.527C2.63316 113.309 1.36683 113.309 0.585785 112.527Z" fill="#D9D9D9" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.585785 112.527C-0.195263 111.746 -0.195263 110.48 0.585785 109.699L15.1716 95.1133L0.585782 80.5275C-0.195266 79.7464 -0.195266 78.4801 0.585782 77.6991C1.36683 76.918 2.63316 76.918 3.41421 77.6991L19.4142 93.6991C20.1953 94.4801 20.1953 95.7464 19.4142 96.5275L3.41421 112.527C2.63316 113.309 1.36683 113.309 0.585785 112.527Z" fill="url(#paint1_linear_440_1282)" />
                            <defs>
                                <linearGradient id="paint0_linear_440_1282" x1="-53" y1="292.319" x2="82.2927" y2="279.939" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0061D3" />
                                    <stop offset="1" stopColor="#04CDF9" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_440_1282" x1="-9.99999" y1="132.5" x2="15.5287" y2="130.174" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0061D3" />
                                    <stop offset="1" stopColor="#04CDF9" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ServiceTopAvargage