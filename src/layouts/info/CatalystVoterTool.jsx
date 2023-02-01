import { useState } from "react";
import Challenges from '@/layouts/info/Challenges'

const CatalystVoterTool = ({data

}) => {
    const [activeToggle, setActiveToggle] = useState(false);
    const [active, setActive] = useState("Fund 9");
    const challengelist = data.challenge.result.data

    return (

        <div className="primary-content-area container content-padding">
            <div className="page-title-section">
                <h2>
                    <span className="gradient-text">Catalyst</span> Voter Tool
                </h2>

            </div>

            <div className="searchbox pb-5">
                <form
                    method="get"
                    className="main-search"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        className="main-search-params"
                        type="hidden"
                        name="params"
                        defaultValue="all"
                    />
                    <button
                        className={`search-params ${activeToggle ? "active" : ""}`}
                        onClick={() => setActiveToggle(!activeToggle)}
                    >
                        <span className="search-param-title">{active}</span>{" "}
                        <svg className="crumina-icon">
                            <use xlinkHref="#arrow-down-icon" />
                        </svg>
                    </button>
                    <ul className="search-dropdown">
                        <li
                            data-param="Fund 9"
                            onClick={() => {
                                setActiveToggle(false);
                                setActive("Fund 9");
                            }}
                        >
                            Fund 9
                        </li>
                    </ul>
                    <input
                        type="text"
                        className="search-input"
                        name="head-search"
                        id="head-search"
                        placeholder="Enter your search here..."
                    />
                    <button className="search-button">
                        <svg className="crumina-icon">
                            <use xlinkHref="#search-icon" />
                        </svg>
                    </button>
                </form>
            </div>

            <Challenges data = {challengelist} />

        </div>
    )
}

export default CatalystVoterTool
