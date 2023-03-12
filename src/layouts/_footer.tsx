import Logo from "@/components/ui/logo";
import Link from "next/link";

import aboutus from "./../data/categories/aboutus.json";
import categories from "./../data/categories/index.json";
import community from "./../data/categories/community.json";
import support from "./../data/categories/support.json";
import { useTranslation } from "react-i18next";


export default function Footer() {
    const { t } = useTranslation('common');
    return (
        <footer className="footer">
            <div className="footer-wrapper container">
                <div className="footer-content flex-space-between">
                    <div className="footer-column footer-column-large">
                        <div className="footer-widget">
                            <div className="logo">
                                <Logo />
                            </div>
                            <div className="footer-text">
                                <p>
                                    {t('text-proskills39')}
                                </p>
                            </div>
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
                            <div className="subscribe-widget">
                                <form
                                    className="cryptoki-subscribe-form subscribe-form"
                                    action="forms/submit.php"
                                >
                                    <div className="subscribe-form-content">
                                        <input
                                            className="subscribe-input"
                                            type="email"
                                            name="email"
                                            id="subscribe-email"
                                            placeholder="Subscribe to our newsletter"
                                        />
                                        <button className="subscribe-submit" type="submit">
                                            <svg className="crumina-icon">
                                                <use xlinkHref="#arrow-right-icon" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">{t('text-category')}</div>
                            <div className="is-two-col-element">
                                <ul className="footer-menu">
                                    {categories.map((category, index) => (
                                        <li key={index} className="menu-item">
                                            {" "}
                                            <Link legacyBehavior href={category.url}>
                                                <a className="menu-link">{category.name.en}</a>
                                            </Link>{" "}
                                        </li>
                                    ))}

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">{t('text-community')}</div>
                            <ul className="footer-menu">
                                {community.map((community, index) => (
                                    <li key={index} className="menu-item">
                                        {" "}
                                        <Link legacyBehavior href={`/${community.slug}`}>
                                            <a className="menu-link">{community.name}</a>
                                        </Link>{" "}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">{t('text-support')}</div>
                            <ul className="footer-menu">
                                {aboutus.map((aboutus, index) => (
                                    <li key={index} className="menu-item">
                                        {" "}
                                        <Link legacyBehavior href={`/${aboutus.slug}`}>
                                            <a className="menu-link">{aboutus.name}</a>
                                        </Link>{" "}
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>

                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">{t('text-about')}</div>
                            <ul className="footer-menu">
                                {support.map((support, index) => (
                                    <li key={index} className="menu-item">
                                        {" "}
                                        <Link legacyBehavior href={`/${support.slug}`}>
                                            <a className="menu-link">{support.name}</a>
                                        </Link>{" "}
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="footer-copyright flex-space-between">
                    <span className="copyright-text">
                        vKnightHub 2023 - {t('text-all-rights-reserved')}
                    </span>
                    <ul className="sub-footer-menu">
                        <li className="menu-item">
                            <a className="menu-link" href="#">
                                {t('text-term-and-service')}
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="#">
                                {t('text-privacy')}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}