import React from 'react'
import { NextPageWithLayout } from '@/types';
import Layout from '@/layouts/_layout';
import ProfileInfoSidebar from '@/layouts/info/Profile/ProfileInfoSidebar';

type Props = {}

const AccountSettings: NextPageWithLayout = (props: Props) => {
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
                        <div className="user-db-title">Social Accounts</div>
                        <div className="form-group">
                            <div className="form-field">
                                <label htmlFor="name">Facebook</label>
                                <div className="social-network-input-cont">
                                    <span className="input-icon" id="input-facebook-icon">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#facebook-icon" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        name="social-network-login"
                                        id="facebook-login"
                                        defaultValue="dexterstark"
                                    />
                                </div>
                            </div>
                            <div className="form-field">
                                <label htmlFor="name">Gmail</label>
                                <div className="social-network-input-cont">
                                    <span className="input-icon">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#gmail-icon" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        name="social-network-login"
                                        id="twitter-login"
                                        defaultValue="@dexterstark"
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
AccountSettings.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default AccountSettings
