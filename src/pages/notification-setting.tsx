import React from 'react'
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import Link from 'next/link'
import ProfileInfoSidebar from '@/layouts/info/Profile/ProfileInfoSidebar';

type Props = {}

const NotificationSetting: NextPageWithLayout = (props: Props) => {
    return (
        <div className="primary-content-area container content-padding grid-left-sidebar">
            <ProfileInfoSidebar />
            <div className="main-content-area">
                <div className="page-title">
                    <h2>
                        <span className="gradient-text">Notification</span> Settings
                    </h2>
                </div>
                <form className="cryptoki-form" id="notification-settings-form">
                    <div className="user-db-title">Email Notifications</div>
                    <div className="form-group">
                        <div className="form-field form-field-row">
                            <div className="label">
                                Send an email every time I get a notification
                            </div>
                            <label className="toggle-control">
                                <input type="checkbox" defaultChecked />
                                <span className="control" />
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-field form-field-row">
                            <div className="label">
                                Weekly notifications highlights report
                            </div>
                            <label className="toggle-control">
                                <input type="checkbox" />
                                <span className="control" />
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-field">
                            <div className="label">
                                Choose notifications that you wanna receive via email
                            </div>
                            <div className="form-list-wrapper">
                                <div className="form-list-elem">
                                    <input
                                        type="checkbox"
                                        name="listings"
                                        id="listings"
                                        className="cryptoki-checkbox"
                                        defaultChecked
                                    />
                                    <label htmlFor="listings">Listings</label>
                                </div>
                                <div className="form-list-elem">
                                    <input
                                        type="checkbox"
                                        name="sales"
                                        id="sales"
                                        className="cryptoki-checkbox"
                                        defaultChecked
                                    />
                                    <label htmlFor="sales">Sales</label>
                                </div>
                                <div className="form-list-elem">
                                    <input
                                        type="checkbox"
                                        name="purchases"
                                        id="purchases"
                                        className="cryptoki-checkbox"
                                    />
                                    <label htmlFor="purchases">Purchases</label>
                                </div>
                                <div className="form-list-elem">
                                    <input
                                        type="checkbox"
                                        name="bids"
                                        id="bids"
                                        className="cryptoki-checkbox"
                                        defaultChecked
                                    />
                                    <label htmlFor="bids">Bids</label>
                                </div>
                                <div className="form-list-elem">
                                    <input
                                        type="checkbox"
                                        name="likes"
                                        id="likes"
                                        className="cryptoki-checkbox"
                                        defaultChecked
                                    />
                                    <label htmlFor="likes">Likes</label>
                                </div>
                                <div className="form-list-elem">
                                    <input
                                        type="checkbox"
                                        name="follows"
                                        id="follows"
                                        className="cryptoki-checkbox"
                                        defaultChecked
                                    />
                                    <label htmlFor="follows">Follows</label>
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
NotificationSetting.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default NotificationSetting
