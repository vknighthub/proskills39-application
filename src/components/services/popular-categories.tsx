import { Popuparcategory } from '@/types'
import Categories from './../../layouts/main/Categories'

type PageProps = {
    data: Popuparcategory[]
}

export const HomePopularCategory = ({ data }: PageProps) => {
    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Popular<span className="gradient-text"> Categories</span>
                </div>
            </div>
            <div className="featured-box">
                <div className="featured-box-wrapper grid-5-columns">
                    <Categories data={data} />
                </div>
            </div>
        </div>
    )
}
