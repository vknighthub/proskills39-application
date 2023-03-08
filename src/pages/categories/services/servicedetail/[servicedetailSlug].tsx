import Layout from '@/layouts/_layout';
import { NextPageWithLayout } from '@/types';
import React from 'react'
import product from '@/assets/images/content/product-img/product-1.png'
import Image from 'next/image';
import ServiceDetailInfo from './../../../../layouts/info/Service/ServiceDetail/ServiceDetailInfo';
import ServiceDetailTab from './../../../../layouts/info/Service/ServiceDetail/ServiceDetailTab';
type Props = {}

const ServiceDetail: NextPageWithLayout = (props: Props) => {
    return (
        <div className="product-page product-version-1">
            <div className="product-media">
                <a
                    className="expand-icon"
                    data-fslightbox=""
                    href="img/content/product-img/product-2.jpg"
                >
                    <svg className="crumina-icon">
                        <use xlinkHref="#maximize-icon" />
                    </svg>
                </a>
                <div className="product-img">
                    <Image src={product} alt="product" width={300} height={300} />
                </div>
            </div>
            <div className="product-info">
                <div className="product-info-wrapper">
                    <ServiceDetailInfo />
                    <ServiceDetailTab />
                </div>
            </div>
        </div>

    )
}
ServiceDetail.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
export default ServiceDetail