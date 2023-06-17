import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';

const ServiceDetailInfo = ({ data }) => {

    const { t } = useTranslation('common')

    return (
        <>
            <div className="page-title-section">
                <h1>{data.servicename}</h1>
            </div>

            <div className="product-meta-section">
                <div className="product-meta-item">
                    <div className="label">{t('text-current-price')}</div>
                    <div className="value">{data.price.v2p} v2p</div>
                    <div className="caption">{data.price.usd} U$D</div>
                </div>
            </div>
            <div className="product-description">
                <div className="small-title">{t('text-about-this-service')}</div>
                {parse(data.description)}
            </div>

        </>
    );
};

export default ServiceDetailInfo;
