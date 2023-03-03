import Link from "next/link";
import React from "react";
import avatar from '@/assets/images/avatar.png';
import Image from "next/image";


const ProfileInfoSidebar = () => {
  return (
    <aside>
      <div className="user-db-menu">
        <div className="user-db-header">
          <div className="user-db-cover-image profile-cover-image" />
          <div className="user-header-user-profile">
            <div className="avatar box-64">
              {" "}
              <Link href="/profile-info">

                <Image src={avatar} alt="avatar" />
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
                Dexter Stark
              </Link>{" "}
            </div>
            <div className="item-meta">
              <span className="gradient-text">@DexterStark</span>
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
                Profile Info

              </Link>{" "}
            </li>
            <li className="account">
              {" "}
              <Link href="/account-settings">

                <svg className="crumina-icon">
                  <use xlinkHref="#settings-icon" />
                </svg>
                Account Settings

              </Link>{" "}
            </li>
            <li className="notification">
              {" "}
              <Link href="/notification-settings">

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
              <Link href="connect-a-wallet">

                <svg className="crumina-icon">
                  <use xlinkHref="#wallet-icon" />
                </svg>
                Wallet info

              </Link>{" "}
            </li>
            <li className="verification">
              {" "}
              <Link href="/user-verify">

                <svg className="crumina-icon">
                  <use xlinkHref="#circle-checked-icon" />
                </svg>
                Get Verified

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
        </div>
      </div>
    </aside>
  );
};

export default ProfileInfoSidebar;
