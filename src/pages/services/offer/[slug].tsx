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
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


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


    const { service_deal, refetch } = Service(service)

    useEffect(() => {
        refetch()
    }, [service])

    console.log(service_deal)

    return (
        <div className="primary-content-area container content-padding">
            <div className="section-padding overflow-hidden">
                <div className="section-title-wrapper">
                    <div className="section-title">
                        <span className="gradient-text">Service</span> offer
                    </div>
                </div>
            </div>
            <div className="swiper-wrapper">
                <div className="artwork-item">
                    <div className="artwork-media">
                        {" "}
                        <Link href="/07-product-page-v3">
                            <Image src={service_deal?.listfile[0]?.link ? service_deal.listfile[0].link : image_deal} alt="" width={710} height={535} />
                        </Link>{" "}
                    </div>
                    <div className="artwork-details">
                        <h3 className="artwork-title">{service_deal?.title}</h3>
                        <div className="avatar-block">
                            <div className="avatar box-42">
                                {" "}
                                <Link href="/08-profile-page">
                                    <Image src={service_deal?.avatar ? service_deal.avatar : avatar} alt="avatar" width={80} height={80} />
                                    <span className="verified">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#check-icon" />
                                        </svg>
                                    </span>
                                </Link>{" "}
                            </div>
                            <div className="avatar-meta">
                                <div className="avatar-title gradient-text">
                                    {" "}
                                    <Link href="/08-profile-page">
                                        {service_deal?.fullname}
                                    </Link>{" "}
                                </div>
                                <div className="avatar-meta">@{service_deal?.username}</div>
                            </div>
                        </div>
                        <div className="product-meta-section">
                            <div className="product-meta-item">
                                <div className="label">Current offer</div>
                                <div className="value">{service_deal?.price} v2p</div>
                            </div>
                            <div className="product-meta-item">
                                <div className="label">Deal?</div>
                                <div className="countdown">
                                    <div
                                        className="js-countdown"
                                        data-timer={104400}
                                        data-labels="Days , Hours , Mins , Secs"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="product-description">
                            <p>
                                {service_deal?.descriptions}
                            </p>
                        </div>
                        <div className="bidding-section">
                            <div className="place-bid">
                                <Link className="btn btn-wide btn-green" href={`/services/applicationletter`}>
                                    {t('text-deal')}
                                </Link>
                            </div>
                            <div className="place-bid">
                                <button className="btn btn-wide btn-blue">
                                    {t('text-contact')}
                                </button>
                            </div>
                            <div className="place-bid">
                                <button className="btn btn-wide btn-red">
                                    {t('text-decline')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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