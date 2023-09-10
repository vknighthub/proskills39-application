import MainAcademy from "./academy/main"
import { useMediaQuery } from 'react-responsive'
import MobileAcademy from "./academy/phone"
import { useTranslation } from 'next-i18next'


export const HomeAcademy = () => {
    const { t } = useTranslation('common')

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="container-academy">
            <div className="section-title-wrapper">
                <div className="section-title">
                {t('text-academy-on')} <span className="gradient-text"> Proskills39</span>
                </div>
            </div>

            <div className="background-academy">
                
                    {isTabletOrMobile
                        ?
                        <MobileAcademy />
                        :
                        <MainAcademy />
                    }

            </div>
        </div>
    )
}
