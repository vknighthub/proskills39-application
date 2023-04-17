import client from '@/data/client';
import useClickOutside from '@/lib/hooks/useClickOutside';
import { useQuery } from "react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NotificationsButton = ({ isAuthorized }) => {
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });
  const [render, setRender] = useState(false);

  const { locale } = useRouter()
  const router = useRouter()

  const { data, refetch } = useQuery({
    queryKey: ['notification'],
    queryFn: () => client.notification.get(
      {
        language: locale
      }
    ),
    enabled: isAuthorized
  })

  const listnotification = data?.result.data

  const processRead = (slug) => {
    router.push(`/services/offer/${slug}`)
  }

  useEffect(() => {
    refetch()
  }, [locale])

  useEffect(() => {
    setRender(true)
  }, [render])

  return (
    <>
      {isAuthorized && render &&
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
              ))}
              {/*/notification-item*/}

            </div>{" "}
            <Link href="/notification" className="btn-small-fullwidth btn-dark btn-square">
              View all Notifications
            </Link>{" "}
          </div>
        </div>
      }
    </>

  );
};
export default NotificationsButton;
