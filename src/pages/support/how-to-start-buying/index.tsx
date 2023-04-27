import image from '@/assets/images/content/support/buying.jpg';
import business from '@/assets/images/content/support/frame1123.webp';
import seller_badges from '@/assets/images/content/support/frame1553.webp';
import proskillsapp from '@/assets/images/content/support/frame1556.webp';
import frame6876 from '@/assets/images/content/support/frame6876.webp';
import frame6877 from '@/assets/images/content/support/frame6877.webp';
import freelancer from '@/assets/images/content/support/frame6879.webp';
import subscribe from '@/assets/images/content/support/frame6880.webp';
import custom_order from '@/assets/images/content/support/group1552.webp';
import group1555 from '@/assets/images/content/support/group1555.webp';
import routes from '@/config/routes';
import Layout from '@/layouts/_layout';
import Seo from '@/layouts/_seo';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

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

                <div className="related-section container mt-5">
                    <h3>Tips to thrive on Proskills39:</h3>

                    <div className="featured-box grid-6-columns">
                        <div className="featured-item v2">
                            <div className="featured-item-wrapper">
                                <div className="featured-item-content">
                                    <div className="featured-item-image">
                                        <Image src={freelancer} alt="" />
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
                                        <Image src={seller_badges} alt="" />
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
                                        <Image src={custom_order} alt="" />
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
                                        <Image src={subscribe} alt="" />
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
                                        <Image src={business} alt="" />
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
                                        <Image src={proskillsapp} alt="" />
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

                <div className="related-section container mt-5">
                    <h3>Expert service, hassle-free</h3>
                    <div className="featured-box grid-3-columns">
                        <div className="featured-item v2">
                            <div className="featured-item-wrapper">
                                <div className="featured-item-content">
                                    <div className="featured-item-image text-center">
                                        <Image src={group1555} alt="" />
                                    </div>
                                    <div className="featured-item-info">
                                        <div className="title">
                                            Payments are protected by your delivery approval
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="featured-item v2">
                            <div className="featured-item-wrapper">
                                <div className="featured-item-content">
                                    <div className="featured-item-image text-center">
                                        <Image src={frame6876} alt="" />
                                    </div>
                                    <div className="featured-item-info">
                                        <div className="title">24/7 Customer support is always here to help</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="featured-item v2">
                            <div className="featured-item-wrapper">
                                <div className="featured-item-content">
                                    <div className="featured-item-image text-center">
                                        <Image src={frame6877} alt="" />
                                    </div>
                                    <div className="featured-item-info">
                                        <div className="title">
                                            Time frames & project prices are pre-set with Proskills39
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="related-section container mt-5">
                    <h3>FAQ:</h3>
                    <span><strong> How can I trust sellers? Are there disclosures?</strong> Just like you, every freelancer has to accept the Proskills39 Terms of Service when joining our platform. If you have any additional documents you would like a freelancer to sign (for example, an NDA), you can share them with the freelancer via message (as an attachment) before you place your order with them. Freelancers must decide whether or not they agree with your terms and sign your documents before proceeding. Please also keep in mind that any additional agreement should not contradict Proskills39’s Terms of Service.</span>
                    <br />
                    <span><strong> Are there any safety measures I need to take with sellers (before and after placing my order)?</strong> In general, our Terms of Service cover most things (including confidentiality), and Proskills39 holds payments until your order is completed. However, as we will not be able to assist in any issue that arises outside of the Proskills39 platform, we ask that you do not share your personal contact information and avoid communicating through external platforms.</span>
                    <br />
                    <span><strong> What should I do if I have issues with a seller mid-order?</strong> If you are unhappy with an ongoing order, there are several options available to you. First, we always recommend trying to resolve the issue directly with the seller. Most often, we find that a little extra communication can go a long way. Every order page also has a resolution center where you can propose a cancelation. If you ever feel like you need a little backup, our Customer Support team is available 24/7. Simply contact them with the details of your order and they will be happy to help.</span>
                    <br />
                    <span><strong> What if I am not satisfied with the seller?</strong> Should you have any issues with a seller resulting from an order, please keep in mind that there is a grace period of 13 days after an order has been marked complete. During this time, we can cancel the order for you. Once this period ends, the seller is able to withdraw payment for the order, and cancelation will be subject to the seller’s cooperation. For additional help, you can reach out to our Support Specialists by opening a ticket here. </span>
                    <br />
                    <span><strong> What do levels indicate?</strong> Levels are used as a quality indicator. They represent the total number of orders plus the quality a freelancer has delivered.</span>
                    <p>Level 1: Completed at least 10 orders on time with a minimum 4.7 rating</p>
                    <p>Level 2: Completed at least 50 orders on time with a minimum 4.7 rating</p>
                    <p>Top-Rated Seller: Completed at least 100 orders on time with a minimum 4.7 rating and met Proskills39 internal quality factors</p>
                </div>

            </div>
        </>
    )
}
StartBuying.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default StartBuying