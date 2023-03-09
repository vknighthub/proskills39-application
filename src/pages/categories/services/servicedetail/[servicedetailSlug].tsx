import Layout from '@/layouts/_layout';
import { NextPageWithLayout } from '@/types';
import ServiceDetailInfo from './../../../../layouts/info/Service/ServiceDetail/ServiceDetailInfo';
import ServiceDetailMedia from './../../../../layouts/info/Service/ServiceDetail/ServiceDetailMedia';
import ServiceDetailTab from './../../../../layouts/info/Service/ServiceDetail/ServiceDetailTab';
type Props = {}

const ServiceDetail: NextPageWithLayout = (props: Props) => {
    return (
        <div className="product-page product-version-1">

            <ServiceDetailMedia />
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