"use client"

import Layout from "@/layouts/_layout";
import { signIn } from 'next-auth/react';
import { useTranslation } from 'next-i18next';

const Login = () => {
    const { t } = useTranslation('common');

    const loginAction = () => {
        signIn('google', { callbackUrl: 'http://localhost:3000' })
    }

    return (
        <Layout>
            <div className="primary-content-area container content-padding">
                <div className="extra-small-section">
                    <div className="page-title text-center">
                        <h2>
                            <span className="gradient-text">Account</span> Login
                        </h2>
                    </div>

                    <form
                        id="sign-in"
                        className="tk-lp-form user-register-kit-sign tk-lp-tabs-form-content active"
                        data-handler="lrk_sign_in_action"
                    >
                        <input
                            className="lrk-sign-captcha-token simple-input"
                            type="hidden"
                            name="token"
                            defaultValue="03AGdBq27AAQVuBtGUv1Ur7tTrD27P2-RiW4gjxYtbRujJeny-2A8m-_R-CRMi3Mh_0KYlw9tXtY0c0YQA26Uy-Y0FN4vwKVVXcp7AyC-D_H-z2OwkzcQCoZ0MrBjnP8q0RWRCdtHYHlBpkmUB7k-0bocxpvVJFbBoeHtebebXD2AkkuQsz0HqXXgHtXpxevzuUmtsroAgjnzFuk97-VFXsCiUuIlA08gyNGPMi9prm96oq5z2sVXXKHzWvt68DyVAvvOSm5gb8jkpSDo8QNODZX69enqLu1ngRaaIDaSSwAKzn98ZLxr8nBEia-rYZHnMuT-1FJKF3ZEgsYal801f0A-76vot9aNIsLD48M5-LQugrADeLwI0aZboeFy5TJ6lVjmNhrxrIoqZ_I0t-juUrR0nrY_6C-PP7EFeuOJ0YewHOnfvHADGpA4"
                        />
                        <input
                            type="hidden"
                            name="redirect_to"
                            defaultValue="https://crumina.net/my-account/"
                        />
                        <div className="tk-lp-alert-cont" />
                        <div className="tk-lp-form-item">
                            <label htmlFor="sign_in_username" className="tk-lp-label">
                                Username or Email Address
                            </label>
                            <input
                                className="tk-lp-input"
                                id="sign_in_username"
                                name="log"
                                type="text"
                            />
                        </div>
                        <div className="tk-lp-form-item">
                            <label htmlFor="sign_in_password" className="tk-lp-label">
                                Password
                            </label>
                            <input
                                className="tk-lp-input"
                                id="sign_in_password"
                                name="pwd"
                                type="password"
                            />
                        </div>
                        <div className="tk-lp-form-item">
                            <div className="tk-lp-remember">
                                <label className="tk-lp-checkbox">
                                    <input
                                        type="checkbox"
                                        name="rememberme"
                                        defaultValue="forever"
                                    />
                                    <span className="tk-lp-control-indicator" />
                                    Remember Me
                                </label>
                                <a
                                    href="#"
                                    className="tk-lp-link-lost tk-lp-tabs-form-item"
                                    data-id="lost-password"
                                >
                                    Lost your password?
                                </a>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="submit-bttn tk-lp-button tk-lp-button--dark tk-lp-w-full"
                        >
                            Log In
                        </button>
                        <button
                            type="button"
                            className="tk-lp-button tk-lp-button--grey tk-lp-w-full tk-lp-tabs-form-item"
                            data-id="sign-up"
                        >
                            Create an Account
                        </button>
                    </form>
                    <div className="social-login">
                        <div className="social-login-text">
                            Or login with your social account!
                        </div>
                        <div className="social-login-buttons">
                            <button className="btn btn-normal facebook">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#facebook-icon" />
                                </svg>
                            </button>
                            <button onClick={() => loginAction()} className="btn btn-normal gmail">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#gmail-icon" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );


};
export default Login;
