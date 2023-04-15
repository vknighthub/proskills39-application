import notif_thumb_1 from '@/assets/images/content/notifications/notif-thumb-1.png';
import useClickOutside from '@/lib/hooks/useClickOutside';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getToken, isSupported, getMessaging, onMessage } from "firebase/messaging";
import { initializeApp, getApps, getApp } from "firebase/app";

import localforage from 'localforage';


const initApp = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyDM52HO4s6Is-71jRZsDMPEESXyC-62Ts0",
    authDomain: "proskills39-383804.firebaseapp.com",
    projectId: "proskills39-383804",
    storageBucket: "proskills39-383804.appspot.com",
    messagingSenderId: "1025952494208",
    appId: "1:1025952494208:web:81201520acc535d9ffac65"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig, 'proskills39') : getApp('proskills39');
  const messaging = getMessaging(app);
  return messaging
}

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
        isread: true,
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

  const [notification, setNotification] = useState(null);

  const tokenInlocalforage = async () => {
    const token = await localforage.getItem("fcm_token");
    return token;
  }

  async function requestPermission() {
    try {

      if ((await tokenInlocalforage()) !== null) {
        return false;
      }

      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        // Generate Token
        const messaging = initApp()
        const token = await getToken(messaging, {
          vapidKey:
            "BOX9gnP6tzI1nfqcVrZ90GeJiQmyGH3L3ia-R_3pIkN1ypTQSsLq0l4WFZUXRFXeh3VUdRQaXSSNHWtaLKHseGA",
        });
        if (token) localforage.setItem("fcm_token", token);
        // Send this token  to server ( db)
      } else if (permission === "denied") {
        alert("You denied for the notification");
      }
    } catch (error) {
      console.error(error);
    }
  }
  const [unreadCount, setUnreadCount] = useState(listnotification.totalread); // Số lượng thông báo chưa đọc

  const getMessaging = () => {
    const messageing = initApp()
    onMessage(messageing, (payload) => {
      console.log(payload)
      const messageid = payload.messageId
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
      };
      const notificationData = payload.data
      setNotification({
        title: notificationTitle,
        body: notificationOptions,
        data: notificationData,
        messageid: messageid
      })
      setUnreadCount(unreadCount + 1)
    }
    )
  }


  useEffect(() => {
    if (isSupported) {
      requestPermission()
      getMessaging()
    }
  }, []);


  if (notification) {
    const data = {
      id: notification.messageid,
      image: notification.data?.image,
      sender: notification.data?.username,
      title: notification.title,
      project: notification.data?.project,
      timestamp: notification.data?.timestamp,
      isread: false,
    }
    listnotification.data.push(data)
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
                    <Link href="/08-profile-page" className="bold">
                      @ {notification.sender}
                    </Link>{" "}
                    has request a project{" "}
                    <Link href="/05-product-page" className="bold">
                      {notification.project}
                    </Link>{" "}
                    <span>If you are interested, you can check out the information</span>
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
