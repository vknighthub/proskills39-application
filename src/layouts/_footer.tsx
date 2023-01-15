import Logo from "@/components/ui/logo";
import Link from "next/link";

import aboutus from "./../data/categories/aboutus.json";
import categories from "./../data/categories/categories.json";
import community from "./../data/categories/community.json";
import support from "./../data/categories/support.json";


export default function Footer() {
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
                                    ProSkills39 is a Service Marketplace that connects pro-skills freelancers and provides support services for project owners to start up and expand their businesses at a reasonable cost.
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
                            <div className="widget-title">Categories</div>
                            <div className="is-two-col-element">
                                <ul className="footer-menu">
                                    {categories.map((category, index) => (
                                        <li key={index} className="menu-item">
                                            {" "}
                                            <Link legacyBehavior href="/">
                                                <a className="menu-link">{category.name}</a>
                                            </Link>{" "}
                                        </li>
                                    ))}

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">Community</div>
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
                            <div className="widget-title">Support</div>
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
                            <div className="widget-title">About us</div>
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
                        vKnightHub 2023 - All Rights Reserved
                    </span>
                    <ul className="sub-footer-menu">
                        <li className="menu-item">
                            <a className="menu-link" href="#">
                                Terms of Service
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="#">
                                Privacy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}