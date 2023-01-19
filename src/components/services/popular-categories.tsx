import Link from 'next/link'
import React from 'react'
import Categories from './../../layouts/main/Categories'

const data = [
    {
        id: 1,
        name: 'Program & Tech',
        image: 'img/content/items/featured-item-1.png',
        avifImage: 'avif/content/items/featured-item-1.avif',
        icon: 'program-tech',
        featured: true,
        newest: true,
        category: ['featured', 'illustrations'],
        type: 'auctions-only',
        price: 4.07,
        react: '22',
        creatorVerified: true,
        ending: true,
        order: 'oldest',
        author: {
            name: 'DexterStark',
            email: '',
            image: 'img/avatar.png',
        },
    },
    {
        id: 2,
        name: 'Graphics & Design',
        image: 'img/content/items/featured-item-2.png',
        avifImage: 'avif/content/items/featured-item-2.avif',
        icon: 'graphics-design',
        featured: true,
        newest: false,
        category: ['memes', 'gaming'],
        type: 'auctions-only',
        price: 3.07,
        time: '86400',
        react: '68',
        creatorVerified: true,
        ending: true,
        order: 'oldest',
        author: {
            name: 'JackieJ',
            email: '',
            image: 'img/avatar-2.png',
        },
    },
    {
        id: 3,
        name: 'Digital Marketing',
        image: 'img/content/items/featured-item-3.png',
        avifImage: 'avif/content/items/featured-item-3.avif',
        icon: 'digital-marketing',
        featured: true,
        newest: true,
        category: ['pop-culture', 'illustrations'],
        type: 'buy-now',
        price: 4.07,
        react: '105',
        creatorVerified: true,
        ending: true,
        order: 'newest',
        author: {
            name: 'DexterStark',
            email: '',
            image: 'img/avatar.png',
        },
    },
    {
        id: 4,
        name: 'Writting & translation',
        image: 'img/content/items/featured-item-4.png',
        avifImage: 'avif/content/items/featured-item-4.avif',
        icon: 'writting-translation',
        featured: true,
        newest: false,
        category: ['nsfw', '3d-artwork'],
        type: 'auctions-only',
        price: 4.07,
        time: '2022-09-31 4:45:00',
        react: '60',
        creatorVerified: true,
        ending: true,
        order: 'newest',
        author: {
            name: 'beardedwndr',
            email: '',
            image: 'img/avatar-2.png',
        },
    },
    {
        id: 5,
        name: 'Video & Annimation',
        image: 'img/content/items/featured-item-5.png',
        avifImage: 'avif/content/items/featured-item-5.avif',
        icon: 'video-animation',
        featured: true,
        newest: true,
        category: ['looping-artwork', 'photography'],
        type: 'auctions-only',
        price: 4.07,
        time: '2022-09-27 21:35:00',
        react: '23',
        creatorVerified: true,
        ending: true,
        order: 'newest',
        author: {
            name: 'DexterStark',
            email: '',
            image: 'img/avatar.png',
        },
    },
    {
        id: 6,
        name: 'Music & Audio',
        image: 'img/content/items/featured-item-6.png',
        avifImage: 'avif/content/items/featured-item-6.avif',
        icon: 'music-audio',
        featured: false,
        newest: true,
        category: ['gaming', 'nsfw'],
        type: 'auctions-only',
        price: 4.07,
        react: '36',
        creatorVerified: false,
        ending: false,
        order: 'trending',
        author: {
            name: 'DexterStark',
            email: '',
            image: 'img/avatar-2.png',
        },
    },
    {
        id: 7,
        name: 'Business',
        image: 'img/content/items/featured-item-8.png',
        avifImage: 'avif/content/items/featured-item-8.avif',
        icon: 'business',
        featured: false,
        newest: true,
        category: ['pop-culture', 'memes'],
        type: 'buy-now',
        price: 4.07,
        time: '2022-09-27 18:45:00',
        react: '98',
        creatorVerified: false,
        ending: false,
        order: 'trending',
        author: {
            name: 'beardedwndr',
            email: '',
            image: 'img/avatar.png',
        },
    },
    {
        id: 8,
        name: 'Lifestyle',
        image: 'img/content/items/featured-item-9.png',
        avifImage: 'avif/content/items/featured-item-9.avif',
        icon: 'lifestyle',
        featured: false,
        newest: false,
        category: ['illustrations', 'gaming'],
        type: 'buy-now',
        price: 4.07,
        creatorVerified: false,
        ending: false,
        order: 'trending',
        react: '25',
        author: {
            name: 'beardedwndr',
            email: '',
            image: 'img/avatar-2.png',
        },
    },
]

export const HomePopularCategory = () => {
    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Popular <span className="gradient-text">Categories</span>
                </div>
                <div className="all-items-link">
                    {' '}
                    <Link href="/02-explore">Explore all Categories</Link>{' '}
                </div>
            </div>
            <div className="featured-box">
                <div className="featured-box-wrapper grid-4-columns">
                    <Categories data={data} />
                </div>
            </div>
        </div>
    )
}
