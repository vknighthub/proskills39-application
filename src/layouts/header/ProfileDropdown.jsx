import { useTranslation } from 'next-i18next';
import Image from "next/image";
import ActionHeader from './ActionHeader';
import ButtonHeader from './ButtonHeader';
import DropdownSetting from './ProfileDropdown/DropdownSetting';
import { useState } from 'react';

const ProfileDropdown = ({ profile, isAuthorized }) => {
    const { t } = useTranslation('common')
    const [toggle, setToggle] = useState(false);

    const userData = profile ? profile.data : undefined

    return (
        <>
            {isAuthorized && userData &&
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

                    <DropdownSetting userdata={userData} />

                </div>
            }
            {!isAuthorized && <><ButtonHeader name={t('text-login')} link="login" /> <ActionHeader /></>}


        </>
    );
};
export default ProfileDropdown;
