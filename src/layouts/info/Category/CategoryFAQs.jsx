import React, { useState } from "react";
import { Accordion } from 'react-bootstrap'

const CategoryFAQs = ({ data }) => {

    const [activeFaq, setActiveFaq] = useState("1st");
    const onClick = (value) =>
        activeFaq === value ? setActiveFaq("") : setActiveFaq(value),
        classNameChange = (value) => (value === activeFaq ? "" : "show");


    return (
        <div className="primary-content-area section-medium content-padding">
            <div className="page-title text-center">
                <h2>
                    <span className="gradient-text">{data.name}</span> FAQs
                </h2>
            </div>
            <Accordion defaultActiveKey={activeFaq} className="accordion">
                {data && data.listFaq && data.listFaq.map((faq) => (
                    <div className="accordion-card" key={faq.id}>
                        <div className="card-header">
                            <Accordion.Toggle
                                onClick={() => onClick(faq.order)}
                                as={"div"}
                                eventKey={faq.order}
                                className="card-button"
                            >
                                <div className="card-title">
                                    {faq.question}
                                </div>
                                <div className="icon-box">
                                    <svg
                                        className={`crumina-icon plus-icon ${classNameChange(
                                            faq.order
                                        )}`}
                                    >
                                        <use xlinkHref="#minus-icon" />
                                    </svg>
                                    <svg className="crumina-icon minus-icon">
                                        <use xlinkHref="#minus-icon" />
                                    </svg>
                                </div>
                            </Accordion.Toggle>
                        </div>
                        <Accordion.Collapse eventKey={faq.order} className="card-body">
                            <div className="card-info">
                                {faq.anwser}
                            </div>
                        </Accordion.Collapse>
                    </div>
                ))}
            </Accordion>
        </div>
    );
};
export default CategoryFAQs;
