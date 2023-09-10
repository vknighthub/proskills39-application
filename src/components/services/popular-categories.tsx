import { Popuparcategory } from '@/types'
import GridCategories from './popularcategories/GridCategories'
import { useMediaQuery } from 'react-responsive'
import SwipperCategories from './popularcategories/SwipperCategories'

type PageProps = {
    data: Popuparcategory[]
}

export const HomePopularCategory = ({ data }: PageProps) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Popular<span className="gradient-text"> Categories</span>
                </div>
            </div>
            {isTabletOrMobile
                ?
                <SwipperCategories data={data} />
                :
                <GridCategories data={data} />
            }
        </div>
    )
}
