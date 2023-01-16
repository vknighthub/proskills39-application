import Link from 'next/link'
import React from 'react'

export const NavThreeColumn = ({ data, slice }) => {
    const first_col = data.slice(0, slice);
    const second_col = data.slice(slice, data.length - slice);
    const thirt_col = data.slice(data.length - slice, data.length);

    return (
        <>
            <li className="menu-item menu-item-has-megamenu menu-item-has-children">
                <div className="megamenu">
                    <div className="megamenu-wrapper">

                        <div className="megamenu-column">
                            <div className="flex-space-between">
                                <ul className="submenu-column">
                                    {first_col.map((sd, index) => (
                                        <li key={index} className="menu-item">
                                            {" "}
                                            <Link href={`/${sd.slug}`} className="menu-link">
                                                {sd.name.en}
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
                                                {sd.name.en}
                                            </Link>{" "}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="megamenu-column">
                            <div className="flex-space-between">
                                <ul className="submenu-column">
                                    {thirt_col.map((sd, index) => (
                                        <li key={index} className="menu-item">
                                            {" "}
                                            <Link href={`/${sd.slug}`} className="menu-link">
                                                {sd.name.en}
                                            </Link>{" "}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </li>
        </>
    )
}
