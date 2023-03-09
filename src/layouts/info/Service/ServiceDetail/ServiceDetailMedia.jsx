import Image from "next/image";
import product from '@/assets/images/content/product-img/product-1.png'
import Link from "next/link";
import avatar from "@/assets/images/avatar.png";
import Rating from "@/utils/get-star";


const listPackage = [
    {
        id: 1,
        name: 'Topic research'
    },
    {
        id: 2,
        name: 'SEO keywords'
    },
    {
        id: 3,
        name: 'SEO Keyword Research'
    },
    {
        id: 4,
        name: 'References & citations'
    },
    {
        id: 5,
        name: 'Data chart'
    },
    {
        id: 6,
        name: 'Revisions'
    }
]

const ServiceDetailMedia = () => {
    return (
        <>
            <div className="product">
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

                <div className="product-info product-seller ">
                    <h4>About The Seller</h4>
                    <div className="avatar-block">
                        <div className="avatar box-152">
                            {" "}
                            <Link href="/08-profile-page">
                                <Image src={avatar} alt="avatar" width={80} height={80} />
                            </Link>{" "}
                            <span className="verified">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#check-icon" />
                                </svg>
                            </span>
                        </div>
                        <div className="avatar-meta">
                            <div className="avatar-title">
                                <span className="gradient-text">
                                    {" "}
                                    <Link href="/08-profile-page">
                                        codehash_dev
                                    </Link>{" "}
                                </span>
                            </div>
                            <div className="avatar-meta">Web and Blockchain Developer</div>
                            <div className="avatar-meta mt-3">
                                <Rating rating="5" />
                            </div>
                            <div className="avatar-meta mt-5">
                                <button className="btn btn-wide btn-dark">Contact to me</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-seller-info">
                        <div className="placed-seller mt-3">
                            <div className="bid-placer">
                                <div className="bid-info">
                                    <div className="bid-title">
                                        <span className="gradient-text">
                                            From
                                        </span>
                                    </div>
                                    <div className="bid-date">Sri Lanka</div>
                                </div>
                            </div>
                            <div className="bid-box">
                                <div className="crypto-value">Member since</div>
                                <div className="currency-value">Jul 2022</div>
                            </div>
                        </div>
                        <div className="placed-seller mt-3">
                            <div className="bid-placer">
                                <div className="bid-info">
                                    <div className="bid-title">
                                        <span className="gradient-text">
                                            Avg. response time
                                        </span>
                                    </div>
                                    <div className="bid-date">1 hour</div>
                                </div>
                            </div>
                            <div className="bid-box">
                                <div className="crypto-value">Last delivery</div>
                                <div className="currency-value">J3 days</div>
                            </div>
                        </div>
                        <div className="placed-seller mt-3">
                            <div className="bid-placer">
                                <div className="bid-info">
                                    <div className="bid-title">
                                        <span className="gradient-text">
                                            Language
                                        </span>
                                    </div>
                                    <div className="bid-date">English</div>
                                </div>
                            </div>
                        </div>
                        <div className="placed-seller-description mt-3">
                            <span className="mt-3">Hello there ! I am Hashintha from Sri Lanka. I am a web based program developer and currently working on several nft projects. In fiverr I will give my clients an excellent service in nft, crypto and more related services in blockchain development.</span>
                        </div>
                    </div>
                </div>

                <div className="product-info product-seller" id="compare-package">
                    <h4>Compare package</h4>
                    <div className="collectors-box">
                        <table className="content-table border">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th className="package-row-label">Package</th>
                                    <th className="package-type-price">
                                        <div className="price-wrapper">
                                            <p className="price">$295</p>
                                        </div>
                                        <b className="type">Basic</b>
                                        <b className="title">Brief Composition</b>
                                    </th>
                                    <th className="package-type-price">
                                        <div className="price-wrapper">
                                            <p className="price">$30</p>
                                        </div>
                                        <b className="type">Standard</b>
                                        <b className="title">Longer composition</b>
                                    </th>
                                    <th className="package-type-price">
                                        <div className="price-wrapper">
                                            <p className="price">$45</p>
                                        </div>
                                        <b className="type">Premium</b>
                                        <b className="title">Extended Composition</b>
                                    </th>
                                </tr>
                                <tr className="description">
                                    <td className="package-row-label"></td>
                                    <td>This package includes a 500 proofread words with 1 revision and the file. SEO Keywords included.</td>
                                    <td>This package includes a 1000 proofread words with 3 revisions and the file. SEO Keywords included.</td>
                                    <td>This package includes a 1500 proofread words with 5 revisions and the file. SEO Keywords included.</td>
                                </tr>


                                {listPackage.map((value) => (
                                    <tr key={value.id}>
                                        <td className="package-row-label">
                                            <div className="tmELUJj P_h9XGC">
                                                <span className="vpfXdaJ">{value.name}</span>
                                            </div>
                                        </td>
                                        <td className="boolean-pricing-factor">
                                            <span className="nFghBOe pricing-factor-check-icon included" ariaHidden="true" style={{ width: '16px', height: '16px' }}>
                                                <svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </td>
                                        <td className="boolean-pricing-factor">
                                            <span class="nFghBOe pricing-factor-check-icon included" ariaHidden="true" style={{ width: '16px', height: '16px' }}>
                                                <svg className="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z">
                                                    </path>
                                                </svg>
                                            </span>

                                        </td>
                                        <td className="boolean-pricing-factor">
                                            <span className="nFghBOe pricing-factor-check-icon included" ariaHidden="true" style={{ width: '16px', height: '16px' }}>
                                                <svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </td>
                                    </tr>
                                ))}

                                <tr>
                                    <td className="package-row-label">
                                        <div className="tmELUJj P_h9XGC">
                                            <span className="vpfXdaJ">Revisions</span>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>5</td>
                                </tr>

                                <tr className="delivery-time">
                                    <td className="package-row-label">Delivery Time</td>
                                    <td>
                                        <div className="fake-radio-wrapper">
                                            <label className="fake-radio">
                                                <input type="radio" name="1" value="0" checked="0" />
                                                <span className="radio-img"></span>
                                                <span>3 days</span>
                                            </label>
                                            <label className="fake-radio">
                                                <input type="radio" name="1" value="1" />
                                                <span className="radio-img"></span>
                                                <span>1 day</span>
                                                <p className="faster-price">(+$20)</p>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="fake-radio-wrapper">
                                            <label className="fake-radio">
                                                <input type="radio" name="2" value="0" checked="0"/>
                                                <span className="radio-img"></span>
                                                <span>5 days</span>
                                            </label>
                                            <label className="fake-radio">
                                                <input type="radio" name="2" value="1" />
                                                <span className="radio-img"></span>
                                                <span>1 day</span>
                                                <p className="faster-price">(+$30)</p>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="fake-radio-wrapper">
                                            <label className="fake-radio">
                                                <input type="radio" name="3" value="0" checked="0"/>
                                                <span className="radio-img"></span>
                                                <span>7 days</span>
                                            </label>
                                            <label className="fake-radio">
                                                <input type="radio" name="3" value="1"/>
                                                <span className="radio-img"></span>
                                                <span>1 day</span>
                                                <p className="faster-price">(+$40)</p>
                                            </label>
                                        </div>
                                    </td>
                                </tr>


                                <tr className="select-package">
                                    <td className="package-row-label">Total</td>
                                    <td>
                                        <div className="price-wrapper">
                                            <p className="tbody-5">$5</p>
                                        </div>
                                        <button className="ZQi_S8t AOOSxop co-white btn-select-package bg-co-green-700" type="button">Select</button>
                                    </td>
                                    <td>
                                        <div className="price-wrapper">
                                            <p className="tbody-5">$15</p>
                                        </div>
                                        <button className="ZQi_S8t AOOSxop co-white btn-select-package bg-co-green-700" type="button">Select</button>
                                    </td>
                                    <td>
                                        <div className="price-wrapper">
                                            <p className="tbody-5">$30</p>
                                        </div>
                                        <button className="ZQi_S8t AOOSxop co-white btn-select-package bg-co-green-700" type="button">Select</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ServiceDetailMedia;
