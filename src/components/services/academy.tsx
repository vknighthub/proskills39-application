import { Popuparcategory } from '@/types'
import Categories from '../../layouts/main/Categories'
import Link from 'next/link'
import Image from 'next/image'
import mouse from '@/assets/images/svg/mouse.svg'
export const HomeAcademy = () => {
    return (
        <div className="container">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Academy on<span className="gradient-text"> Proskills39</span>
                </div>
            </div>
            <div className="featured-box background-academy">
                <div className="featured-box-wrapper grid-3-columns">
                    <div className="news-item-academy">
                        <div className="service-thumb">
                            <Link href={`/categories/services/`}>
                                <Image
                                    src={mouse}
                                    width={177}
                                    height={151}
                                    sizes="min-height:300px"
                                    alt={"mouse"}
                                />
                            </Link>{" "}
                        </div>
                        <div className="news-content">
                            <div className="news-meta">
                                <span> Mother care service after giving birth </span>
                            </div>
                        </div>
                    </div>
                    <div className="news-item-academy">
                        <div className="service-thumb">
                            <Link href={`/categories/services/`}>
                                <Image
                                    src={mouse}
                                    width={177}
                                    height={151}
                                    sizes="min-height:300px"
                                    alt={"mouse"}
                                />
                            </Link>{" "}
                        </div>
                        <div className="news-content">
                            <div className="news-meta">
                                <span> Mother care service after giving birth </span>
                            </div>
                        </div>
                    </div>
                    <div className="news-item-academy">
                        <div className="service-thumb">
                            <Link href={`/categories/services/`}>
                                <Image
                                    src={mouse}
                                    width={177}
                                    height={151}
                                    sizes="min-height:300px"
                                    alt={"mouse"}
                                />
                            </Link>{" "}
                        </div>
                        <div className="news-content">
                            <div className="news-meta">
                                <span> Mother care service after giving birth </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
