
import { Box } from '@/components/styles/Box';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import MainOtherSerivce from './other/main';
import MobileOtherSerivce from './other/mobile';

export const OtherService = () => {
    const { t } = useTranslation('common')
    const data = [
        {
            id: 1,
            alt: 'foo',
            image1: 'https://api.proskills39.com/files/uploads%2Fimages%2Fotherservice%2Fotherservice1.png',
            image2: 'https://api.proskills39.com/files/uploads%2Fimages%2Fotherservice%2Fotherservice2.png',
            description: 'Blockchain-as-a-Service'
        },
        {
            id: 2,
            alt: 'foo1',
            image1: 'https://api.proskills39.com/files/uploads%2Fimages%2Fotherservice%2Fotherservice3.png',
            image2: 'https://api.proskills39.com/files/uploads%2Fimages%2Fotherservice%2Fotherservice4.png',
            description: 'Business Analysis Data Analysis'
        }
    ]
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="container section-padding overflow-hidden">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Other<span className="gradient-text"> Service</span>
                </div>
                <div className="all-items-link">
                    <Link href="/">
                        <Box />
                    </Link>
                </div>
            </div>
            <div className="row">
                {isTabletOrMobile ?
                    <MobileOtherSerivce data={data} /> :
                    <MainOtherSerivce data={data} />
                }
            </div>

        </div>
    )
}
