import routes from '@/config/routes';
import Layout from '@/layouts/_layout';
import Seo from '@/layouts/_seo';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const StartSelling: NextPageWithLayout = () => {
    return (
        <>
            <Seo
                title="ProSkills39 - How to start selling on Fiverr"
                description="Whether you're a graphic designer, programmer, content writer, translator, or voice-over artist, Proskills39 is the place for you.
                Below, you can find great tips to start selling on Proskills39."
                url={routes.how_to_start_sellings_page}
                image_url='https://api.proskills39.com/system/logo/logotest.png'
            />
            <div className="primary-content-area container content-padding grid-left-sidebar">
                <aside>
                    <div className="user-db-menu">

                        <div className="user-db-body">
                            <ul className="profile-menu">
                                <li className="account">
                                    {" "}
                                    <Link href="/29-account-settings">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#settings-icon" />
                                        </svg>
                                        Creating and managing your Gig
                                    </Link>{" "}
                                </li>
                                <li className="account">
                                    {" "}
                                    <Link href="/29-account-settings">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#settings-icon" />
                                        </svg>
                                        Gig enhancements
                                    </Link>{" "}
                                </li>
                                <li className="account">
                                    {" "}
                                    <Link href="/29-account-settings">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#settings-icon" />
                                        </svg>
                                        Gig tips and tricks
                                    </Link>{" "}
                                </li>
                                <li className="account">
                                    {" "}
                                    <Link href="/29-account-settings">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#settings-icon" />
                                        </svg>
                                        Learn from Proskills39 and Skill tests
                                    </Link>{" "}
                                </li>
                                <li className="account">
                                    {" "}
                                    <Link href="/29-account-settings">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#settings-icon" />
                                        </svg>
                                        Gig Categories, subcategories
                                    </Link>{" "}
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>

                <div className="main-content-area">
                    <div className="page-title">
                        <h2>
                            How to start selling on <span className="gradient-text">Proskills39</span>
                        </h2>
                    </div>
                    <div className="user-db-content-area">
                        <span className='fs-6'>Proskills39 is the world&apos;s largest marketplace for digital services.</span>
                        <br />
                        <span className='fs-6'>Share your skills with our buyer community—and make money while you&apos;re at it!</span>
                    </div>
                    <div className="user-db-content-area mt-3">
                        <span className='fs-6'>Whether you&apos;re a graphic designer, programmer, content writer, translator, or voice-over artist, Proskills39 is the place for you.</span>
                        <br />
                        <span className='fs-6'>Below, you can find great tips to start selling on Proskills39.</span>
                    </div>
                    <div className="page-title section-padding">
                        <h4>
                            Creating your seller profile
                        </h4>
                        <p className='fs-6'>Your profile is how you present yourself to the community, and we always encourage professionalism.</p>
                        <i><strong>Note:</strong> If you created your account on the mobile app, you will need to complete this step on your desktop.</i>
                        <p className='text-center'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/m1cA-SRrbpw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </p>
                    </div>

                    <div className="page-title section-padding">
                        <h4>
                            Creating your Gig
                        </h4>
                        <span className='fs-6'>Your Gig is the service you sell on Proskills39.</span>
                        <br />
                        <span className='fs-6'>When you create your Gig, you&apos;ll have the opportunity to show off your talents, and provide buyers with all the information they could need to help them decide to do business with you.</span>
                        <p className='text-center'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/F-S4ssjgXn0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </p>
                    </div>

                    <div className="page-title section-padding">
                        <h4>
                            Offering packages
                        </h4>
                        <span className='fs-6'>Packages allow you to offer three different service bundles to sell on your Gig Page. It’s a great way to provide your buyers with more choices, and to help push your order value higher! </span>
                        <br />
                        <p className='text-center'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/kc0HY8omsRs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </p>
                    </div>

                    <div className="page-title section-padding">
                        <h4>
                            Sending custom offers/ Buyer requests
                        </h4>
                        <span className='fs-6'>Sending custom offers enables you to be proactive and offer your customized services to potential buyers.</span>
                        <br />
                        <p className='text-center'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/NiKYEHyHLms" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </p>
                    </div>

                    <div className="page-title section-padding">
                        <h3>
                            FAQs
                        </h3>
                        <h4>1. Do you have any tools that will help me run my freelance business?</h4>
                        <span className='fs-6'>With the Proskills39 Workspace app (formerly AND.CO), you can easily send proposals and invoices, manage your time and tasks, and, best of all, it’s free to download.</span>
                        <h4>2. How can I improve my professionalism and further my freelancing career?</h4>
                        <span className='fs-6'>This can be achieved with Learn from Proskills39, an online, on-demand video platform, specially tailored for freelancers and professionals.</span>
                        <br />
                        <span className='fs-6'>All the classes are taught by top experts who are distinguished in their respective fields.</span>
                        <br />
                        <span className='fs-6'>These courses contain practical and comprehensive knowledge, exercises, quizzes, and tests.</span>
                        <p>By taking a course, you will level up your skills and grow professionally. And by successfully passing the course’s final quiz, a badge will be added to your profile (showcasing the skills you just learned).</p>

                    </div>
                </div>
            </div>
        </>
    )
}
StartSelling.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default StartSelling