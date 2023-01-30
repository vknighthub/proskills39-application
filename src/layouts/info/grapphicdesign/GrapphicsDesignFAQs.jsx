import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion'

const GrapphicsDesignFAQs = () => {
    const [activeFaq, setActiveFaq] = useState("0");
    const onClick = (value) =>
        activeFaq === value ? setActiveFaq("") : setActiveFaq(value),
        classNameChange = (value) => (value === activeFaq ? "" : "show");


    return (

        <Accordion defaultActiveKey={activeFaq} className="accordion">
            <div className="accordion-card">
                <div className="card-header">
                    
                </div>

            </div>

        </Accordion>
    );
};
export default GrapphicsDesignFAQs;
