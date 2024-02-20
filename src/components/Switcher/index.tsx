import React, {useState} from "react";
import "./style.scss"

export const Switcher = () => {
    const[forInividuals, forBusiness] = useState(true);
    const[Inividuals, Business] = useState(true);
    const handleClick = () => {
        forBusiness(!forInividuals);
        Business(!Inividuals);
    }
    return (
        <div className = "switcher">
            <button className ={forInividuals?"active":""} onClick={handleClick}>For Individuals</button>
            <button className ={Inividuals?"":"active"} onClick={handleClick}>For Business</button>
        </div>
    );
}