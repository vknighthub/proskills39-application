import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useClickOutside from "@/lib/hooks/useClickOutside";
import avatar from '@/assets/images/avatar.png';

const ProfileDropdown = () => {
    const [toggle, setToggle] = useState(false);
    const dayMood = useRef(true);
    let domNode = useClickOutside(() => {
        setToggle(false);
    });

    useEffect(() => {
        let mood = localStorage.getItem("mood");
        moodChange(mood);
        dayMood.current = mood ? true : false;
        console.log(dayMood.current, mood);
    }, []);

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
    return (
        <div
            className={`header-user-profile cryptoki-notif-bttn ${toggle ? "active" : ""
                }`}
            ref={domNode}
        >
            {/*user-meta*/}
            <div className="user-meta" onClick={() => setToggle(!toggle)}>
                <div className="user_name">Anh Ben</div>
                <div className="user_score">
                    <span>
                        <svg className="crumina-icon">
                            <use xlinkHref="#circle-icon" />
                        </svg>
                    </span>
                    291.36 ETH
                </div>
            </div>
            {/*/user-meta*/}
            {/*user-avatar*/}
            <div
                className={`avatar box-42 ${toggle ? "hide" : ""}`}
                onClick={() => setToggle(!toggle)}
            >
                <picture>
                    <source type="/assets/images/avif" srcSet="/assets/images/avif/avatar.avif" />
                    <Image
                        src={avatar}
                        alt="avatar"
                        width={100} 
                        height={100}
                    />
                </picture>
                <span className="verified">
                    <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                    </svg>
                </span>
            </div>
            {/*/user-avatar*/}
            {/*close-icon*/}
            <div
                className={`closing-icon ${toggle ? "show" : ""}`}
                onClick={() => setToggle(!toggle)}
            >
                <svg className="crumina-icon close-icon">
                    <use xlinkHref="#cross-icon" />
                </svg>
            </div>
            {/*/close-icon*/}
            <div
                id="profile-dropdown"
                className={`cryptoki-notif-target ${toggle ? "active open" : ""}`}
            >
                <div className="profile-dropdown-header profile-cover-image" />
                <div className="profile-dropdown-body">
                    <div className="profile-heading">
                        {/*user-avatar*/}
                        <div className="profile-avatar avatar box-26">
                            <Image
                                src={avatar}
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
                        {/*/user-avatar*/}
                        <div className="profile-link">
                            {" "}
                            <Link legacyBehavior href="/08-profile-page">
                                <a className="btn btn-small gradient-background">My Profile</a>
                            </Link>{" "}
                        </div>
                    </div>
                    {/*user-menu*/}
                    <ul className="profile-menu">
                        <li className="profile">
                            {" "}
                            <Link legacyBehavior href="/23-profile-info">
                                <a>
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#user-icon" />
                                    </svg>
                                    Profile Info
                                </a>
                            </Link>{" "}
                        </li>
                        <li className="account">
                            {" "}
                            <Link legacyBehavior href="/29-account-settings">
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
                            <Link legacyBehavior href="/30-notification-settings">
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
                            <Link legacyBehavior href="/26-upload-artwork">
                                <a>
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#picture-icon" />
                                    </svg>
                                    Create Artwork
                                </a>
                            </Link>{" "}
                        </li>
                        <li className="wallet">
                            {" "}
                            <Link legacyBehavior href="/18-connect-a-wallet">
                                <a>
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#wallet-icon" />
                                    </svg>
                                    Wallet info
                                </a>
                            </Link>{" "}
                        </li>
                        <li className="verification">
                            {" "}
                            <Link legacyBehavior href="/31-get-verified">
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
                            <a href="#">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#logout-icon" />
                                </svg>
                                Log Out
                            </a>
                        </li>
                    </ul>
                    {/*/user-menu*/}
                </div>
                <div className="profile-dropdown-footer">
                    {/*dark-mode-toggle*/}
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
                    {/*/dark-mode-toggle*/}
                </div>
            </div>
        </div>
    );
};
export default ProfileDropdown;
