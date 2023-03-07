import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import useClickOutside from "@/lib/hooks/useClickOutside";
import Logo from "@/components/ui/logo";

const MobileHeader = () => {
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
              <Link legacyBehavior href="/" className="menu-link">
                Home
              </Link>
            </li>
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
