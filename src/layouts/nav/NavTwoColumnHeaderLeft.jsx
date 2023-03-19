import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const NavTwoColumnHeaderLeft = ({ category }) => {
    const { t } = useTranslation('common');

    const first_col = category.children.slice(0, category.slice_number);
    return (
        <>
            <div className="megamenu">
                <div className="megamenu-three-column-left">
                    <div className="megamenu-wrapper">
                        {first_col
                            .map((sublevel1, index) => (
                                <div className="megamenu-column" key={index}>
                                    {sublevel1.menu_level === 2 ? (
                                        <>
                                            <div className="megamenu-title">
                                                {t(sublevel1.name)}
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
                                                                    {t(sublevel2.name)}
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
                                                <a className="menu-link">{t(sublevel1.name)}</a>
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
