import { UserProfile } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import avatar from '@/assets/images/avatar.png';
import { useLogout } from '@/data/user';
import Footer from './Footer'
import { useTranslation } from 'next-i18next'

type PageProps = {
    userdata: UserProfile,
    toggle: boolean,
    setToggle: any
}

const DropdownSetting = ({ userdata, toggle, setToggle }: PageProps) => {
    const { t } = useTranslation('common');

    const { mutate: logout } = useLogout();

    return (
        <>
            {userdata &&
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
                                <Link href="/profile-info" className="btn btn-small gradient-background">
                                    {t('my-profile')}
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
                                        <use xlinkHref="#circle-checked-icon" />
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

                    </div>

                    <Footer />

                </div>
            }
        </>
    )
}

export default DropdownSetting