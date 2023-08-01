import routes from '@/config/routes';
import client from '@/data/client';
import Layout from '@/layouts/_layout';
import Seo from '@/pages/_seo';
import { NextPageWithLayout, ServiceDetailPaginator } from '@/types';
import invariant from 'invariant';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServiceDetailInfo from './../../../../layouts/info/Service/ServiceDetail/ServiceDetailInfo';
import ServiceDetailMedia from './../../../../layouts/info/Service/ServiceDetail/ServiceDetailMedia';
import ServiceDetailTab from './../../../../layouts/info/Service/ServiceDetail/ServiceDetailTab';
import { useEffect, useState } from 'react';


type ParsedQueryParams = {
    servicedetailSlug: string;
};


type PageProps = {
    servicedetail: ServiceDetailPaginator;
};


export const getStaticPaths: GetStaticPaths = async (
    {
        locales,
    }
) => {
    invariant(locales, 'locales is not defined');
    return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<
    PageProps,
    ParsedQueryParams
> = async ({ params, locale }) => {
    const { servicedetailSlug } = params!; //* we know it's required because of getStaticPaths

    try {
        const servicedetail = await client.services.detail({
            slug: servicedetailSlug,
            language: locale
        });
        return {
            props: {
                servicedetail,
                ...(await serverSideTranslations(locale!, ['common','footer'])),
            },
            revalidate: 60, // In seconds
        };
    } catch (error) {
        console.log(error)

        //* if we get here, the product doesn't exist or something else went wrong
        return {
            notFound: true,
        };
    }
};


const ServiceDetail: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ servicedetail }) => {
    const servicedetailinfo = servicedetail.result.data
    const [price, setPrice] = useState(servicedetailinfo.services.price)
    const [packages, setPackages] = useState('Basic')

    return (
        <>
            <Seo title="ProSkills39 - Service"
                description={servicedetailinfo.services.servicename}
                url={routes.service.servicedetail(servicedetailinfo.services.slug)}
                image_url={servicedetailinfo.services.image?.[0].url} />

            <div className="product-page product-version-1 background-content">
                <ServiceDetailMedia data={servicedetailinfo} compare={servicedetailinfo.comparepackage} setPrice= {setPrice} setPackages ={setPackages} />
                <div className="product-info">
                    <div className="product-info-wrapper" id ="product-info">
                        <ServiceDetailInfo data={servicedetailinfo.services} price = {price} />
                        <ServiceDetailTab data={servicedetailinfo.package} seller={servicedetailinfo.seller} packages={packages} />
                    </div>
                </div>
            </div>
        </>

    )
}
ServiceDetail.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
export default ServiceDetail