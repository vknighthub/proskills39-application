import parse from 'html-react-parser';

const ServiceDetailInfo = ({data}) => {
    console.log(data)
    return (
        <>
            <div className="page-title-section">
                <h1>{data.servicename}</h1>
            </div>

            <div className="product-meta-section">
                <div className="product-meta-item">
                    <div className="label">Current price</div>
                    <div className="value">{data.price.v2p} v2p</div>
                    <div className="caption">{data.price.usd} U$D</div>
                </div>
                <div className="product-meta-item">
                    <div className="label">Edition</div>
                    <div className="value">{data.edition.bought}/{data.edition.total}</div>
                    <div className="caption">Tokens</div>
                </div>
            </div>
            <div className="product-description">
                <div className="small-title">About This Service</div>
                {parse(data.description)}
            </div>
            
        </>
    );
};

export default ServiceDetailInfo;
