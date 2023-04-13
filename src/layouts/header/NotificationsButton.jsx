import notif_thumb_1 from '@/assets/images/content/notifications/notif-thumb-1.png';
import notif_thumb_2 from '@/assets/images/content/notifications/notif-thumb-2.png';
import useClickOutside from '@/lib/hooks/useClickOutside';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { firebaseCloudMessaging } from './../../../firebase'
const NotificationsButton = () => {
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });


  useEffect(() => {
    setToken();

    // Event listener that listens for the push notification event in the background
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
      });
    }

    // Calls the getMessage() function if the token is there
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          console.log("token", token);
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  // Handles the click function on the toast showing push notification
  const handleClickPushNotification = (url) => {
    router.push(url);
  };

  // Get the push notification message and triggers a toast to show it
  function getMessage() {
    const messaging = firebase.messaging();
    messaging.onMessage((message) => {
      toast(
        <div onClick={() => handleClickPushNotification(message?.data?.url)}>
          <h5>{message?.notification?.title}</h5>
          <h6>{message?.notification?.body}</h6>
        </div>,
        {
          closeOnClick: false,
        }
      );
    });
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
