import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import { useTranslation } from 'next-i18next'
import project_thumb_37 from '@/assets/images/content/previews/project-thumb-37.png'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    }
}

const Checkout: NextPageWithLayout = (props: Props) => {
    const { t } = useTranslation('common')

    const productincart = {
        price: 52,
        listofproducts: [
            {
                id: 1,
                name: 'Cryptoki NFT and DIgital Market PSD Template',
                image: project_thumb_37,
                link: 'https://',
                licensetype: 'Regular License',
                price: 12,
            },
            {
                id: 2,
                name: 'Cryptoki NFT and DIgital Market PSD Template',
                image: project_thumb_37,
                link: 'https://',
                licensetype: 'Regular License',
                price: 40,
            },
        ],
        code: 5,
        totalprice: 47,
    }

    return (
        <div className="primary-content-area container content-padding shopping-cart-page">
            <div className="page-title-section">
                <h2>
                    <span className="gradient-text">{t('text-order-checkout')}</span>
                </h2>
            </div>
            <div className="checkout-area">
                <form
                    className="cryptoki-form grid-2-columns"
                    id="checkout-form"
                >
                    <div className="form-column">
                        <div className="form-group">
                            <div className="form-field">
                                <label htmlFor="name">{t('contact-us-name-field')}</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">{t('text-email')}</label>
                                <input type="email" id="email" />
                            </div>
                        </div>
                        <div className="form-field">
                            <label htmlFor="address">{t('text-address')} </label>
                            <input type="text" id="address" />
                        </div>
                        <div className="form-group">
                            <div className="form-field">
                                <label htmlFor="country">{t('text-country')}</label>
                                <select id="country">
                                    <option value="your-country">Your country</option>
                                </select>
                            </div>
                            <div className="form-field">
                                <label htmlFor="city">{t('text-city')}</label>
                                <select id="city">
                                    <option value="city">Your country</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-field">
                            <label htmlFor="state">{t('text-additional-information')}</label>
                            <textarea cols={30} rows={10} defaultValue={""} />
                        </div>
                    </div>

                    <div className="form-column">
                        <div className="summary-section">
                            <div className="small-title">Summary</div>
                            <div className="products-in-cart">
                                {productincart.listofproducts.map((product) => (
                                    <div className="product-in-cart" key={product.id}>
                                        <div className="product-info">
                                            <div className="product-thumb">
                                                {' '}
                                                <Link href={product.link}>
                                                    <Image src={product.image} alt="" />
                                                </Link>{' '}
                                            </div>
                                            <div className="product-details">
                                                <div className="product-name">
                                                    {' '}
                                                    <Link href="/07-product-page">
                                                        {product.name}
                                                    </Link>{' '}
                                                </div>
                                                <div className="license-type">{product.licensetype}</div>
                                            </div>
                                        </div>
                                        <div className="product-price">v2p {product.price}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="total-price-section">
                                <div className="total-price-details">
                                    <div className="field">
                                        <div className="label">Cart</div>
                                        <div className="value">v2p {productincart.price}</div>
                                    </div>
                                    <div className="field">
                                        <div className="label">Code</div>
                                        <div className="value">v2p -{productincart.code}</div>
                                    </div>
                                    <div className="field">
                                        <div className="label">Total</div>
                                        <div className="value total-price gradient-text">v2p {productincart.totalprice}</div>
                                    </div>
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
Checkout.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default Checkout
