import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import useClickOutside from "@/lib/hooks/useClickOutside";
import Logo from "@/components/ui/logo";
import { useTranslation } from "next-i18next";
import { useMe } from "@/data/user";

const MobileHeader = () => {
  const { t } = useTranslation('common')
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    let body = document.querySelector("body");
    if (toggle) {
      body.classList.add("body-overlay");
    } else {
      body.classList.remove("body-overlay");
    }
  }, [toggle]);

  let domNode = useClickOutside(() => {
    setToggle(false);
  });

  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) => (value === activeMenu ? "show" : "");
  const { me, isAuthorized } = useMe()
  return (
    <>
      <div className={`mobile-nav-panel ${toggle ? "open" : ""}`} ref={domNode}>
        <div className="mobile-nav-header">
          {/*MOBILE LOGO*/}
          <div className="mobile-menu-logo logo">
            {" "}
            <Logo />
          </div>
          {/*/MOBILE LOGO*/}
          {/*close button*/}
          <div className="close-icon" onClick={() => setToggle(false)}>
            <svg className="crumina-icon">
              <use xlinkHref="#cross-icon" />
            </svg>
          </div>
          {/*/close button*/}
        </div>
        {/*MOBILE MENU*/}
        <div className="mobile-menu-wrapper">
          <ul className="mobile-menu">
            <li className="menu-item">
              <Link href="/drep">
                <svg className="crumina-icon">
                  <use xlinkHref="#double-picture-icon" />
                </svg>
                <span>
                  {t('dRep')}
                </span>
              </Link>
            </li>
            {isAuthorized &&
              <li className="menu-item">
                <Link href="/" onClick={() => logout()}>
                  <svg className="crumina-icon">
                    <use xlinkHref="#logout-icon" />
                  </svg>
                  <span>
                    {t('text-logout')}
                  </span>
                </Link>
              </li>
            }
            {!isAuthorized &&
              <li className="menu-item">
                <Link href="/login">
                  <svg className="crumina-icon">
                    <use xlinkHref="#logout-icon" />
                  </svg>
                  <span>
                    {t('text-login')}
                  </span>
                </Link>
              </li>
            }
          </ul>
        </div>
        {/*/mobbile menu bottom panel*/}
      </div>
      {/*/MOBILE NAVIGATION*/}
      {/*MOBILE NAVIGATION BUTTON*/}
      <div className="burger-icon" onClick={() => setToggle(true)}>
        <svg className="crumina-icon">
          <use xlinkHref="#menu-icon" />
        </svg>
      </div>
    </>
  );
};
export default MobileHeader;
