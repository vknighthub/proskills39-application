import { useSubmitDeal } from "@/data/service";
import Link from "next/link";
import { useState } from "react";


const ServiceDetailTab = ({ data }) => {
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

    const { mutate: SubmitDeal } = useSubmitDeal()


    const ProcessOffer = (serviceid) => {
        SubmitDeal(
            {
                serviceid: serviceid,
            }
        )
    }


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

                {data.map((tabservice, index) => (
                    <div id={`tab${index + 1}`} className={`tab ${activeContent(`tab${index + 1}`)}`} key={tabservice.id}>
                        <div className="tab-content">
                            <div className="placed-bid">
                                <div className="bid-placer">
                                    <div className="bid-info">
                                        <div className="bid-title">
                                            <span className="gradient-text">
                                                {tabservice.name.toUpperCase()} DOFOLLOW
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bid-box">
                                    <div className="crypto-value">v2p {tabservice.price}</div>
                                </div>
                            </div>
                            <div className="bid-title">{tabservice.promise}</div>

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
                                                {tabservice.numberofdaydelivery} Days Delivery
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="place-bid">
                                    <button onClick={() => ProcessOffer(tabservice.id)} className="btn btn-wide btn-dark w-100">{`Continue with (v2p ${tabservice.price})`}</button>
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <Link href="#compare-package" onClick={() => handleClickScroll()} className="green " >Compare package</Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="related-section">
                <div className="section-title-wrapper">
                    <button className="btn btn-wide btn-fuchsia w-100" disable>Contact to Seller (Comming soon)</button>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailTab;
