
const ServiceDetailInfo = () => {
    return (
        <>
            <div className="page-title-section">
                <h1>Breathing Nature</h1>
            </div>

            <div className="product-meta-section">
                <div className="product-meta-item">
                    <div className="label">Current bid</div>
                    <div className="value">2.31 ETH</div>
                    <div className="caption">125.230 U$D</div>
                </div>
                <div className="product-meta-item">
                    <div className="label">Edition</div>
                    <div className="value">01/40</div>
                    <div className="caption">Tokens</div>
                </div>
                <div className="product-meta-item">
                    <div className="label">AUCTION ENDING IN</div>
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
                <div className="small-title">About This Gig</div>
                <p>
                    Hello there!

                    I am an experienced web developer and currently working on some nft projects.In this gig I will develop nft minting website, which let users to mint nfts from your collection.
                </p>
                <p>
                    What does it mean? Biomechanics is the study of the structure,
                    function and motion of the mechanical aspects of biological systems,
                    at any level from whole organisms to organs, cells and cell
                    organelles, using the methods of mechanics. Biomechanics is a branch
                    of biophysics.
                </p>
            </div>
            <div className="bidding-section">
                <div className="place-bid">
                    <button className="btn btn-wide btn-dark">Place a Bid!</button>
                </div>
                <div className="product-fav-counter">
                    <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                    </svg>
                    <span className="count">105</span>
                </div>
                <div className="more-link">
                    {" "}
                    <a href="#">
                        <svg className="crumina-icon">
                            <use xlinkHref="#dots-icon" />
                        </svg>
                    </a>
                </div>
                <div className="social-share-box">
                    <div className="share-icons">
                        {" "}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#link-icon" />
                            </svg>
                        </a>{" "}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#facebook-icon" />
                            </svg>
                        </a>{" "}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon" />
                            </svg>
                        </a>
                        <a href="">
                            <svg className="crumina-icon">
                                <use xlinkHref="#instagram-icon" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailInfo;
