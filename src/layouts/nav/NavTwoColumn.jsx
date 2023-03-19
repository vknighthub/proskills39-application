import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const NavTwoColumn = ({ data, slice }) => {
    const { t } = useTranslation('common');

    const first_col = data.slice(0, slice);
    const second_col = data.slice(slice, data.length);
    return (
        <>
            <div className="megamenu">
                <div className="megamenu-two-column">
                    <div className="megamenu-wrapper">
                        <div className="megamenu-column">
                            <div className="flex-space-between">
                                <ul className="submenu-column">
                                    {first_col.map((sd, index) => (
                                        <li key={index} className="menu-item">
                                            {" "}
                                            <Link href={`/${sd.slug}`} className="menu-link">
                                                {t(sd.name)}
                                            </Link>{" "}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="megamenu-column">
                            <div className="flex-space-between">
                                <ul className="submenu-column">
                                    {second_col.map((sd, index) => (
                                        <li key={index} className="menu-item">
                                            {" "}
                                            <Link href={`/${sd.slug}`} className="menu-link">
                                                {t(sd.name)}
                                            </Link>{" "}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
