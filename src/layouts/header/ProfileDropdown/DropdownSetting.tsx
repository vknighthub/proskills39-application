import { UserProfile } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import avatar from '@/assets/images/avatar.png';
import { useLogout } from '@/data/user';
import Footer from './Footer'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useRef } from 'react';

type PageProps = {
    userdata: UserProfile,
    toggle: boolean,
    setToggle: any
}

const DropdownSetting = ({ userdata, toggle, setToggle }: PageProps) => {
    const { t } = useTranslation('common');

    const { mutate: logout } = useLogout();


    useEffect(() => {
        function handleClickOutside(event: any) {
            const container: HTMLElement | null = document.getElementById('profile-dropdown');
            const parent: HTMLElement | null = document.getElementById('parent-toggle');
            if (parent && parent.contains(event.target as Node)) {
                setToggle(true);
            }else{
                if (container && !container.contains(event.target as Node)) {
                    setToggle(false);
                }
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            {userdata &&
                <div
                    id="profile-dropdown"
                    className={`cryptoki-notif-target ${toggle ? "active open" : ""}`}
                >
                    <div className="profile-dropdown-header profile-cover-image">
                        {t('my-profile')}
                    </div>
                    <div className="profile-dropdown-body">
                        <ul className="profile-menu">
                            <li className="profile">
                                {" "}
                                <Link href="/profile-info" onClick={() => setToggle(!toggle)}>
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#user-icon" />
                                    </svg>
                                    {t('text-profile-info')}
                                </Link>{" "}
                            </li>
                            <li className="artwork">
                                {" "}
                                <Link href="http://admin.proskills39.com/" target='_blank'>
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#picture-icon" />
                                    </svg>
                                    {t('text-become-seller')}
                                </Link>{" "}
                            </li>
                            <li className="wallet">
                                {" "}
                                <Link href="/wallet" onClick={() => setToggle(!toggle)}>
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#wallet-icon" />
                                    </svg>
                                    {t('text-wallet-info')}
                                </Link>{" "}
                            </li>
                            <li className="verification">
                                {" "}
                                <Link href="https://admin.proskills39.com/?returnUrl=user-verify" onClick={() => setToggle(!toggle)}>
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#certificate-icon" />
                                    </svg>
                                    {t('text-get-verified')}
                                </Link>{" "}
                            </li>
                            <li className="logout">
                                {" "}
                                <Link href="/" onClick={() => logout()}>
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#logout-icon" />
                                    </svg>
                                    {t('text-logout')}
                                </Link>
                            </li>
                        </ul>
                        <Footer />

                    </div>



                </div>
            }
        </>
    )
}

export default DropdownSetting