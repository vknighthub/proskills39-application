import React from 'react'
import { NextPageWithLayout } from '@/types';
import Layout from '@/layouts/_layout';
import ProfileInfoSidebar from '@/layouts/info/Profile/ProfileInfoSidebar';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {}

const WalletInfo: NextPageWithLayout = (props: Props) => {
    return (
        <div className="primary-content-area container content-padding grid-left-sidebar">
            <ProfileInfoSidebar />
            <div className="main-content-area">
                <div className="page-title">
                    <h2>
                        <span className="gradient-text">Account</span> Settings
                    </h2>
                </div>
                <form className="cryptoki-form" id="account-settings-form">
                    <div className="form-section">
                        <div className="user-db-title">My wallet address</div>

                        <div className="form-group">

                            <div className="form-field">
                                <label htmlFor="name">Nami</label>
                                <div className="social-network-input-cont">
                                    <span className="input-icon" id="input-facebook-icon">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#nami-icon" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        name="social-network-login"
                                        id="facebook-login"
                                        defaultValue="addr1q86z9mjp97dyaknwfulc6653neye45lyrxz3ptj4j0cqul2vwrat3jmcl543muh83tlwrnhh8tnk7jywasm4ttda7zyqpeff4g"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-wide btn-dark" type="submit">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    )
}
WalletInfo.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

export default WalletInfo
