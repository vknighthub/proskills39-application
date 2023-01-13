import Link from "next/link";
import React from "react";
import applicationdevelopment from "./../data/categories/applicationdevelopment.json";
import supportcybersecurity from "./../data/categories/supportcybersecurity.json"
import website from "./../data/categories/website.json"
import data from "./../data/categories//data.json"
import blockchain from "./../data/categories/blockchain.json"
import miscellaneous from "./../data/categories/miscellaneous.json"
import logobrandindentity from "./../data/categories/logobrandindentity.json"
import socialdm from "./../data/categories/socialdm.json"
import advicedm from "./../data/categories/advicedm.json"

const NavLayout = () => {
    return (
        <nav className="border-bottom sticky-header">
            <div className="navigation-wrapper container flex-space-between align-items-center">
                <ul className="navigation-menu">
                    <li className="menu-item menu-item-has-megamenu menu-item-has-children">
                        <a className="menu-link" href="#">
                            Programing & Tech
                            <span className="indicator">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#arrow-down-icon" />
                                </svg>
                            </span>
                        </a>
                        <div className="megamenu">
                            <div className="megamenu-wrapper">
                                <div className="megamenu-column">
                                    <div className="megamenu-title">Websites</div>
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {website.map((website, index) => (
                                                <li key={index} className="menu-item">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${website.slug}`}>
                                                        <a className="menu-link">{website.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </div>
                                <div className="megamenu-column">
                                    <div className="megamenu-title">Application Development</div>
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {applicationdevelopment.map((ad, index) => (
                                                <li key={index} className="menu-item flex">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${ad.slug}`}>
                                                        <a className="menu-link">{ad.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="megamenu-column">
                                    <div className="megamenu-title">Support & Cybersecurity</div>
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {supportcybersecurity.map((sc, index) => (
                                                <li key={index} className="menu-item">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${sc.slug}`}>
                                                        <a className="menu-link">{sc.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="megamenu-wrapper">
                                <div className="megamenu-column">
                                    <div className="megamenu-title">Data</div>
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {data.map((data, index) => (
                                                <li key={index} className="menu-item">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${data.slug}`}>
                                                        <a className="menu-link">{data.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </div>

                                <div className="megamenu-column">
                                    <div className="megamenu-title">Blockchain</div>
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {blockchain.map((ad, index) => (
                                                <li key={index} className="menu-item flex">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${ad.slug}`}>
                                                        <a className="menu-link">{ad.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="megamenu-column">
                                    <div className="megamenu-title">Miscellaneous</div>
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {miscellaneous.map((miscellaneous, index) => (
                                                <li key={index} className="menu-item">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${miscellaneous.slug}`}>
                                                        <a className="menu-link">{miscellaneous.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>



                    <li className="menu-item menu-item-has-megamenu menu-item-has-children">
                        <a className="menu-link" href="#">
                            Graphics & Design {" "}
                            <span className="indicator">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#arrow-down-icon" />
                                </svg>
                            </span>
                        </a>
                        <div className="megamenu">
                            <div className="megamenu-wrapper">
                                <div className="megamenu-column">
                                    <div className="megamenu-title">Logo & Brand Indentity</div>
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {logobrandindentity.map((logobrandindentity, index) => (
                                                <li key={index} className="menu-item">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${logobrandindentity.slug}`}>
                                                        <a className="menu-link">{logobrandindentity.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </div>
                                <div className="megamenu-column">
                                    <div className="megamenu-title">Application Development</div>
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {applicationdevelopment.map((ad, index) => (
                                                <li key={index} className="menu-item flex">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${ad.slug}`}>
                                                        <a className="menu-link">{ad.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="megamenu-column">
                                    <div className="megamenu-title">Support & Cybersecurity</div>
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {supportcybersecurity.map((sc, index) => (
                                                <li key={index} className="menu-item">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${sc.slug}`}>
                                                        <a className="menu-link">{sc.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="megamenu-wrapper">
                                <div className="megamenu-column">
                                    <div className="megamenu-title">Data</div>
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {data.map((data, index) => (
                                                <li key={index} className="menu-item">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${data.slug}`}>
                                                        <a className="menu-link">{data.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </div>

                                <div className="megamenu-column">
                                    <div className="megamenu-title">Blockchain</div>
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {blockchain.map((ad, index) => (
                                                <li key={index} className="menu-item flex">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${ad.slug}`}>
                                                        <a className="menu-link">{ad.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="megamenu-column">
                                    <div className="megamenu-title">Miscellaneous</div>
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {miscellaneous.map((miscellaneous, index) => (
                                                <li key={index} className="menu-item">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${miscellaneous.slug}`}>
                                                        <a className="menu-link">{miscellaneous.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>

                    <li className="menu-item menu-item-has-megamenu menu-item-has-children">
                        <a className="menu-link" href="#">
                            Digital Marketing {" "}
                            <span className="indicator">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#arrow-down-icon" />
                                </svg>
                            </span>
                        </a>
                        <div className="megamenu">
                            <div className="megamenu-wrapper">
                                <div className="megamenu-column">
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {socialdm.map((sd, index) => (
                                                <li key={index} className="menu-item">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${sd.slug}`}>
                                                        <a className="menu-link">{sd.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </div>
                                <div className="megamenu-column">
                                    <div className="flex-space-between">
                                        <ul className="submenu-column">
                                            {advicedm.map((ad, index) => (
                                                <li key={index} className="menu-item flex">
                                                    {" "}
                                                    <Link legacyBehavior href={`/${ad.slug}`}>
                                                        <a className="menu-link">{ad.name}</a>
                                                    </Link>{" "}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        {" "}
                        <Link legacyBehavior href="/11-collectors">
                            <a className="menu-link">Writing & Translation</a>
                        </Link>{" "}
                    </li>
                    <li className="menu-item">
                        {" "}
                        <Link legacyBehavior href="/16-spotlight">
                            <a className="menu-link">Video & Animation</a>
                        </Link>{" "}
                    </li>

                    <li className="menu-item">
                        {" "}
                        <Link legacyBehavior href="/16-spotlight">
                            <a className="menu-link"> Music & Audio</a>
                        </Link>{" "}
                    </li>

                    <li className="menu-item">
                        {" "}
                        <Link legacyBehavior href="/16-spotlight">
                            <a className="menu-link"> Business</a>
                        </Link>{" "}
                    </li>

                    <li className="menu-item">
                        {" "}
                        <Link legacyBehavior href="/16-spotlight">
                            <a className="menu-link">Lifestyle</a>
                        </Link>{" "}
                    </li>
                    <li className="menu-item">
                        {" "}
                        <Link legacyBehavior href="/16-spotlight">
                            <a className="menu-link">Trending</a>
                        </Link>{" "}
                    </li>


                </ul>
                <ul className="social-icons-list">
                    <li className="social-icon">
                        {" "}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#facebook-icon" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {" "}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {" "}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#instagram-icon" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {" "}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#twitch-icon" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {" "}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#discord-icon" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default NavLayout;
