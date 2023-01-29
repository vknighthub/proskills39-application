"use client"

import Layout from "@/layouts/_layout";
import { useTranslation } from 'next-i18next';
import { DefaultSession } from 'next-auth';
import Input from "@/components/ui/forms/input";
import { signOut } from 'next-auth/react';

export function UserGoogleInformation({ user }: { user: DefaultSession["user"] }) {
    const { t } = useTranslation('common');
    let email: string = user?.email as string
    let fullname: string = user?.name as string

    return (
        <Layout>
            <div className="primary-content-area container content-padding">
                <div className="extra-small-section">
                    <div className="page-title text-center">
                        <h2>
                            <span className="gradient-text">User</span> Information
                        </h2>
                    </div>

                    <form
                        id="sign-in"
                        className="tk-lp-form user-register-kit-sign tk-lp-tabs-form-content active"
                        data-handler="lrk_sign_in_action"
                    >
                        <Input label={"Username or Email Address"} disabled defaultValue={email} />
                        <Input label={"Fullname"} defaultValue={fullname} />
                        <button onClick={() => signOut()} className="btn btn-normal gmail">
                            <svg className="crumina-icon">
                                <use xlinkHref="#gmail-icon" />
                            </svg>
                        </button>
                    </form>

                </div>
            </div>
        </Layout>
    );
};
