import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// create [1,2,3,4,5] once
const starArray = [...Array(5).keys()].map(i => i + 1);

const Rating = ({ rating }) => 
    starArray.map(i => ( // use many times
        <FontAwesomeIcon
            key={i}
            icon={faStar}
            color={rating >= i ? "orange" : "lightgrey"}
        />
    ));

export default Rating;