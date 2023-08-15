import { Newestservice } from '@/types';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import MainNewsestService from './newsest/main';
import { useMediaQuery } from 'react-responsive';
import MobileNewsestService from './newsest/mobile';

type PageProps = {
    data: Newestservice[]
}

export const NewestService = ({ data }: PageProps) => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="container section-padding overflow-hidden">
            <div className="section-title-wrapper">
                <div className="section-title">
                    {locale === 'vn' ?
                        (
                            <>
                                <span className="gradient-text"> {t('text-service')}</span>
                                <span> {t('text-newest')}</span>
                            </>
                        )
                        :
                        (
                            <>
                                <span>{t('text-newest')}</span>
                                <span className="gradient-text"> {t('text-service')}</span>
                            </>
                        )
                    }
                </div>
            </div>
            <div className="row">
                {isTabletOrMobile ?
                    <MobileNewsestService data={data} /> :
                    <MainNewsestService data={data} />
                }
            </div>

        </div>
    )
}
