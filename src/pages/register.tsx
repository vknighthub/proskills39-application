import RegisterUserForm from '@/components/auth/register-form'
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import React from 'react'


const Register: NextPageWithLayout = () => {
    return (
        <div className="primary-content-area container content-padding">
            <div className="extra-small-section">
                <div className="page-title text-center">
                    <h2>
                        <span className="gradient-text">Register</span> Account
                    </h2>
                </div>
                <RegisterUserForm />
                <div className="register-notice">
                    You’ll receive a confirmation email in your inbox with a link to
                    activate your account.
                </div>
            </div>
        </div>
    )
}
Register.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default Register;
