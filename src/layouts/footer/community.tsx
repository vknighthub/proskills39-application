import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { useMediaQuery } from 'react-responsive'

type Props = {}



const CommunityFooter = (props: Props) => {
    const { t } = useTranslation('footer');


    const community = [
        {
            "id": 1,
            "slug": "/events",
            "name": "text-events"
        },
        {
            "id": 2,
            "slug": "/blog",
            "name": "text-blog"
        },
        {
            "id": 3,
            "slug": "/forums",
            "name": "text-forum"
        },
        {
            "id": 4,
            "slug": "/community-standard",
            "name": "text-community-standards"
        },
        {
            "id": 5,
            "slug": "/podcast",
            "name": "text-podcast"
        },
        {
            "id": 6,
            "slug": "/influencers",
            "name": "text-influencer"
        },
        {
            "id": 7,
            "slug": "/affiliates",
            "name": "text-affiliates"
        },
        {
            "id": 8,
            "slug": "/referral_program",
            "name": "text-invite-friend"
        },
        {
            "id": 9,
            "slug": "https://admin.proskills39.com/seller/engagement",
            "name": "text-become-to-seller"
        }
    ]
    const columnSize = Math.ceil(community.length / 3);
    const columns = Array.from({ length: 3 }, (_, index) =>
        community.slice(index * columnSize, (index + 1) * columnSize)
    );

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return (
        <>

            {isTabletOrMobile ?

                <div className="two-column-list">
                    {columns.map((column, columnIndex) => (
                        <ul key={columnIndex} className="column ">
                            {column.map((community, index) => (
                                <li key={index} className="menu-item" style={{ width: 100 }}>
                                    {" "}
                                    <Link href={`${community.slug}`} className="menu-link">
                                        {t(community.name)}
                                    </Link>{" "}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
                :
                <ul className="footer-menu">
                    {community.map((community, index) => (
                        <li key={index} className="menu-item">
                            {" "}
                            <Link href={`${community.slug}`} className="menu-link">
                                {t(community.name)}
                            </Link>{" "}
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}

export default CommunityFooter