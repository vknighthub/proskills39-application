import { useEffect, useState } from "react";
import Challenges from '@/layouts/info/Challenges'
import { ReactSearchAutocomplete } from "react-search-autocomplete"

const CatalystVoterTool = ({ data

}) => {

    const challengelist = data.challenge.result.data

    const [searchTerm, setSearchTerm] = useState(challengelist);

    const handleOnSearch = (string, results) => {
        if (string === '') {
            setSearchTerm(challengelist)
        } else {
            setSearchTerm(results)
        }
    };

    const handleOnSelect = (item) => {
        searchTerm[0] = item
    }

    return (

        <div className="primary-content-area container content-padding">
            <div className="page-title-section">
                <h2>
                    <span className="gradient-text">Catalyst</span> Voter Tool
                </h2>

            </div>

            <div className="searchbox pb-5">
                <div style={{ width: '100%', height: '100%' }}>
                    <ReactSearchAutocomplete
                        items={challengelist}
                        onSearch={handleOnSearch}
                        onSelect={handleOnSelect}
                        styling={{ zIndex: 10 }} // To display it on top of the search box below
                        autoFocus
                        fuseOptions={{ keys: ["challengeName"] }}
                        resultStringKeyName="challengeName"
                        placeholder="Enter your search here..."
                    />
                </div>
            </div>

            <Challenges data={searchTerm} />

        </div>
    )
}

export default CatalystVoterTool
