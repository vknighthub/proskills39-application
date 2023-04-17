import Layout from '@/layouts/_layout';
import { NextPageWithLayout } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import invariant from 'tiny-invariant';
import image from '@/assets/images/content/previews/project-thumb-37.png'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const ApplicationLetter: NextPageWithLayout = () => {
    return (
        <div className="primary-content-area container content-padding shopping-cart-page">
            <div className="page-title-section">
                <h2>
                    Application <span className="gradient-text">letter</span>
                </h2>
            </div>
            <div className="checkout-area">
                <form className="cryptoki-form grid-2-columns" id="checkout-form">
                    <div className="form-column">
                        <div className="form-group">
                            <div className="form-field">
                                <label htmlFor="name">Price Deal?</label>
                                <input type="text" id="price" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Delivery time</label>
                                <input type="email" id="email" />
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="state">Application letter</label>
                            <textarea cols={30} rows={10} defaultValue={""} />
                        </div>
                    </div>


                    <div className="form-column">
                        <div className="summary-section">
                            <div className="small-title">Summary</div>
                            <div className="products-in-cart">
                                <div className="product-in-cart">
                                    <div className="product-info">
                                        <div className="product-thumb">
                                            {" "}
                                            <Link href="/07-product-page">
                                                <Image
                                                    src={image}
                                                    alt=""
                                                />
                                            </Link>{" "}
                                        </div>
                                        <div className="product-details">
                                            <div className="product-name">
                                                {" "}
                                                <Link href="/07-product-page">
                                                    Cryptoki NFT and DIgital Market PSD Template
                                                </Link>{" "}
                                            </div>
                                            <div className="license-type">Regular License</div>
                                        </div>
                                    </div>
                                    <div className="product-price">v2p 12.00</div>
                                </div>

                            </div>

                            <div className="complete-order-button">
                                <input
                                    className="btn gradient-background"
                                    type="submit"
                                    defaultValue="Complete Order!"
                                />
                            </div>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}
ApplicationLetter.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export const getStaticPaths: GetStaticPaths = async (
    {
        locales,
    }
) => {
    invariant(locales, 'locales is not defined');
    return { paths: [], fallback: 'blocking' };
};


export default ApplicationLetter