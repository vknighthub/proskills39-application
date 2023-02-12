import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import React from 'react'
import ProfileInfoSidebar from '@/layouts/info/Profile/ProfileInfoSidebar'
import ProfileInfoForm from '@/layouts/info/Profile/ProfileInfoForm'
import ProfileInfoAvatar from '@/layouts/info/Profile/ProfileInfoAvatar'



const ProfileInformation: NextPageWithLayout = () => {
    return (
        <div className="primary-content-area container content-padding grid-left-sidebar">
            {/* / Profile Info Sidebar */}
            <ProfileInfoSidebar />
            {/* / Profile Info Sidebar */}
            <div className="main-content-area">
                <div className="page-title">
                    <h2>
                        <span className="gradient-text">Profile</span> Info
                    </h2>
                </div>
                <div className="user-db-content-area">
                    {/* / Profile Info Form */}
                    <ProfileInfoForm />
                    {/* / Profile Info Form */}

                    {/* / Profile Info Avatar */}
                    <ProfileInfoAvatar />
                    {/* / Profile Info Avatar */}
                </div>
                <button className="btn btn-wide btn-dark">Save Changes</button>
            </div>
        </div>
    )
}
ProfileInformation.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default ProfileInformation