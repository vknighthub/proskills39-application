import Link from "next/link";
import { useState } from "react";


const ServiceDetailTab = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const activeTabNav = (value) => (value === activeTab ? "active" : ""),
        activeContent = (value) => (value === activeTab ? "active" : "");

    const handleClickScroll = () => {
        const element = document.getElementById('compare-package');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="tabs-block ">
                <ul className="tabs-list ">
                    <li
                        className={activeTabNav("tab1")}
                        onClick={() => setActiveTab("tab1")}
                    >
                        <a>Basic</a>
                    </li>
                    <li
                        className={activeTabNav("tab2")}
                        onClick={() => setActiveTab("tab2")}
                    >
                        <a>Standard</a>
                    </li>
                    <li
                        className={activeTabNav("tab3")}
                        onClick={() => setActiveTab("tab3")}
                    >
                        <a>Premium</a>
                    </li>
                </ul>
                <div id="tab1" className={`tab ${activeContent("tab1")}`}>
                    <div className="tab-content">
                        <div className="placed-bid">
                            <div className="bid-placer">
                                <div className="bid-info">
                                    <div className="bid-title">
                                        <span className="gradient-text">
                                            BASIC DOFOLLOW
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="bid-box">
                                <div className="crypto-value">2.31 v2P</div>
                            </div>
                        </div>
                        <div className="bid-title">I will provide 1 Link Insertion/Niche Edit on DA-65+ Website</div>

                        <div className="mt-5">
                            <div className="bid-placer">
                                <div className="avatar box-42">
                                    <svg className="crumina-icon bullet-icon">
                                        <use xlinkHref="#clock-icon" />
                                    </svg>
                                </div>
                                <div className="bid-info">
                                    <div className="bid-title">
                                        <span className="gradient-text">
                                            3 Days Delivery
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="place-bid">
                                <button className="btn btn-wide btn-dark w-100">Continue (2.31 v2P)</button>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <Link href="#compare-package" onClick={()=> handleClickScroll()} className="green " >Compare package</Link>
                        </div>
                    </div>
                </div>

                <div id="tab2" className={`tab ${activeContent("tab2")}`}>
                    <div className="tab-content">
                        <div className="placed-bid">
                            <div className="bid-placer">
                                <div className="bid-info">
                                    <div className="bid-title">
                                        <span className="gradient-text">
                                            STANDARD DOFOLLOW
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="bid-box">
                                <div className="crypto-value">45 v2P</div>
                            </div>
                        </div>
                        <div className="bid-title">I will provide 3 Link Insertions/Niche Edits on 3 DA-65+ Websites            </div>

                        <div className="mt-5">
                            <div className="bid-placer">
                                <div className="avatar box-42">
                                    <svg className="crumina-icon bullet-icon">
                                        <use xlinkHref="#clock-icon" />
                                    </svg>
                                </div>
                                <div className="bid-info">
                                    <div className="bid-title">
                                        <span className="gradient-text">
                                            3 Days Delivery
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="place-bid">
                                <button className="btn btn-wide btn-dark w-100">Continue (45 v2P)</button>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <Link href="#" className="green " >Compare package</Link>
                        </div>
                    </div>
                </div>

                <div id="tab3" className={`tab ${activeContent("tab3")}`}>
                    <div className="tab-content">
                        <div className="placed-bid">
                            <div className="bid-placer">
                                <div className="bid-info">
                                    <div className="bid-title">
                                        <span className="gradient-text">
                                            PREMIUM DOFOLLOW
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="bid-box">
                                <div className="crypto-value">100 v2P</div>
                            </div>
                        </div>
                        <div className="bid-title">I will provide 7 Link Insertions/Niche Edits on 7 DA-65+ Websites</div>

                        <div className="mt-5">
                            <div className="bid-placer">
                                <div className="avatar box-42">
                                    <svg className="crumina-icon bullet-icon">
                                        <use xlinkHref="#clock-icon" />
                                    </svg>
                                </div>
                                <div className="bid-info">
                                    <div className="bid-title">
                                        <span className="gradient-text">
                                            4 Days Delivery
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="place-bid">
                                <button className="btn btn-wide btn-dark w-100">Continue (100 v2P)</button>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <Link href="#" className="green " >Compare package</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="related-section">
                <div className="section-title-wrapper">
                    <button className="btn btn-wide btn-fuchsia w-100">Contact to Seller</button>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailTab;
