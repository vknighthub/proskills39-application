import { UserProfile } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import avatar from '@/assets/images/avatar.png';
import { useState } from 'react';
import { useLogout } from '@/data/user';
import Footer from './Footer'

type PageProps = {
    userdata: UserProfile
}

const DropdownSetting = ({ userdata }: PageProps) => {
    const [toggle, setToggle] = useState(false);


    const { mutate: logout } = useLogout();

    return (
        <div
            id="profile-dropdown"
            className={`cryptoki-notif-target ${toggle ? "active open" : ""}`}
        >
            <div className="profile-dropdown-header profile-cover-image" />
            <div className="profile-dropdown-body">
                <div className="profile-heading">

                    <div className="profile-avatar avatar box-26">
                        <Image
                            src={userdata?.avatar ? userdata.avatar : avatar}
                            alt="avatar"
                            loading="lazy"
                            height={100}
                            width={100}
                        />
                        <span className="verified">
                            <svg className="crumina-icon">
                                <use xlinkHref="#check-icon" />
                            </svg>
                        </span>
                    </div>

                    <div className="profile-link">
                        {" "}
                        <Link href="/08-profile-page" className="btn btn-small gradient-background">
                            My Profile
                        </Link>{" "}
                    </div>
                </div>

                <ul className="profile-menu">
                    <li className="profile">
                        {" "}
                        <Link href="/profile-info">
                            <svg className="crumina-icon">
                                <use xlinkHref="#user-icon" />
                            </svg>
                            Profile Info
                        </Link>{" "}
                    </li>
                    <li className="account">
                        {" "}
                        <Link href="/account-setting" onClick={() => setToggle(!toggle)}>
                            <svg className="crumina-icon">
                                <use xlinkHref="#settings-icon" />
                            </svg>
                            Account Settings
                        </Link>{" "}
                    </li>
                    <li className="notification">
                        {" "}
                        <Link href="/notification-setting" onClick={() => setToggle(!toggle)}>
                            <svg className="crumina-icon">
                                <use xlinkHref="#slide-filter-icon" />
                            </svg>
                            Notification Settings
                        </Link>{" "}
                    </li>
                    <li className="artwork">
                        {" "}
                        <Link href="/seller">
                            <svg className="crumina-icon">
                                <use xlinkHref="#picture-icon" />
                            </svg>
                            Become a seller
                        </Link>{" "}
                    </li>
                    <li className="wallet">
                        {" "}
                        <Link href="/wallet" onClick={() => setToggle(!toggle)}>
                            <svg className="crumina-icon">
                                <use xlinkHref="#wallet-icon" />
                            </svg>
                            Wallet info
                        </Link>{" "}
                    </li>
                    <li className="verification">
                        {" "}
                        <Link href="/user-verify" onClick={() => setToggle(!toggle)}>
                            <svg className="crumina-icon">
                                <use xlinkHref="#circle-checked-icon" />
                            </svg>
                            Get Verified
                        </Link>{" "}
                    </li>
                    <li className="logout">
                        {" "}
                        <Link href="/" onClick={() => logout()}>
                            <svg className="crumina-icon">
                                <use xlinkHref="#logout-icon" />
                            </svg>
                            Log Out
                        </Link>
                    </li>
                </ul>

            </div>

            <Footer />
           
        </div>
    )
}

export default DropdownSetting