import avatar from '@/assets/images/avatar.png';
import { FetchNotifications } from '@/data/notification';
import useClickOutside from '@/lib/hooks/useClickOutside';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NotificationsButton = ({ isAuthorized, me }) => {
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });



  const { locale } = useRouter()
  const router = useRouter()

  const { data, refetch } = FetchNotifications(locale)

  const listnotification = data

  const processRead = (slug) => {
    router.push(`/services/offer/${slug}`)
  }

  useEffect(() => {
    if (isAuthorized) {
      refetch()
    }
  }, [isAuthorized, refetch])

  
  const handleClick = () => {
    router.push('/attendance')
  }

  return (
    <>
      {isAuthorized &&
        (
          <div style={{ display: 'flex' }}>
            <div className="notifications-button-cont" ref={domNode}>
              <button
                className={`cart-button cryptoki-notif-bttn ${toggle ? "active" : ""
                  }`}
                data-target="notifications-dropdown"
                onClick={() => setToggle(!toggle)}
              >
                {/*notifications icon*/}
                <span className="counter">{listnotification?.total}</span>
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
                  Notifications <span className="colored">{listnotification?.total}</span>
                </div>
                <div className="notifications-wrapper cryptoki-scrollbar">
                  {/*notification-item*/}
                  {listnotification?.data.slice(0).reverse().map((notification) => (
                    <div className={`notification ${notification.isread ? '' : 'notification-type'}`} key={notification.id}>
                      <div className="thumb-box">
                        <Link href={`/user/${notification.sender}`}>
                          <Image
                            src={notification.image ? notification.image : avatar}
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
                  ))}
                  {/*/notification-item*/}

                </div>{" "}
                <Link href="/notification" className="btn-small-fullwidth btn-dark btn-square">
                  View all Notifications
                </Link>{" "}
              </div>
            </div>

            <div className="notifications-button-cont ml-lg-1" >
              <button
                className={`cart-button cryptoki-notif-bttn}`}
                data-target="notifications-dropdown"
                onClick={() => handleClick()}
              >
                {!me?.data.isAttendance &&
                  <span className="counter">!</span>
                }
                <svg className="crumina-icon">
                  <use xlinkHref="#hand-icon" />
                </svg>


              </button>
            </div>
          </div>
        )
      }
    </>

  );
};
export default NotificationsButton;
