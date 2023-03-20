import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'

type Props = {}



const CommunityFooter = (props: Props) => {
    const { t } = useTranslation('footer');


    const community = [
        {
            "id": 1,
            "slug": "events",
            "name": "text-events"
        },
        {
            "id": 2,
            "slug": "blog",
            "name": "text-blog"
        },
        {
            "id": 3,
            "slug": "forums",
            "name": "text-forum"
        },
        {
            "id": 4,
            "slug": "community-standard",
            "name": "text-community-standards"
        },
        {
            "id": 5,
            "slug": "podcast",
            "name": "text-podcast"
        },
        {
            "id": 6,
            "slug": "influencers",
            "name": "text-influencer"
        },
        {
            "id": 7,
            "slug": "affiliates",
            "name": "text-affiliates"
        },
        {
            "id": 8,
            "slug": "invite-friend",
            "name": "text-invite-friend"
        },
        {
            "id": 9,
            "slug": "seller",
            "name": "text-become-to-seller"
        }
    ]

    return (
        <ul className="footer-menu">
            {community.map((community, index) => (
                <li key={index} className="menu-item">
                    {" "}
                    <Link href={`/${community.slug}`} className="menu-link">
                        {t(community.name)}
                    </Link>{" "}
                </li>
            ))}
        </ul>
    )
}

export default CommunityFooter