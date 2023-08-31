import Layout from '@/layouts/_layout';
import { NextPageWithLayout, ServiceDealResponse } from '@/types';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import invariant from 'tiny-invariant';
import image_deal from '@/assets/images/service/deal.png'
import avatar from '@/assets/images/avatar-2.png'
import { useQuery } from 'react-query';
import client from '@/data/client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import vector_deal_service from '@/assets/images/service/vector-deal-service.png';
import rect_deal_service from '@/assets/images/service/rect-deal-service.svg';
import service_image from '@/assets/images/service/service.webp';


const OfferService: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ service }) => {

    const { t } = useTranslation('common')

    const Service = (serviceid: string) => {

        const { data, error, refetch } = useQuery<ServiceDealResponse, Error>(
            ['service-deal'],
            () => client.services.deal({ slug: serviceid }),
        )
        return {
            service_deal: data?.result.data,
            error,
            refetch
        }
    }

    const [isRender, setIsRender] = useState(false);

    const { service_deal, refetch } = Service(service)

    useEffect(() => {
        refetch()
        setIsRender(true)
    }, [service])


    return (
        <>
            {isRender &&
                <div className="primary-content-area  background-content">
                    <div className="container content-padding">
                        <div className="section-padding overflow-hidden">
                            <div className="section-title-wrapper">
                                <div className="section-title">
                                    <h2>
                                        <svg style={{ width: 1280, height: 137, textAlign: 'center' }} xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="gradient" y1="0" y2="1">
                                                    <stop stopColor="#0061D3" offset="0" />
                                                    <stop stopColor="#04CDF9" offset="1" />
                                                </linearGradient>
                                            </defs>
                                            <g>
                                                <text id="text" y="100" fontSize="60" fontStyle="normal" letterSpacing="0.15rem" fontWeight="700" strokeWidth="2" stroke="url(#gradient)" fill="none">
                                                    Service Offer
                                                </text>
                                            </g>
                                        </svg>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className={`component-deal-service`}>
                            <div className="overlap">
                                <Image
                                    className="vector"
                                    alt="Vector"
                                    src={vector_deal_service}
                                    width={105}
                                    height={106}
                                />
                                <Image
                                    className="img"
                                    alt="Vector"
                                    src={rect_deal_service}
                                    width={1147}
                                    height={503}
                                />
                                <Image
                                    className="chuot-punk"
                                    alt="Chuot punk"
                                    src={service_deal?.avatar ? service_deal?.avatar  : avatar}
                                    width={58}
                                    height={58}
                                />
                                <Image
                                    className="group"
                                    alt="Group"
                                    src="https://generation-sessions.s3.amazonaws.com/769e6cc2afb4cf7246fa01e170a502a7/img/group-8780-1@2x.png"
                                    width={14}
                                    height={17}
                                />
                                <p className="ID-nguy-n-m-u-anh">ID: {service_deal?.fullname}</p>
                                <div className="CURRENT-OFFER">CURRENT OFFER</div>
                                <div className="element">{service_deal?.price} v2p</div>
                                <div className="DEAL">DEAL?</div>
                                <div className="tidev">@{service_deal?.username}</div>
                                <div className="rectangle" />
                                <div className="div" />
                                <Image
                                    className="chuot-punk-2"
                                    alt="Chuot punk"
                                    src={service_image}
                                    width={549}
                                    height={574}

                                />
                                <p className="vknight-test">{service_deal?.title}</p>
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group">
                                        <Link href={`/services/applicationletter/${service}`} className="deal">Deal</Link>
                                    </div>
                                </div>
                                <div className="overlap-wrapper">
                                    <div className="decline-wrapper">
                                        <div className="decline">Decline</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
OfferService.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const { slug } = params!
    return {
        props: {
            service: slug,
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};
export const getStaticPaths: GetStaticPaths = async (
    {
        locales,
    }
) => {
    invariant(locales, 'locales is not defined');
    return { paths: [], fallback: 'blocking' };
};

export default OfferService