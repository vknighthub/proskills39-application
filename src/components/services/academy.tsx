import MainAcademy from "./academy/main"
import { useMediaQuery } from 'react-responsive'
import MobileAcademy from "./academy/phone"

export const HomeAcademy = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="container-academy">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Academy on<span className="gradient-text"> Proskills39</span>
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
