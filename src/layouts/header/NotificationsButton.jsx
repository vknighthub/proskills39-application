import notif_thumb_1 from '@/assets/images/content/notifications/notif-thumb-1.png';
import notif_thumb_2 from '@/assets/images/content/notifications/notif-thumb-2.png';
import useClickOutside from '@/lib/hooks/useClickOutside';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getToken, isSupported, getMessaging } from "firebase/messaging";
import { initializeApp, getApps } from "firebase/app";

// import { messaging } from '../../firebase'
import { Button, Toast } from 'react-bootstrap';
import localforage from 'localforage';


const initApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCBbx1m0WSRdXaftcFgI4DoJVHcWuDQsBA",
    authDomain: "proskills39-ccc37.firebaseapp.com",
    projectId: "proskills39-ccc37",
    storageBucket: "proskills39-ccc37.appspot.com",
    messagingSenderId: "424188212449",
    appId: "1:424188212449:web:1e8a6443e6fd27301c73a0"
};

  const app = !getApps().length ? initializeApp(firebaseConfig,'proskills39') : getApps();
  const messaging = getMessaging(app);
  return messaging
} 

const NotificationsButton = () => {
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });

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
            "BG1nDn48k8dDeQgIzcBAt53mB9NCWHoe_qgC2lXFunypcpu5c26u_I3PEHw22z65AGYRctlWD6YdBvshr5jaiTA",
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

  useEffect(() => {
    if (isSupported) {
      requestPermission()
    }
  }, []);


  return (
    <>
      {/* <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
        position: 'absolute',
        top: 20,
        right: 20,
        minWidth: 200
      }}>
        <Toast.Header>
          <Image
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">{notification.title}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{notification.body}</Toast.Body>
      </Toast>
      <header className="App-header">
        {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
        {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
        <Image src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => onShowNotificationClicked()}>Show Toast</Button>
      </header> */}

      <div className="notifications-button-cont" ref={domNode}>
        <button
          className={`cart-button cryptoki-notif-bttn ${toggle ? "active" : ""
            }`}
          data-target="notifications-dropdown"
          onClick={() => setToggle(!toggle)}
        >
          {/*notifications icon*/}
          <span className="counter">10</span>
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
            Notifications <span className="colored">10</span>
          </div>
          <div className="notifications-wrapper cryptoki-scrollbar">
            {/*notification-item*/}
            <div className="notification">
              <div className="thumb-box">
                <Image
                  src={notif_thumb_1}
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
                  <Link legacyBehavior href="/08-profile-page">
                    <a className="bold">@JackieJ</a>
                  </Link>{" "}
                  just commented on{" "}
                  <Link legacyBehavior href="/05-product-page">
                    <a className="bold">
                      Cryptoki NFT and Digital Market PSD Template
                    </a>
                  </Link>{" "}
                </div>
                <div className="publish-date">2 minutes ago</div>
              </div>
            </div>
            {/*/notification-item*/}
            {/*notification-item*/}
            <div className="notification">
              <div className="thumb-box">
                <Image
                  src={notif_thumb_1}
                  height={50}
                  width={50}
                  alt=""
                  loading="lazy"
                />
                <span className="purchase-type">
                  <svg className="crumina-icon">
                    <use xlinkHref="#wallet-icon" />
                  </svg>
                </span>
              </div>
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link legacyBehavior href="/08-profile-page">
                    <a className="bold">@CrimsonRay</a>
                  </Link>{" "}
                  just purchased{" "}
                  <Link legacyBehavior href="/06-product-page-v2">
                    <a href="06-product-page-v2" className="bold">
                      Cryptoki NFT and Digital Market PSD Template
                    </a>
                  </Link>{" "}
                </div>
                <div className="publish-date">10 minutes ago</div>
              </div>
            </div>
            {/*/notification-item*/}
            {/*notification-item*/}
            <div className="notification">
              <div className="thumb-box">
                <Image
                  src={notif_thumb_2}
                  width={50}
                  height={50}
                  alt=""
                  loading="lazy"
                />
                <span className="like-type">
                  <svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg>
                </span>
              </div>
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link legacyBehavior href="/08-profile-page">
                    <a className="bold">@NoirArtks</a>
                  </Link>{" "}
                  just liked{" "}
                  <Link legacyBehavior href="/07-product-page-v3">
                    <a className="bold">Twitter Gaming Headers Pack 04</a>
                  </Link>{" "}
                </div>
                <div className="publish-date">37 minutes ago</div>
              </div>
            </div>
            {/*/notification-item*/}
            {/*notification-item*/}
            <div className="notification">
              <div className="thumb-box">
                <Image
                  src={notif_thumb_1}
                  height={50}
                  width={50}
                  alt=""
                  loading="lazy"
                />
                <span className="review-type">
                  <svg className="crumina-icon">
                    <use xlinkHref="#star-icon" />
                  </svg>
                </span>
              </div>
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link legacyBehavior href="/08-profile-page">
                    <a className="bold">@CrimsonRay</a>
                  </Link>{" "}
                  just reviewed{" "}
                  <Link legacyBehavior href="/05-product-page">
                    <a className="bold">
                      Cryptoki NFT and Digital Market PSD Template
                    </a>
                  </Link>{" "}
                </div>
                <div className="publish-date">49 minutes ago</div>
              </div>
            </div>
            {/*/notification-item*/}
          </div>{" "}
          <Link legacyBehavior href="/25-notifications">
            <a className="btn-small-fullwidth btn-dark btn-square">
              View all Notifications
            </a>
          </Link>{" "}
        </div>
      </div>
    </>
  );
};
export default NotificationsButton;
