import React from 'react'
import Categories from './../../../layouts/main/Categories'
import { Popuparcategory } from '@/types'

type PageProps = {
    data: Popuparcategory[]
}
const GridCategories = ({ data }: PageProps) => {
    return (
        <div className="featured-box">
            <div className="featured-box-wrapper grid-5-columns">
                <Categories data={data} />
            </div>
        </div>
    )
}

export default GridCategories