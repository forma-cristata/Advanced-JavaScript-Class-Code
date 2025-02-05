// font-awesome
    // icon library - good alternative to bootstrap icons.
    // Library of SVGs.

import {FaStar} from "react-icons/fa6";
import {useState} from "react";
import styles from "./StarRating.module.css";

export default function StarRating({style={}, totalStars = 5})
{
    const [selectedStars, setSelectedStars] = useState(3); // initial state of 3 stars


    /*return [
        <FaStar color={"red"} />,
        <FaStar color={"red"} />,
        <FaStar color={"red"} />,
        <FaStar color={"grey"} />,
        <FaStar color={"grey"} />
    ]

    replaced with \/\/\/\/\/\/*/
    return(
        <div style={{padding: "1rem", ...style}}>
            {Array.from({length: totalStars}).map((_, i) => (
                <Star key={i}
                      selected={selectedStars > i}
                      onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    )
}

// renders individual stars
function Star({ selected = false, onSelect = f => f})//fake function
{
    return (
        <FaStar className={styles.star}
                color={selected ? "red" : "grey"}
                onClick={onSelect} />
    )
}