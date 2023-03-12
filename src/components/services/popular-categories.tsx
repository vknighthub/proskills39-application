import Link from 'next/link'
import React from 'react'
import Categories from './../../layouts/main/Categories'

const data = [
    {
        id: 1,
        name: 'Program & Tech',
        slug:'/categories/programing-&-tech-1',
        icon: 'program-tech',
        featured: true,
        react: '22'
    },
    {
        id: 2,
        name: 'Graphics & Design',
        slug:'/categories/graphics-&-design-2',
        icon: 'graphics-design',
        featured: true,
        react: '68'
    },
    {
        id: 3,
        name: 'Digital Marketing',
        slug:'/categories/digital-marketing-3',
        icon: 'digital-marketing',
        featured: true,
        react: '105'
    },
    {
        id: 4,
        name: 'Writting & translation',
        slug:'/categories/writing-&-translation-4',
        icon: 'writting-translation',
        featured: true,
        react: '60'
    },
    {
        id: 5,
        name: 'Video & Annimation',
        slug:'/categories/video-&-animation-5',
        icon: 'video-animation',
        featured: true,
        react: '23'
    },
    {
        id: 6,
        name: 'Music & Audio',
        slug:'/categories/music-videos-181',
        icon: 'music-audio',
        featured: false,
        react: '36'
    },
    {
        id: 7,
        name: 'Business',
        slug:'/categories/business-7',
        icon: 'business',
        featured: false,
        react: '98',
    },
    {
        id: 8,
        name: 'Lifestyle',
        slug:'/categories/lifestyle-8',
        featured: false,
        react: '25'
    },
]

export const HomePopularCategory = () => {
    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Popular <span className="gradient-text">Categories</span>
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
