import Image from "next/image";
import DropdownSetting from './ProfileDropdown/DropdownSetting';
import { useEffect, useState } from 'react';
import LoginAction from './ProfileDropdown/LoginAction';
import avatar from '@/assets/images/avatar.png';
import { useAddress, useWallet } from '@meshsdk/react';
import formatAddress from "@/utils/formatAddress";

const ProfileDropdown = ({ profile, isAuthorized }) => {
    const [toggle, setToggle] = useState(false);
    const [render, setRender] = useState(true);

    const userData = profile ? profile.data : undefined
    const { connected } = useWallet();


    useEffect(() => {
        setRender(true)
    }, [render])

    const address = useAddress();

    const formattedNumber = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(userData?.balance);

    return (
        <>
            {isAuthorized && userData && render &&
                <div id="parent-toggle"
                    className={`header-user-profile cryptoki-notif-bttn ${toggle ? "active" : ""
                        }`}
                >
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
                    <div className="user-meta" onClick={() => setToggle(!toggle)}>
                        <div className="user_name">ID: {userData.fullname}</div>
                        <div className="user_score">
                            <span>
                                <svg className="crumina-icon">
                                    <use xlinkHref="#circle-icon" />
                                </svg>
                            </span>
                            {formattedNumber} <span className="gradient-text bold">v2p</span>
                        </div>
                        <div className="user_score" style={{ marginTop: 5 }}>
                            <span>
                                <svg className="crumina-icon">
                                    <use xlinkHref="#wallet-icon" />
                                </svg>
                            </span>
                            <span className="gradient-text bold span-light">{connected? formatAddress(address, 20): 'N/A'}</span>
                        </div>
                    </div>

                    <div
                        className={`closing-icon ${toggle ? "show" : ""}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <svg className="crumina-icon close-icon">
                            <use xlinkHref="#cross-icon" />
                        </svg>
                    </div>

                    <DropdownSetting userdata={userData} toggle={toggle} setToggle={setToggle} />

                </div>
            }

            <>
                <LoginAction isAuthorized={isAuthorized} userdata={userData} />
            </>


        </>
    );
};
export default ProfileDropdown;
