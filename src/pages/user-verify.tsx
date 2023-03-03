import React from 'react'
import Layout from '@/layouts/_layout';
import { NextPageWithLayout } from '@/types';
import ProfileInfoSidebar from '@/layouts/info/Profile/ProfileInfoSidebar';

type Props = {}

const UserVerify: NextPageWithLayout = ({ }: Props) => {
    return <div className="primary-content-area container content-padding grid-left-sidebar">
        {/* / Profile Info Sidebar */}
        <ProfileInfoSidebar />
        {/* / Profile Info Sidebar */}
        <div className="main-content-area">
            <div className="page-title">
                <h2>
                    Get <span className="gradient-text">Verified</span>
                </h2>
            </div>
            <div className="form-description">
                <div className="form-title">Submit Verification Request</div>
                <div className="description">
                    Please complete the following form with all your information,
                    links and a message about why you wanna get verified. If your
                    application is approved, you’ll receive a confirmation email in
                    your inbox within 2-5 bussiness days.
                </div>
            </div>
            
        </div>
    </div>
}
UserVerify.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default UserVerify
