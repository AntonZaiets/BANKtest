import React from "react";
import "./style.scss"
import MoneyBag from "../../images/icons/MoneyBag.svg"
import Hands from "../../images/icons/Hands.svg"
import Bank from "../../images/icons/Bank.svg"
import Book from "../../images/icons/Book.svg"
import Towers from "../../images/icons/Towers.svg"
import Camera from "../../images/icons/Camera.svg"
import Analytics from "../../images/icons/Analytics.svg"
import Coin from "../../images/icons/Coin.svg"
import {UseCase} from "./UseCase";

export const UseCases = () => {
    return(
        <div style = {{margin: "100px 0"}}>
            <h1 style = {{color: "#CAFF33"}}>Use Cases</h1>
            <p style = {{color: "#B3B3B3"}}>
                At NAU Bank, we cater to the diverse needs of individuals and business alike,
                offering a wide range of financial solutions
            </p>
            <UseCase
                firstSVG={MoneyBag}
                secondSVG={Hands}
                thirdSVG={Bank}
                fourthSVG={Book}
                firstTitle={"Managing Personal Finances"}
                secondTitle={"Savings for the Future"}
                thirdTitle={"Homeownership"}
                fourthTitle={"Education Funding"}
                head={"For Individuals"}
                mainDescription={"For individuals, our mortgage services pave the way to\n" +
                    "                            homeownership, and our flexible personal loans provide\n" +
                    "                            vital support during various life milestones. We also\n" +
                    "                            prioritize retirement planning, ensuring a financially\n" +
                    "                            secure future for our customers"}
                firstPercent={"78%"}
                secondPercent={"63%"}
                thirdPercent={"91%"}
                firstDescription={"Secure Retirement Planning"}
                secondDescription={"Manageable Debt Consolidation"}
                thirdDescription={"Reducing financial burdens"}
            />
            <UseCase
                style={{flexDirection: "row-reverse", marginTop: "30px"}}
                firstSVG={Towers}
                secondSVG={Camera}
                thirdSVG={Analytics}
                fourthSVG={Coin}
                firstTitle={"Startups and Entrepreneurs"}
                secondTitle={"Cash Flow Management"}
                thirdTitle={"Business Expansion"}
                fourthTitle={"Payment Solutions"}
                head={"For Business"}
                mainDescription={" For businesses, we empower growth with working capital solutions" +
                    " that optimize cash flow, and our tailored financing options fuel business" +
                    " expansion. Whatever your financial aspirations, YourBank is committed to" +
                    " providing the right tools and support to achieve them"}
                firstPercent={"65%"}
                secondPercent={"70%"}
                thirdPercent={"45%"}
                firstDescription={"Cash Flow Management"}
                secondDescription={"Drive Business Expansion"}
                thirdDescription={"Streamline payroll processing"}
                />
        </div>
    );
}
