import React from "react";
import "./style.scss"
export const Banner = () => {
    return(
        <div className = "banner">
            <div style={{width: "80%"}}>
                <h1 style={{color: "#FFFFFF",  fontSize: "2.0vw"}}>Start your financial journey with <span style={{color: "#CAFF33"}}>NAU Bank today!</span>
                </h1>
                <p style={{color: "#B3B3B3", fontSize: "1.4vw"}}>
                    Ready to take control of your finances? Join YourBank now, and let us help you achieve your
                    financial
                    goals with our tailored solutions and exceptional customer service
                </p>
            </div>
            <button>Open Account</button>
        </div>
    );
}
