import { Box } from '@/components/styles/Box'
import { Mostpopularservice } from "@/types"
import Link from "next/link"
import MainPopularSerivce from './popular/main'
import { useMediaQuery } from 'react-responsive'
import MobilePopularSerivce from './popular/mobile'
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';




type Props = {
    data: Mostpopularservice[]
}

const HomePopularService = ({ data }: Props) => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    {locale === 'vn' ?
                        (
                            <>
                                <span className="gradient-text"> {t('text-service')}</span>
                                <span> {t('text-most-popular')}</span>
                            </>
                        )
                        :
                        (
                            <>
                                <span>{t('text-most-popular')}</span>
                                <span className="gradient-text"> {t('text-service')}</span>
                            </>
                        )
                    }
                    {/* {t('text-most-popular')} <span className="gradient-text">{t('text-most-popular-service')}</span>
                </div>
                <div className="all-items-link">
                    <Link href="/services">
                        <Box />
                    </Link> */}
                </div>
            </div>
            {isTabletOrMobile
                ?
                <MobilePopularSerivce data={data} />
                :
                <MainPopularSerivce data={data} />
            }
        </div>
    )
}
export default HomePopularService