import React from "react";
import "./style.scss"
import BackgroundTop from "../../images/AbstractDesign_2.png"
import {Tick} from "../../images/icons/tick";
export const Home = () => {
    return(
        <div className = "home">
            <img className = "home_background" src = {BackgroundTop} alt = ""/>
            <div className = "welcome">
                <div className = "welcome_title">
                    <div className = "tick">
                        <Tick/><p>No LLC Required, No Credit Check.</p>
                    </div>
                    <div className = "title">
                        <h1>Welcome to NAU Bank<br/>Empowering Your <span>Financial<br/>Journey</span></h1>
                        <p>At YourBank, our mission is to provide comprehensive banking solutions that empower
                            individuals and businesses to achieve their financial goals. We are committed to
                            delivering personalized and innovative services that prioritize our customers' needs.
                        </p>
                        <button>Open Account</button>
                    </div>
                    <div className = "">

                    </div>
                </div>
            </div>
        </div>
    );
}