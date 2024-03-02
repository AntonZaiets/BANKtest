import React from "react";
import "./styles.scss"
import CareersImage from "../../images/Careers.png";
import AbstractImage from "../../images/AbstractDesign.png";
export const Careers = () => {
    return(
        <div className="careers">
            <div className="about_excellence">
                <div className="about_excellence__description">
                    <h1>Welcome to <span>NAU Bank</span><br/>Careers!</h1>
                    <p>
                        <span>
                            Join our team and embark on a rewarding journey in the banking industry. At YourBank,
                            we are committed to fostering a culture of excellence and providing opportunities for
                            professional growth. With a focus on innovation, customer service, and integrity, we
                            strive to make a positive impact in the lives of our customers and communities. Join us
                            today and be a part of our mission to shape the future of banking.
                        </span>
                    </p>
                </div>
                <img className="excellence_img" src={CareersImage} alt=""/>
                <img className="excellence_abstract" src={AbstractImage} alt=""/>
            </div>

        </div>
    );
}