import { Popuparcategory } from '@/types'
import GridCategories from './popularcategories/GridCategories'
import { useMediaQuery } from 'react-responsive'
import SwipperCategories from './popularcategories/SwipperCategories'
import { useTranslation } from 'next-i18next'


type PageProps = {
    data: Popuparcategory[]
}

export const HomePopularCategory = ({ data }: PageProps) => {
    const { t } = useTranslation('common')

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    {t('text-categories')}<span className="gradient-text">  {t('text-popular')}</span>
                    
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
