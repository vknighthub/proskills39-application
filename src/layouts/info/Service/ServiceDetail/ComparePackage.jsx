import React from 'react'

const ComparePackage = ({ data, setPrice, setPackages }) => {

    const handleChoicePackage = param => event => {
        event.preventDefault();
        setPrice({
            v2p: param.price.v2p,
            usd: param.price.usd
        })
        setPackages(param.id)
        const element = document.getElementById('product-info');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
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
                            {data.totalprice.map((value) => (
                                <th className="package-type-price" key={value.id}>
                                    <div className="price-wrapper">
                                        <p className="price">v2p {value.price}</p>
                                    </div>
                                    <b className="type">{value.id}</b>
                                </th>
                            ))}
                        </tr>
                        <tr className="description">
                            <td className="package-row-label"></td>
                            {data.promise.map((value) => (
                                <td key={value.id}>{value.name}</td>
                            ))}
                        </tr>

                        {data.listcompare && data.listcompare?.map((value) => (
                            <tr key={value.id}>
                                <td className="package-row-label">
                                    <div className="tmELUJj P_h9XGC">
                                        <span className="vpfXdaJ">{value.name}</span>
                                    </div>
                                </td>
                                {value.visibility?.map((visible, index) => (
                                    <td className="boolean-pricing-factor" key={index}>
                                        <span className={`nFghBOe pricing-factor-check-icon ${visible.value === 1 ? "included" : "not-included"}`} ariaHidden="true" style={{ width: '16px', height: '16px' }}>
                                            <svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z">
                                                </path>
                                            </svg>
                                        </span>
                                    </td>
                                ))}
                            </tr>
                        ))}

                        <tr className="delivery-time">
                            <td className="package-row-label">Delivery Time</td>
                            {data.deliverytime.map((time) => (
                                <td key={time.id}>
                                    <div className="fake-radio-wrapper">
                                        <label className="fake-radio">
                                            <span className="radio-img"></span>
                                            <span>{time.day} days</span>
                                        </label>
                                        {/* <label className="fake-radio">
                                        <input type="radio" name={time.id} value={time.fastday} />
                                        <span className="radio-img"></span>
                                        <span>{time.fastday} day</span>
                                        <p className="faster-price">(+{time.pricefaster}) v2p</p>
                                    </label> */}
                                    </div>
                                </td>
                            ))}
                        </tr>


                        <tr className="select-package">
                            <td className="package-row-label">Total</td>
                            {data.totalprice.map((price) => (
                                <td key={price.id}>
                                    <div className="price-wrapper">
                                        <p className="tbody-5">v2p {price.price}</p>
                                    </div>
                                    <button
                                        className="ZQi_S8t AOOSxop co-white btn-select-package bg-co-green-700"
                                        onClick={handleChoicePackage(price)}
                                    >
                                        Select
                                    </button>
                                </td>
                            ))}
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ComparePackage