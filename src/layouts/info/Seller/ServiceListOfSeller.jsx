
import Link from 'next/link';
import Image from 'next/image';
import triangle from '@/assets/svg/triangle-popular-service.svg'
import CutText from '@/utils/CutText';

const ServiceListOfSeller = ({ data }) => {
    return (
        <>
            <div className="latest-news-box grid-5-columns">
                {data.map((popular, index) => (
                    <Link href={`/categories/services/servicedetail/${popular.slug}`} key={index}>
                        <div className="component-popular-service" >
                            <div className="overlap-group">
                                <Image className="popular-service" alt=""
                                    src={popular.overviews.files[0].url}
                                    width={230} height={122} />
                                <div className="career-counselling">
                                    <CutText content={popular.introduce} start={0} end={75} />
                                </div>
                            </div>
                            <Image className="vector" alt="Vector" src={triangle} />
                        </div>
                    </Link>
                ))}


            </div>
        </>


    )
}

export default ServiceListOfSeller