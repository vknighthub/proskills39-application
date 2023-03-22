import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import paypal from '@/assets/images/content/wallet/paypal.svg'
import PaypalCheckoutButton from '@/components/ui/paypal';

type Props = {}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const Paypal: NextPageWithLayout = (props: Props) => {
    const { t } = useTranslation('common');

    return (
        <div className="primary-content-area container content-padding">
            <div className="extra-small-section">
                <div className="page-title text-center">
                    <h2>
                        <span className="gradient-text">Paypal</span> {t('text-payment')}
                    </h2>
                    <Image src={paypal} alt='Paypal' width="80" height="80" />
                </div>
                <form
                    id="paypal"
                    className="tk-lp-form user-register-kit-sign tk-lp-tabs-form-content active"
                    data-handler="lrk_sign_in_action"
                >
                    <div className="tk-lp-form-item">
                        <label htmlFor="wallet_paypal" className="tk-lp-label">
                            {t("text-amount")}
                        </label>
                        <input
                            className="tk-lp-input"
                            id="wallet_paypal"
                            type="text"
                        />
                    </div>
                    <PaypalCheckoutButton amount = {"10"}/>
            

                </form>



            </div>
        </div>
    )
}
Paypal.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default Paypal