import React, {useState} from "react";
import "./style.scss"
import {ProductNeeds} from "./ProductNeeds";
import Diplomat from "../../images/icons/Diplomat.svg"
import SavingBox from "../../images/icons/SavingBox.svg"
import Camera from "../../images/icons/Camera.svg"
import AccountManagement from "../../images/icons/AccountManagment.svg"
import Payment from "../../images/icons/Payment.svg"
import Analytics from "../../images/icons/Analytics.svg"
export const OurProducts = () => {
    const[forIndividuals, forBusiness] = useState(true);
    const[Individuals, Business] = useState(true);
    const handleClick = () => {
        forBusiness(!forIndividuals);
        Business(!Individuals);
    }
    return (
        <div className = "our_products">
            <div className="our_products__top">
                <div className="title">
                    <h1>Our <span>Products</span></h1>
                    <p>Discover a range of comprehensive and customizable banking products at NAU Bank, designed to suit
                        your unique financial needs and aspirations
                    </p>
                </div>
                <div className="switcher">
                    <button className={forIndividuals ? "active" : ""} onClick={handleClick}>For Individuals</button>
                    <button className={Individuals ? "" : "active"} onClick={handleClick}>For Business</button>
                </div>
            </div>
            <div className={forIndividuals?"products_direction":"hide"}>
                <ProductNeeds
                    image={Diplomat}
                    title={"Checking Accounts"}
                    description={"Enjoy easy and convenient access to your funds with our range of checking account " +
                        "options. Benefit from features such as online and mobile banking, debit cards, and free ATM" +
                        " access."}
                />
                <ProductNeeds
                    image={SavingBox}
                    title={"Savings Accounts"}
                    description={"Build your savings with our competitive interest rates and flexible savings account" +
                        " options. Whether you're saving for a specific goal or want to grow your wealth over time, we" +
                        " have the right account for you."}
                />
                <ProductNeeds
                    image={Camera}
                    title={"Loans and Mortgages"}
                    description={"Realize your dreams with our flexible loan and mortgage options. From personal loans" +
                        " to home mortgages, our experienced loan officers are here to guide you through the " +
                        "application process and help you secure the funds you need."}
                />
            </div>
            <div className={forIndividuals?"hide":"products_direction"}>
                <ProductNeeds
                    image={AccountManagement}
                    title = {"Account management"}
                    description={"Business customers can view and manage various corporate accounts right " +
                        "from the app. This includes viewing account status, transaction history, making " +
                        "payments, and more."}
                />
                <ProductNeeds
                    image={Payment}
                    title={"Payments and transfers"}
                    description={" Functionality for making payments and transfers between accounts, " +
                        "as well as to external counterparties. This can include the ability to create" +
                        " and edit payment orders, bulk payments, payments using QR codes, etc."}
                />
                <ProductNeeds
                    image={Analytics}
                    title={"Reporting and analytics"}
                    description={"Tools for generating reports, analyzing financial data, visualizing" +
                        " financial indicators, and performing other analysis to help business " +
                        "customers better understand their financial position and make informed " +
                        "decisions."}
                />
            </div>
        </div>
    );
}
