import packages from '@/assets/images/svg/package.svg';
import dollar_baloons from '@/assets/images/svg/dollar_baloons.svg';
import invoice from '@/assets/images/svg/invoice.svg';
import suitcase from '@/assets/images/svg/suitcase.svg';
import gig_stats from '@/assets/images/svg/gig_stats.svg';
import handshake from '@/assets/images/svg/handshake.svg';
import security from '@/assets/images/svg/security.svg';

import Layout from '@/layouts/_layout';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { Nav, Tab } from "react-bootstrap";

type Props = {}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const SupportPage: NextPageWithLayout = (props: Props) => {
    return (
        <div className="primary-content-area profile-page background-content">
            <div className="profile-page-container container">
                <div className="tabs-block swiper-container">
                    <div className="swiper-nav">
                        <div className="swiper-button-next">
                            <svg className="crumina-icon next-button">
                                <use xlinkHref="#arrow-right2-icon" />
                            </svg>
                        </div>
                        <div className="swiper-button-prev">
                            <svg className="crumina-icon prev-button">
                                <use xlinkHref="#arrow-left2-icon" />
                            </svg>
                        </div>
                    </div>
                    <Tab.Container defaultActiveKey={'tab1'}>
                        <Nav className="tabs-list swiper-wrapper">
                            <Nav.Link as={"li"} eventKey={"tab1"} className="swiper-slide">
                                <a href="#tab1">
                                    Buyer
                                </a>
                            </Nav.Link>
                            <Nav.Link as={"li"} eventKey={"tab2"} className="swiper-slide">
                                <a href="#tab2">
                                    Seller
                                </a>
                            </Nav.Link>
                            <Nav.Link as={"li"} eventKey={"tab3"} className="swiper-slide">
                                <a href="#tab3">
                                    Proskills39 Business Clients
                                </a>
                            </Nav.Link>
                        </Nav>
                        <Tab.Content className="tabs-content-wrapper">
                            <Tab.Pane eventKey={"tab1"} id="tab1" className="tab">
                                <div className="featured-box grid-4-columns">
                                    <div className="featured-item">
                                        <div className="featured-item-wrapper">
                                            <Link href="#">
                                                <div className="featured-item-content text-center">
                                                    <Image src={packages} alt="" width={39} height={45} />
                                                    <div className="featured-item-info text-center">
                                                        <div className="title">
                                                            Buyer order management
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="featured-item">
                                        <div className="featured-item-wrapper">
                                            <Link href="#">
                                                <div className="featured-item-content text-center">
                                                    <Image src={dollar_baloons} alt="" width={39} height={45} />
                                                    <div className="featured-item-info text-center">
                                                        <div className="title">
                                                            Payments
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="featured-item">
                                        <div className="featured-item-wrapper">
                                            <Link href="#">
                                                <div className="featured-item-content text-center">
                                                    <Image src={invoice} alt="" width={39} height={45} />
                                                    <div className="featured-item-info text-center">
                                                        <div className="title">
                                                            Invoices
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="featured-item">
                                        <div className="featured-item-wrapper">
                                            <Link href="#">
                                                <div className="featured-item-content text-center">
                                                    <Image src={suitcase} alt="" width={39} height={45} />
                                                    <div className="featured-item-info text-center">
                                                        <div className="title">
                                                            Proskills39 business
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey={"tab2"} id="tab2" className="tab">
                                <div className="featured-box grid-4-columns">
                                    <div className="featured-item">
                                        <div className="featured-item-wrapper">
                                            <Link href="#">
                                                <div className="featured-item-content text-center">
                                                    <Image src={dollar_baloons} alt="" width={39} height={45} />
                                                    <div className="featured-item-info text-center">
                                                        <div className="title">
                                                            Withdrawal revenues
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="featured-item">
                                        <div className="featured-item-wrapper">
                                            <Link href="#">
                                                <div className="featured-item-content text-center">
                                                    <Image src={gig_stats} alt="" width={39} height={45} />
                                                    <div className="featured-item-info text-center">
                                                        <div className="title">
                                                            Viewing v2Package statistics
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="featured-item">
                                        <div className="featured-item-wrapper">
                                            <Link href="#">
                                                <div className="featured-item-content text-center">
                                                    <Image src={handshake} alt="" width={39} height={45} />
                                                    <div className="featured-item-info text-center">
                                                        <div className="title">
                                                            v2Package policies
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="featured-item">
                                        <div className="featured-item-wrapper">
                                            <Link href="#">
                                                <div className="featured-item-content text-center">
                                                    <Image src={security} alt="" width={39} height={45} />
                                                    <div className="featured-item-info text-center">
                                                        <div className="title">
                                                            Seller Hub
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey={"tab3"} id="tab3" className="tab">
                                <div className="featured-box grid-4-columns">
                                    <div className="featured-item">
                                        <div className="featured-item-wrapper">
                                            <Link href="#">
                                                <div className="featured-item-content text-center">
                                                    <Image src={suitcase} alt="" width={39} height={45} />
                                                    <div className="featured-item-info text-center">
                                                        <div className="title">
                                                            Proskills39 Business
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="featured-item">
                                        <div className="featured-item-wrapper">
                                            <Link href="#">
                                                <div className="featured-item-content text-center">
                                                    <Image src={dollar_baloons} alt="" width={39} height={45} />
                                                    <div className="featured-item-info text-center">
                                                        <div className="title">
                                                            Payments
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="featured-item">
                                        <div className="featured-item-wrapper">
                                            <Link href="#">
                                                <div className="featured-item-content text-center">
                                                    <Image src={invoice} alt="" width={39} height={45} />
                                                    <div className="featured-item-info text-center">
                                                        <div className="title">
                                                            Invoices
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="featured-item">
                                        <div className="featured-item-wrapper">
                                            <Link href="#">
                                                <div className="featured-item-content text-center">
                                                    <Image src={packages} alt="" width={39} height={45} />
                                                    <div className="featured-item-info text-center">
                                                        <div className="title">
                                                            Buyer order management
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}
SupportPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default SupportPage