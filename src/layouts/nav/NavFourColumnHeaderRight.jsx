import Link from 'next/link'
import React from 'react'

export const NavFourColumnHeaderRight = ({ category }) => {
    const first_col = category.children.slice(0, category.slice_number);
    const second_col = category.children.slice(category.slice_number, category.children.length - category.slice_number);
    const third_col = category.children.slice(category.children.length - category.slice_number, category.children.length)
    return (
        <>
            <div className="megamenu">
                <div className="megamenu-four-column">
                    <div className="megamenu-wrapper">
                        {first_col
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
                        {second_col.map((sublevel1, index) => (
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
                                                            className="menu-link"
                                                            href={`/${sublevel2.slug}`}
                                                        >
                                                            {sublevel2.name.en}
                                                        </Link>{' '}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <li key={index} className="menu-item">
                                        {' '}
                                        <Link href={`/${sublevel1.slug}`} className="menu-link">
                                            {sublevel1.name.en}
                                        </Link>{' '}
                                    </li>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="megamenu-wrapper">
                        {third_col.map((sublevel1, index) => (
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
                                                            className="menu-link"
                                                            href={`/${sublevel2.slug}`}
                                                        >
                                                            {sublevel2.name.en}
                                                        </Link>{' '}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <li key={index} className="menu-item">
                                        {' '}
                                        <Link href={`/${sublevel1.slug}`} className="menu-link">
                                            {sublevel1.name.en}
                                        </Link>{' '}
                                    </li>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}
