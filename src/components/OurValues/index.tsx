import React from "react";
import "./style.scss"
export const OurValues = () => {
    return(
        <div className = "our_values">
            <div className = "our_values__top">
                <h1>Our <span>Values</span></h1>
                <p>
                    At NAU Bank, our values form the foundation of our organization and guide our actions.
                    We believe in upholding the highest standards of integrity, delivering exceptional service,
                    and embracing innovation. These values define our culture and shape the way we work together to
                    achieve our goals.
                </p>
            </div>
            <div className = "values">
                <div className = "value">
                    <h1>Integrity</h1>
                    <p>
                        We conduct ourselves with utmost honesty, transparency, and ethical behavior. We
                        believe in doing what is right for our customers, colleagues, and stakeholders, even
                        when faced with difficult choices.
                    </p>
                </div>
            </div>
        </div>
    );
}
