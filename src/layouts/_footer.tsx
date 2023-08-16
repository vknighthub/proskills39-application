import Logo from "@/components/ui/logo";
import Link from "next/link";

import aboutus from "./../data/categories/aboutus.json";
import categories from "./../data/categories/index.json";
import support from "./../data/categories/support.json";
import { useTranslation } from 'next-i18next'
import CommunityFooter from "./footer/community";
import { useMediaQuery } from "react-responsive";


export default function Footer() {
    const { t } = useTranslation('common');
    const halfIndex = Math.ceil(categories.length / 2);
    const categoriesOne = categories.slice(0, halfIndex);
    const categoriesTwo = categories.slice(halfIndex);

    const halfIndexaboutus = Math.ceil(aboutus.length / 2);
    const aboutusOne = aboutus.slice(0, halfIndexaboutus);
    const aboutusTwo = aboutus.slice(halfIndexaboutus);

    const halfIndexsupport = Math.ceil(support.length / 2);
    const supportOne = support.slice(0, halfIndexsupport);
    const supportTwo = support.slice(halfIndexsupport);


    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

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
                                    <span className="gradient-text">Proskills39 </span> {t('text-proskills39')}
                                </p>
                            </div>
                            <ul className="social-icons-list">

                                <li className="social-icon">
                                    {" "}
                                    <a href="https://www.facebook.com/ProSkills39" target="_blank" rel="noreferrer">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#facebook-icon" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="social-icon">
                                    {" "}
                                    <a href="https://twitter.com/ProSkills39" target="_blank" rel="noreferrer">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#twitter-icon" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="social-icon">
                                    {" "}
                                    <a href="https://t.me/ProSkills39" target="_blank" rel="noreferrer">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#telegram-icon" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="social-icon">
                                    {" "}
                                    <a href="https://youtu.be/1ehtOY3uMdo" target="_blank" rel="noreferrer">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#youtube-icon" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="social-icon">
                                    {" "}
                                    <a href=" https://www.tiktok.com/@proskills39" target="_blank" rel="noreferrer">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#tiktok-icon" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="social-icon">
                                    {" "}
                                    <a href="https://www.linkedin.com/in/proskills-community-service-market-place-proskills-351a53275/" target="_blank" rel="noreferrer">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#linkedin-icon" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="social-icon">
                                    {" "}
                                    <a href="https://discord.gg/8PYst76Y" target="_blank" rel="noreferrer">
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

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">{t('text-category')}</div>

                            {isTabletOrMobile ?
                                <div className="two-column-list">
                                    <ul className="column">
                                        {categoriesOne.map((category, index) => (
                                            <li key={index} className="menu-item ">
                                                {" "}
                                                <Link legacyBehavior href={category.url}>
                                                    <a className="menu-link">{t(category.name)}</a>
                                                </Link>{" "}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="column">
                                        {categoriesTwo.map((category, index) => (
                                            <li key={index} className="menu-item ">
                                                {" "}
                                                <Link legacyBehavior href={category.url}>
                                                    <a className="menu-link">{t(category.name)}</a>
                                                </Link>{" "}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                :
                                <div className="is-two-col-element">
                                    <ul className="footer-menu">
                                        {categories.map((category, index) => (
                                            <li key={index} className="menu-item ">
                                                {" "}
                                                <Link legacyBehavior href={category.url}>
                                                    <a className="menu-link">{t(category.name)}</a>
                                                </Link>{" "}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">{t('text-community')}</div>
                            <CommunityFooter />
                        </div>
                    </div>

                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">{t('text-about')}</div>
                            {isTabletOrMobile ?
                                <div className="two-column-list">
                                    <ul className="column">
                                        {aboutusOne.map((aboutus, index) => (
                                            <li key={index} className="menu-item">
                                                {" "}
                                                <Link legacyBehavior href={`/${aboutus.slug}`}>
                                                    <a className="menu-link">{aboutus.name}</a>
                                                </Link>{" "}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="column">
                                        {aboutusTwo.map((aboutus, index) => (
                                            <li key={index} className="menu-item">
                                                {" "}
                                                <Link legacyBehavior href={`/${aboutus.slug}`}>
                                                    <a className="menu-link">{aboutus.name}</a>
                                                </Link>{" "}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                :
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
                            }
                        </div>
                    </div>

                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">{t('text-support')}</div>
                            {isTabletOrMobile ?
                                <div className="two-column-list">
                                    <ul className="column">
                                        {supportOne.map((support, index) => (
                                            <li key={index} className="menu-item">
                                                {" "}
                                                <Link legacyBehavior href={`/${support.slug}`}>
                                                    <a className="menu-link">{support.name}</a>
                                                </Link>{" "}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="column">
                                        {supportTwo.map((support, index) => (
                                            <li key={index} className="menu-item">
                                                {" "}
                                                <Link legacyBehavior href={`/${support.slug}`}>
                                                    <a className="menu-link">{support.name}</a>
                                                </Link>{" "}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                :

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
                            }
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">{t('text-more')}</div>
                            <ul className="footer-menu">
                                <li className="menu-item">
                                    {" "}
                                    <Link legacyBehavior href={`/academy`}>
                                        <a className="menu-link">Academy</a>
                                    </Link>{" "}
                                </li>

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
                            <Link className="menu-link" href="/terms-of-service">
                                {t('text-term-and-service')}
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" href="/privacy-policy">
                                {t('text-privacy')}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}