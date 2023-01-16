import Link from 'next/link'
import React from 'react'
import applicationdevelopment from './../data/categories/applicationdevelopment.json'
import supportcybersecurity from './../data/categories/supportcybersecurity.json'
import website from './../data/categories/website.json'
import data from './../data/categories//data.json'
import blockchain from './../data/categories/blockchain.json'
import miscellaneous from './../data/categories/miscellaneous.json'
import logobrandindentity from './../data/categories/logobrandindentity.json'
import socialdm from './../data/categories/socialdm.json'
import advicedm from './../data/categories/advicedm.json'
import index from './../data/categories/index.json'

const NavLayout = () => {
    const slice_columns_menu = 3
    return (
        <nav className="border-bottom sticky-header">
            <div className="navigation-wrapper container flex-space-between align-items-center">
                <ul className="navigation-menu">
                    {index.map((category, index) => (
                        <li
                            className="menu-item menu-item-has-megamenu menu-item-has-children"
                            key={index}
                        >
                            <a className="menu-link" href="#">
                                {category.name.en}
                                <span className="indicator">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#arrow-down-icon" />
                                    </svg>
                                </span>
                            </a>
                            <div className="megamenu">
                                <div className="megamenu-wrapper">
                                    {category.children
                                        .slice(0, slice_columns_menu)
                                        .map((sublevel1, index) => (
                                            <div className="megamenu-column" key={index}>
                                                {sublevel1.menu_level === 2 ? (
                                                    <>
                                                        <div className="megamenu-title">
                                                            {sublevel1.name.en}
                                                        </div>
                                                        <div className="flex-space-between">
                                                            <ul className="submenu-column">
                                                                {sublevel1.children.map((sublevel2, index) => (
                                                                    <li key={index} className="menu-item">
                                                                        {' '}
                                                                        <Link
                                                                            legacyBehavior
                                                                            href={`/${sublevel2.slug}`}
                                                                        >
                                                                            <a className="menu-link">
                                                                                {sublevel2.name.en}
                                                                            </a>
                                                                        </Link>{' '}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <li key={index} className="menu-item">
                                                        {' '}
                                                        <Link legacyBehavior href={`/${sublevel1.slug}`}>
                                                            <a className="menu-link">{sublevel1.name.en}</a>
                                                        </Link>{' '}
                                                    </li>
                                                )}
                                            </div>
                                        ))}
                                </div>

                                <div className="megamenu-wrapper">
                                    {category.children
                                        .slice(
                                            slice_columns_menu,
                                            slice_columns_menu + slice_columns_menu,
                                        )
                                        .map((sublevel1, index) => (
                                            <div className="megamenu-column" key={index}>
                                                {sublevel1.menu_level === 2 ? (
                                                    <>
                                                        <div className="megamenu-title">
                                                            {sublevel1.name.en}
                                                        </div>
                                                        <div className="flex-space-between">
                                                            <ul className="submenu-column">
                                                                {sublevel1.children.map((sublevel2, index) => (
                                                                    <li key={index} className="menu-item">
                                                                        {' '}
                                                                        <Link
                                                                            legacyBehavior
                                                                            href={`/${sublevel2.slug}`}
                                                                        >
                                                                            <a className="menu-link">
                                                                                {sublevel2.name.en}
                                                                            </a>
                                                                        </Link>{' '}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <li key={index} className="menu-item">
                                                        {' '}
                                                        <Link legacyBehavior href={`/${sublevel1.slug}`}>
                                                            <a className="menu-link">{sublevel1.name.en}</a>
                                                        </Link>{' '}
                                                    </li>
                                                )}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <ul className="social-icons-list">
                    <li className="social-icon">
                        {' '}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#facebook-icon" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {' '}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {' '}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#instagram-icon" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {' '}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#twitch-icon" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {' '}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#discord-icon" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavLayout
