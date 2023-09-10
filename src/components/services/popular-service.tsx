import { Box } from '@/components/styles/Box'
import { Mostpopularservice } from "@/types"
import Link from "next/link"
import MainPopularSerivce from './popular/main'
import { useMediaQuery } from 'react-responsive'
import MobilePopularSerivce from './popular/mobile'

type Props = {
    data: Mostpopularservice[]
}

const HomePopularService = ({ data }: Props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Most popular <span className="gradient-text">Service</span>
                </div>
                <div className="all-items-link">
                    <Link href="/services">
                        <Box />
                    </Link>
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