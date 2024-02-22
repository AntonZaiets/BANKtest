import React from "react";
import "./style.scss"
import MoneyBag from "../../images/icons/MoneyBag.svg"
import Hands from "../../images/icons/Hands.svg"
import Bank from "../../images/icons/Bank.svg"
import Book from "../../images/icons/Book.svg"
export const UseCases = () => {
    return(
        <div className = "use_cases">
            <h1>Use Cases</h1>
            <p>
                At YourBank, we cater to the diverse needs of individuals and businesses
                alike, offering a wide range of financial solutions
            </p>
            <div className = "use_cases_icons">
                <div className = "icon_block">
                    <div className = "icon">
                        <img src = {MoneyBag} alt = ""/>
                    </div>
                    <div className= "title">
                        <p>Managing Personal Finances</p>
                    </div>
                </div>
                <div className = "icon_block">
                    <div className="icon">
                        <img src={Hands} alt=""/>
                    </div>
                    <div className= "title">
                        <p>Savings for the Future</p>
                    </div>
                </div>
                <div className = "icon_block">
                    <div className="icon">
                        <img src={Bank} alt=""/>
                    </div>
                    <div className= "title">
                        <p>Homeownership</p>
                    </div>
                </div>
                <div className = "icon_block">
                    <div className="icon">
                        <img src={Book} alt=""/>
                    </div>
                    <div className= "title">
                        <p>Education Funding</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
