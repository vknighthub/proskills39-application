import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotificationsLists = ({ notification }) => {

  return (
    <>
      <div className="notifications-list notifications-list-detail" >
        <div className="notifications-list-wrapper">
          {notification.slice(0).reverse().map((notification) => (
            <div className="notification" key={notification.id}>
              <div className={`notification-body ${notification.isread ? '' : 'notification-type'}`} key={notification.id}>
                <div className="thumb-box">
                  <Link href={`/user/${notification.sender}`}>
                    <Image
                      src={notification.image}
                      width={50}
                      height={50}
                      alt=""
                      loading="lazy"
                    />
                  </Link>
                  <span className="bid-type">
                    <svg className="crumina-icon">
                      <use xlinkHref="#annotation-icon" />
                    </svg>
                  </span>
                </div>
                <div className="notification-info">
                  <div className="message">
                    {" "}
                    <Link href={`/user/${notification.sender}`} className="bold">
                      @ {notification.sender}
                    </Link>{" "}
                    has request a project{" "}
                    <Link href="#" onClick={() => processRead(notification.slug)}>
                      <span className="bold" >{notification.project}</span>{" "}
                      <span>If you are interested, you can check out the information</span>
                    </Link>
                  </div>
                  <div className="publish-date">{notification.timestamp}</div>
                </div>
              </div>
              <div className="action-buttons">
                <button className="close">
                  <svg className="crumina-icon">
                    <use xlinkHref="#close-circle-icon" />
                  </svg>
                </button>
                <form className="cryptoki-form checkbox">
                  <input
                    type="checkbox"
                    name="notif-select"
                    id={1}
                    className="cryptoki-checkbox"
                  />
                  <label htmlFor={1} />
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* / Notifications Loader */}
      <div className="load-more_bars">
        <div className="load-more_bar" />
        <div className="load-more_bar" />
        <div className="load-more_bar" />
        <div className="load-more_bar" />
        <div className="load-more_bar" />
        <div className="load-more_bar" />
        <div className="load-more_bar" />
        <div className="load-more_bar" />
      </div>
      {/* / Notifications Loader */}
    </>
  );
};

export default NotificationsLists;
