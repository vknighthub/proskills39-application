import { Box } from '@/components/styles/Box';
import { FreelancersLevel } from '@/types';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import MainFreelancer from './freelancer/main';
import { useMediaQuery } from 'react-responsive';
import MobileFreelancer from './freelancer/mobile';


type PageProps = {
    data: FreelancersLevel[]
}

export const HomeFreelancer = ({ data }: PageProps) => {
    const { t } = useTranslation('common')
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="container section-padding overflow-hidden">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Freelancer on<span className="gradient-text"> Proskills39</span>
                </div>
                <div className="all-items-link">
                    <Link href="/">
                        <Box />
                    </Link>
                </div>
            </div>
            <div className="row">
                {
                    isTabletOrMobile
                        ?
                        <MobileFreelancer data={data} />
                        :
                        <MainFreelancer data={data} />
                }
            </div>

        </div>
    )
}
