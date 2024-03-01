import React from "react";
import "./style.scss"
import BackgroundTop from "../../images/AbstractDesign_2.png"
import {Tick} from "../../images/icons/tick";
import Transactions from "../../images/Transactions.png"
import SupportedCurrency from "../../images/SupportedCurrency.png"
import MonthlyIncome from "../../images/MonthlyIncome.png"
import Convertor from "../../components/Converter";
import {OurProducts} from "../../components/OurProducts";
import {UseCases} from "../../components/UseCases";
import {OurFeatures} from "../../components/OurFeatures";
import {Questions} from "../../components/Questions";
import {ReviewsSlider} from "../../components/ReviewsSlider";
import {Banner} from "../../components/Banner";
export const Home = () => {
    return(
        <div className="home">
            <img className="home_background" src={BackgroundTop} alt=""/>
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
                        <img className="monthly_income" src={MonthlyIncome} alt=""/>
                        <p>Your Transactions</p>
                        <img className="transactins" src={Transactions} alt=""/>
                        <div className="money_exchange">
                            <p>Money Exchange</p>
                            <Convertor/>
                            <div className="supported_currency">
                                <p>Supported Currency</p>
                                <img src={SupportedCurrency} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurProducts/>
            <UseCases/>
            <div className="test">
                <h1 style={{color: "#FFFFFF", fontSize: "3vw"}}>Our <span style={{color: "#CAFF33"}}>Features</span>
                </h1>
                <p style={{color: "#B3B3B3", fontSize: "1.3vw"}}>
                    Experience a host of powerful features at YourBank, including seamless online banking, secure
                    transactions, and personalized financial insights, all designed to enhance your banking experience
                </p>
                <OurFeatures/>
            </div>
            <h1
                style={{color: "#FFFFFF", fontSize: "3vw"}}>
                <span style={{color: "#CAFF33"}}>Frequently </span>
                Asked Questions
            </h1>
            <p style={{color: "#B3B3B3", fontSize: "1.3vw"}}>
                Still you have any questions? Contact our Team via support@yourbank.com
            </p>
            <Questions/>
            <ReviewsSlider/>
            <Banner/>
        </div>
    );
}