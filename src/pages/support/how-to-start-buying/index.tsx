import routes from '@/config/routes';
import Layout from '@/layouts/_layout';
import Seo from '@/layouts/_seo';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import image from '@/assets/images/content/support/buying.jpg'
import image_buying from '@/assets/images/content/items/featured-item-1.png'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const StartBuying: NextPageWithLayout = () => {
    return (
        <>
            <Seo
                title="ProSkills39 - How to start buying on Proskills39"
                description="Whether you're a graphic designer, programmer, content writer, translator, or voice-over artist, Proskills39 is the place for you.
                Below, you can find great tips to start selling on Proskills39."
                url={routes.how_to_start_buying_page}
                image_url='https://api.proskills39.com/system/logo/logotest.png'
            />
            <div className="product-page product-version-2">
                <div className="product-media">
                    <div className="product-img">
                        <a
                            className="expand-icon"
                            data-fslightbox="lightbox"
                            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${image.src}`}
                        >
                            <svg className="crumina-icon">
                                <use xlinkHref="#maximize-icon" />
                            </svg>
                        </a>
                        <Image
                            src={image}
                            width={1742}
                            height={980}
                            alt=""
                        />
                    </div>
                </div>
                <div className="product-info">
                    <div className="product-info-wrapper">
                        <div className="page-title-section">
                            <h1>How to start buying</h1>
                        </div>
                        <div className="product-author avatar-block">
                            <p className='fs-5'>Know the ins and outs of outsourcing and benefit from everything Proskills39 has to offer. From finding a freelancer to getting deliveries to your virtual doorstep, we’ll walk you through the steps to success.</p>
                        </div>
                        <div className="product-author avatar-block">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/fJU9cwWNAxs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                    </div>
                </div>
                <div className="related-section container">
                    <h3>Using Proskills39 takes a simple count to five</h3>
                    <ul>
                        <li>
                            <svg className="crumina-icon">
                                <use xlinkHref="#settings-icon" />
                            </svg>{" "}
                            <span className="fs-6 ml-lg-1">1. Search. Your business needs it, our freelancers can make it. With advanced search options, getting what you want just got a lot easier</span>
                        </li>
                        <li>
                            <svg className="crumina-icon">
                                <use xlinkHref="#settings-icon" />
                            </svg>{" "}
                            <span className="fs-6 ml-lg-1">2.Choose. Keep your standards high and your brand aligned by reading reviews and screening work samples to help you meet your perfect match </span>
                        </li><li>
                            <svg className="crumina-icon">
                                <use xlinkHref="#settings-icon" />
                            </svg>{" "}
                            <span className="fs-6 ml-lg-1">3. Get specific. Contact your chosen seller to share your requirements and get the right results. </span>
                        </li>
                        <li>
                            <svg className="crumina-icon">
                                <use xlinkHref="#settings-icon" />
                            </svg>{" "}
                            <span className="fs-6 ml-lg-1">4. Place an order. Now get back to work while your Proskills39 freelancers work for you.</span>
                        </li>
                        <li>
                            <svg className="crumina-icon">
                                <use xlinkHref="#settings-icon" />
                            </svg>{" "}
                            <span className="fs-6 ml-lg-1">5. Ding dong – delivery! Your finished order will arrive right in your inbox. Give your stamp of approval and get ready for the next great thing.</span>
                        </li>
                    </ul>
                </div>

                <div className="related-section container">
                    <h3>Tips to thrive on Proskills39:</h3>

                    <div className="featured-box grid-6-columns">
                        <div className="featured-item v2">
                            <div className="featured-item-wrapper">
                                <div className="featured-item-content">
                                    <div className="featured-item-image">
                                        <Image src={image_buying} alt="" />
                                    </div>
                                    <div className="featured-item-info">
                                        <div className="featured-countdown">
                                            {" "}
                                            <span className="clock">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#clock-icon" />
                                                </svg>
                                            </span>{" "}
                                            <span
                                                className="js-countdown"
                                                data-timer={116400}
                                                data-labels="d : , h : , m : , s"
                                            />
                                        </div>
                                        <div className="title">
                                            {" "}
                                            Use filters to find the best freelance matches, fast.

                                            {" "}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="featured-item v2">
                            <div className="featured-item-wrapper">
                                <div className="featured-item-content">
                                    <div className="featured-item-image">
                                        <Image src={image_buying} alt="" />
                                    </div>
                                    <div className="featured-item-info">
                                        <div className="featured-countdown">
                                            {" "}
                                            <span className="clock">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#clock-icon" />
                                                </svg>
                                            </span>{" "}
                                            <span
                                                className="js-countdown"
                                                data-timer={116400}
                                                data-labels="d : , h : , m : , s"
                                            />
                                        </div>
                                        <div className="title">
                                            Check Proskills39’s exclusive seller badges for quality assurance.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="featured-item v2">
                            <div className="featured-item-wrapper">
                                <div className="featured-item-content">
                                    <div className="featured-item-image">
                                        <Image src={image_buying} alt="" />
                                    </div>
                                    <div className="featured-item-info">
                                        <div className="featured-countdown">
                                            {" "}
                                            <span className="clock">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#clock-icon" />
                                                </svg>
                                            </span>{" "}
                                            <span
                                                className="js-countdown"
                                                data-timer={116400}
                                                data-labels="d : , h : , m : , s"
                                            />
                                        </div>
                                        <div className="title">
                                            Request a custom order from a seller for your unique needs.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="featured-item v2">
                            <div className="featured-item-wrapper">
                                <div className="featured-item-content">
                                    <div className="featured-item-image">
                                        <Image src={image_buying} alt="" />
                                    </div>
                                    <div className="featured-item-info">
                                        <div className="featured-countdown">
                                            {" "}
                                            <span className="clock">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#clock-icon" />
                                                </svg>
                                            </span>{" "}
                                            <span
                                                className="js-countdown"
                                                data-timer={116400}
                                                data-labels="d : , h : , m : , s"
                                            />
                                        </div>
                                        <div className="title">
                                            Subscribe to a seller’s service for ongoing success.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="featured-item v2">
                            <div className="featured-item-wrapper">
                                <div className="featured-item-content">
                                    <div className="featured-item-image">
                                        <Image src={image_buying} alt="" />
                                    </div>
                                    <div className="featured-item-info">
                                        <div className="featured-countdown">
                                            {" "}
                                            <span className="clock">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#clock-icon" />
                                                </svg>
                                            </span>{" "}
                                            <span
                                                className="js-countdown"
                                                data-timer={116400}
                                                data-labels="d : , h : , m : , s"
                                            />
                                        </div>
                                        <div className="title">
                                            Connect your team activity on Proskills39 Business.

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="featured-item v2">
                            <div className="featured-item-wrapper">
                                <div className="featured-item-content">
                                    <div className="featured-item-image">
                                        <Image src={image_buying} alt="" />
                                    </div>
                                    <div className="featured-item-info">
                                        <div className="featured-countdown">
                                            {" "}
                                            <span className="clock">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#clock-icon" />
                                                </svg>
                                            </span>{" "}
                                            <span
                                                className="js-countdown"
                                                data-timer={116400}
                                                data-labels="d : , h : , m : , s"
                                            />
                                        </div>
                                        <div className="title">
                                            Use Proskills39’s app to keep up with your work, on-the-go.

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
StartBuying.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default StartBuying