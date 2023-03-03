import avatar from '@/assets/images/avatar.png';
import { useLogout } from "@/data/user";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ProfileDropdown = ({ profile }) => {
    const [toggle, setToggle] = useState(false);
    const dayMood = useRef(true)

    useEffect(() => {
        let mood = localStorage.getItem("mood");
        moodChange(mood);
        dayMood.current = mood ? true : false;
        console.log(dayMood.current, mood);
    }, [profile]);

    const moodChange = (dark) => {
        if (dark) {
            document.querySelector("body").classList.add("dark-mode");
            localStorage.setItem("mood", "dark-mood");
        } else {
            document.querySelector("body").classList.remove("dark-mode");
            localStorage.removeItem("mood");
        }
    };

    const onClick = () => {
        dayMood.current = !dayMood.current;
        moodChange(dayMood.current);
    };

    const { mutate: logout } = useLogout();


    const userData = profile ? profile.data : undefined

    return (
        <>
            {userData &&
                <div
                    className={`header-user-profile cryptoki-notif-bttn ${toggle ? "active" : ""
                        }`}
                >
                    <div className="user-meta" onClick={() => setToggle(!toggle)}>
                        <div className="user_name">{userData.fullname}</div>
                        <div className="user_score">
                            <span>
                                <svg className="crumina-icon">
                                    <use xlinkHref="#circle-icon" />
                                </svg>
                            </span>
                            291.36 <span className="gradient-text bold">v2P</span>
                        </div>
                    </div>

                    <div
                        className={`avatar box-42 ${toggle ? "hide" : ""}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <Image
                            src={userData.avatar ? userData.avatar : avatar}
                            alt="avatar"
                            width={100}
                            height={100}
                        />
                        <span className="verified">
                            <svg className="crumina-icon">
                                <use xlinkHref="#check-icon" />
                            </svg>
                        </span>
                    </div>

                    <div
                        className={`closing-icon ${toggle ? "show" : ""}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <svg className="crumina-icon close-icon">
                            <use xlinkHref="#cross-icon" />
                        </svg>
                    </div>

                    <div
                        id="profile-dropdown"
                        className={`cryptoki-notif-target ${toggle ? "active open" : ""}`}
                    >
                        <div className="profile-dropdown-header profile-cover-image" />
                        <div className="profile-dropdown-body">
                            <div className="profile-heading">

                                <div className="profile-avatar avatar box-26">
                                    <Image
                                        src={userData.avatar ? userData.avatar : avatar}
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
                                    <Link legacyBehavior href="/08-profile-page">
                                        <a className="btn btn-small gradient-background">My Profile</a>
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
                                    <Link legacyBehavior href="/account-setting" onClick={() => setToggle(!toggle)}>
                                        <a>
                                            <svg className="crumina-icon">
                                                <use xlinkHref="#settings-icon" />
                                            </svg>
                                            Account Settings
                                        </a>
                                    </Link>{" "}
                                </li>
                                <li className="notification">
                                    {" "}
                                    <Link legacyBehavior href="/notification-setting" onClick={() => setToggle(!toggle)}>
                                        <a>
                                            <svg className="crumina-icon">
                                                <use xlinkHref="#slide-filter-icon" />
                                            </svg>
                                            Notification Settings
                                        </a>
                                    </Link>{" "}
                                </li>
                                <li className="artwork">
                                    {" "}
                                    <Link legacyBehavior href="/seller">
                                        <a>
                                            <svg className="crumina-icon">
                                                <use xlinkHref="#picture-icon" />
                                            </svg>
                                            Become a seller
                                        </a>
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
                                    <Link legacyBehavior href="/user-verify" onClick={() => setToggle(!toggle)}>
                                        <a>
                                            <svg className="crumina-icon">
                                                <use xlinkHref="#circle-checked-icon" />
                                            </svg>
                                            Get Verified
                                        </a>
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
                        <div className="profile-dropdown-footer">

                            <div className="mode-toggle">
                                <div className="mode-title">
                                    <span>
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#moon-icon" />
                                        </svg>
                                    </span>
                                    Night-mode
                                </div>
                                <label className="toggle-control">
                                    <input
                                        type="checkbox"
                                        ref={dayMood}
                                        defaultChecked={dayMood.current}
                                        onClick={(e) => onClick(e)}
                                    />
                                    <span className="control" />
                                </label>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </>
    );
};
export default ProfileDropdown;
