import React from "react";
import "./styles.scss"
import Analytics from "../../images/icons/Analytics_2.svg"
import Diplomat from "../../images/icons/Diplomat.svg"
import Lampochka from "../../images/icons/Lampochka.svg"
import Korobki from "../../images/icons/Korobki.svg"
export const OurBenefits = () => {
    return(
        <div className="our_benefits">
            <div className="our_benefits__top">
                <h1>Our <span>Benefits</span></h1>
                <p>
                    At NAU Bank, we value our employees and are dedicated to their well-being and success. We offer a
                    comprehensive range of benefits designed to support their personal and professional growth.
                </p>
            </div>
            <div className="benefits">
                <div className="benefit">
                    <div className="benefit_title">
                        <img src={Analytics} alt=""/>
                        <h1>Competitive Compensation</h1>
                    </div>
                    <div className="benefit_description">
                        <p>
                            We provide a competitive salary package that recognizes the skills and expertise of our
                            employees. YourBank believes in rewarding exceptional performance and offering
                            opportunities for financial growth.
                        </p>
                    </div>
                </div>
                <div className="benefit">
                    <div className="benefit_title">
                        <img src={Lampochka} alt=""/>
                        <h1>Health and Wellness</h1>
                    </div>
                    <div className="benefit_description">
                        <p>
                            We prioritize the health and well-being of our employees by providing comprehensive
                            medical, dental, and vision insurance plans. We also offer wellness programs,
                            gym memberships, and resources to support a healthy lifestyle.
                        </p>
                    </div>
                </div>
                <div className="benefit">
                    <div className="benefit_title">
                        <img src={Diplomat} alt=""/>
                        <h1>Retirement Planning</h1>
                    </div>
                    <div className="benefit_description">
                        <p>
                            YourBank is committed to helping employees plan for their future. We offer a retirement
                            savings plan with a generous employer match to help them build a secure financial
                            foundation for the long term.
                        </p>
                    </div>
                </div>
                <div className="benefit">
                    <div className="benefit_title">
                        <img src={Korobki} alt=""/>
                        <h1>Work-life Balance</h1>
                    </div>
                    <div className="benefit_description">
                        <p>
                            We understand the importance of maintaining a healthy work-life balance. YourBank offers
                            flexible work arrangements, paid time off, parental leave, and other programs that support
                            employees in managing their personal and professional commitments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}