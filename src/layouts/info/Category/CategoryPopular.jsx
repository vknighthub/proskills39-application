import background_most_popular_service from '@/assets/images/service/background-most-popular-service.png';
import vector_most_popular_service from '@/assets/images/service/vector-most-popular-service.png';
import { featuredCarouselPopuplarCategories } from '@/components/styles/sliderProps';
import Image from '@/components/ui/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

const CategoryPopular = ({ data }) => {

    return (
        <div className="container section-padding overflow-hidden ">
            <div className="section-title-wrapper">
                <div className="section-title">
                    <h2>
                        <svg style={{ width: 1280, height: 137, textAlign: 'center' }} xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient" y1="0" y2="1">
                                    <stop stopColor="#0061D3" offset="0" />
                                    <stop stopColor="#04CDF9" offset="1" />
                                </linearGradient>
                            </defs>
                            <g>
                                <text id="text" y="100"
                                    fontSize="50"
                                    fontStyle="normal"
                                    letterSpacing="0.15rem"
                                    fontWeight="800"
                                    strokeWidth="1.5"
                                    stroke="url(#gradient)"
                                    fill="none"
                                    fontFamily='Quicksand'
                                    style={{ fontFamily: 'sans-serif' }}
                                >
                                    Most popular in {data.name}
                                </text>
                            </g>
                        </svg>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="categories-nav-newest-service mr-lg-1">
                    <button className="swiper-button-prev-most-popular" >
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
                <Swiper {...featuredCarouselPopuplarCategories} className="featured-carousel">
                    <div className="swiper-wrapper">
                        {data && data.listPopular && data.listPopular.map((item) => (
                            <SwiperSlide className="swiper-slide" key={item.id}>
                                <Link href={`/categories/services/${item.slug}`}>
                                    <div className="component-popular-service-detail" >
                                        <div className="overlap-group">
                                            <Image className="vector" alt="Vector" src={vector_most_popular_service} />
                                            <Image className="img" alt="Vector" src={background_most_popular_service} />
                                            <Image className="image-porpular-service" alt="Chuot punk" src={item.image} width={177} height={151} />
                                            <p className="mother-care-service">{item.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                        ))}
                    </div>
                </Swiper>
                <div className="categories-nav-newest-service col-1 ml-lg-1">
                    <button className="swiper-button-next-most-popular" >
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
        </div>
    );
};
export default CategoryPopular;
