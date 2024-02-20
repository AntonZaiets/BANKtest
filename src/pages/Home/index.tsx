import React from "react";
import "./style.scss"
import BackgroundTop from "../../images/AbstractDesign_2.png"
import {Tick} from "../../images/icons/tick";
import Transactions from "../../images/Transactions.png"
import SupportedCurrency from "../../images/SupportedCurrency.png"
import MonthlyIncome from "../../images/MonthlyIncome.png"
import Convertor from "../../components/Converter";
import {OurProducts} from "../../components/OurProducts";
export const Home = () => {
    return(
        <div className = "home">
            <img className = "home_background" src = {BackgroundTop} alt = ""/>
            <div className="welcome">
                <div className="welcome_title">
                    <div className="tick">
                        <Tick/><p>No LLC Required, No Credit Check.</p>
                    </div>
                    <div className="title">
                        <h1>Welcome to NAU Bank<br/>Empowering Your <span>Financial<br/>Journey</span></h1>
                        <p>At NAU Bank, our mission is to provide comprehensive banking solutions that empower
                            individuals and businesses to achieve their financial goals. We are committed to
                            delivering personalized and innovative services that prioritize our customers' needs.
                        </p>
                        <button>Open Account</button>
                    </div>
                </div>
                <div className="welcome_convertor">
                    <div className="welcome_transactions">
                        <img className = "monthly_income" src = {MonthlyIncome} alt = ""/>
                        <p>Your Transactions</p>
                        <img className="transactins" src={Transactions} alt=""/>
                        <div className="money_exchange">
                            <p>Money Exchange</p>
                            <Convertor/>
                            <div className = "supported_currency">
                                <p>Supported Currency</p>
                                <img src = {SupportedCurrency} alt = ""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurProducts/>
        </div>
    );
}