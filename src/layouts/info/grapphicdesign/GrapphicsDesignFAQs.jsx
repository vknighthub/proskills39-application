import React, { useState } from "react";
import { Accordion } from 'react-bootstrap'

const GrapphicsDesignFAQs = ({ faqs }) => {
    const [activeFaq, setActiveFaq] = useState("1st");
    const onClick = (value) =>
        activeFaq === value ? setActiveFaq("") : setActiveFaq(value),
        classNameChange = (value) => (value === activeFaq ? "" : "show");


    return (

        <Accordion defaultActiveKey={activeFaq} className="accordion">
            {faqs && faqs.map((faq) => (
                <div className="accordion-card" key={faq.id}>
                    <div className="card-header">
                        <Accordion.Toggle
                            onClick={() => onClick(faqs.order)}
                            as={"div"}
                            eventKey={faqs.order}
                            className="card-button"
                        >
                            <div className="card-title">
                                {faq.question}
                            </div>
                            <div className="icon-box">
                                <svg
                                    className={`crumina-icon plus-icon ${classNameChange(
                                        faqs.order
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
                    <Accordion.Collapse eventKey={faqs.order} className="card-body">
                        <div className="card-info">
                            {faq.anwser}
                        </div>
                    </Accordion.Collapse>
                </div>
            ))}
        </Accordion>
    );
};
export default GrapphicsDesignFAQs;
