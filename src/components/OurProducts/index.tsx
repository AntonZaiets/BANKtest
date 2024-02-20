import React from "react";
import "./style.scss"
import {ProductNeeds} from "./ProductNeeds";
import Diplomat from "../../images/icons/Diplomat.svg"
import SavingBox from "../../images/icons/SavingBox.svg"
import Camera from "../../images/icons/Camera.svg"
import {Switcher} from "../Switcher";
export const OurProducts = () => {
    return (
        <div className = "our_products">
            <div className = "our_products__top">
                <div className = "title">
                    <h1>Our <span>Products</span></h1>
                    <p>Discover a range of comprehensive and customizable banking products at NAU Bank, designed to suit
                        your unique financial needs and aspirations
                    </p>
                </div>
                <Switcher/>
            </div>
            <div className = "products_direction">
                <ProductNeeds
                    image={Diplomat}
                    title = {"Checking Accounts"}
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
        </div>
    );
}
