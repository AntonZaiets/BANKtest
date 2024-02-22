import React, {useState} from "react";
import "./style.scss"

export const Switcher = () => {
    const[forIndividuals, forBusiness] = useState(true);
    const[Individuals, Business] = useState(true);
    const handleClick = () => {
        forBusiness(!forIndividuals);
        Business(!Individuals);
    }
    return (
        <div className = "switcher">
            <button className ={forIndividuals?"active":""} onClick={handleClick}>For Individuals</button>
            <button className ={Individuals?"":"active"} onClick={handleClick}>For Business</button>
        </div>
    );
}