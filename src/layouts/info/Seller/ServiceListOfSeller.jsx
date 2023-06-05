import Paggination from '@/components/styles/Paggination';
import ServiceList from '../Service/ServiceList';
import { useEffect, useState } from 'react';
import { dblock } from '@/utils/util';


const ServiceListOfSeller = ({ data }) => {
    const [filterData, setFilterData] = useState(data && data);
    let sort = 8;
    const [active, setActive] = useState(0);



    return (
        <div className="primary-content-area container content-padding">
            <div className="page-title-section">
                <h2>
                    <span className="gradient-text">Explore</span> Service
                </h2>
            </div>
            <div className="featured-box grid-4-columns">
                {data.map((serviceData, index) => (
                    <div key={index} className={`${dblock(active, index, sort)} `} >
                        <ServiceList service={serviceData} />
                    </div>
                ))}
            </div>

            <Paggination
                active={active}
                setActive={setActive}
                sort={sort}
                length={filterData && filterData.length}
                className="flex-center"
            />

        </div>
    )
}

export default ServiceListOfSeller