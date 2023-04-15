import notif_thumb_1 from '@/assets/images/content/notifications/notif-thumb-1.png';
import useClickOutside from '@/lib/hooks/useClickOutside';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const NotificationsButton = () => {
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });

  const listnotification = {
    totalread: 5,
    data: [
      {
        id: 1,
        image: notif_thumb_1,
        sender: 'hoangnv',
        title: 'Notification Title',
        project: 'Create a website',
        timestamp: '10 min ago',
        isread: false,
      },
      {
        id: 2,
        image: notif_thumb_1,
        sender: 'hoangnv',
        title: 'Notification Title',
        project: 'Create a website',
        timestamp: '37 min ago',
        isread: true,
      },
      {
        id: 3,
        image: notif_thumb_1,
        sender: 'hoangnv',
        title: 'Notification Title',
        project: 'Create a website',
        timestamp: '2 days ago',
        isread: true,
      },
      {
        id: 4,
        image: notif_thumb_1,
        sender: 'hoangnv',
        title: 'Notification Title',
        project: 'Create a website',
        timestamp: '30 days ago',
        isread: true,
      }
    ]
  }

  const [unreadCount, setUnreadCount] = useState(listnotification.totalread); // Số lượng thông báo chưa đọc

  const processRead = () => {
    setUnreadCount(listnotification.totalread - 1);
  }

  return (
    <>

      <div className="notifications-button-cont" ref={domNode}>
        <button
          className={`cart-button cryptoki-notif-bttn ${toggle ? "active" : ""
            }`}
          data-target="notifications-dropdown"
          onClick={() => setToggle(!toggle)}
        >
          {/*notifications icon*/}
          <span className="counter">{unreadCount}</span>
          <svg className="crumina-icon">
            <use xlinkHref="#bell-icon" />
          </svg>
          {/*/notifications icon*/}
        </button>
        {/*notification dropdown*/}
        <div
          id="notifications-dropdown"
          className={`cryptoki-notif-target ${toggle ? "active" : ""}`}
        >
          <div className="title">
            Notifications <span className="colored">{unreadCount}</span>
          </div>
          <div className="notifications-wrapper cryptoki-scrollbar">
            {/*notification-item*/}
            {listnotification.data.slice(0).reverse().map((notification) => (
              <div className={`notification ${notification.isread ? '' : 'notification-type'}`} key={notification.id}>
                <div className="thumb-box">
                  <Image
                    src={notification.image}
                    width={50}
                    height={50}
                    alt=""
                    loading="lazy"
                  />
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
                    <Link href={`/project/${notification.project}`} className="bold">
                      {notification.project}
                    </Link>{" "}
                    <Link href="#" onClick={() => processRead()} >If you are interested, you can check out the information</Link>
                  </div>
                  <div className="publish-date">{notification.timestamp}</div>
                </div>
              </div>
            ))}
            {/*/notification-item*/}

          </div>{" "}
          <Link href="/25-notifications" className="btn-small-fullwidth btn-dark btn-square">
            View all Notifications
          </Link>{" "}
        </div>
      </div>
    </>
  );
};
export default NotificationsButton;
