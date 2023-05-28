import Link from "next/link";
import React from "react";
import avatar from '@/assets/images/avatar.png';
import Image from "next/image";
import { useTranslation } from 'next-i18next'
import { useMe } from "@/data/user";


const ProfileInfoSidebar = () => {

  const { t } = useTranslation('common');
  const { me } = useMe();
  const profile = me?.data

  return (
    <aside>
      <div className="user-db-menu">
        <div className="user-db-header">
          <div className="user-db-cover-image profile-cover-image" />
          <div className="user-header-user-profile">
            <div className="avatar box-64">
              {" "}
              <Link href="/profile-info">

                <Image src={profile?.avatar ? profile.avatar : avatar} alt="avatar" width={80} height={80} />
                <span className="verified">
                  <svg className="crumina-icon">
                    <use xlinkHref="#check-icon" />
                  </svg>
                </span>

              </Link>{" "}
            </div>
            <div className="title">
              {" "}
              <Link href="/profile-info">
                {profile?.fullname}
              </Link>{" "}
            </div>
            <div className="item-meta">
              <span className="gradient-text">@{profile?.username}</span>
            </div>
          </div>
        </div>
        <div className="user-db-body">
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
            
            <li className="wallet">
              {" "}
              <Link href="/wallet-info">

                <svg className="crumina-icon">
                  <use xlinkHref="#wallet-icon" />
                </svg>
                {t('text-wallet-info')}

              </Link>{" "}
            </li>
            <li className="verification">
              {" "}
              <Link href="https://admin.proskills39.com/?returnUrl=user-verify">

                <svg className="crumina-icon">
                  <use xlinkHref="#circle-checked-icon" />
                </svg>

                {t('text-get-verified')}
              </Link>{" "}
            </li>
            <li className="logout">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#logout-icon" />
                </svg>
                {t('text-logout')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default ProfileInfoSidebar;
