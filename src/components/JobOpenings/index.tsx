import React from "react";
import "./styles.scss"
import Diplomat from "../../images/icons/Diplomat.svg"
export const JobOpenings = () => {
    return(
        <div className="job_openings">
            <div className="vacansion">
                <h1>Risk Analyst</h1>
                <span>Location: Kiev</span>
                <span>Department: Risk Management</span>
                <h2>About This Job</h2>
                <p>
                    As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential
                    risks to our organization. You will analyze data, conduct risk assessments, and develop
                    strategies to mitigate risks. We are looking for detail-oriented individuals with strong
                    analytical skills and a solid understanding of risk management principles.
                </p>
                <h2>Requirement & Qualifications</h2>
                <img src={Diplomat} alt=""/>
            </div>
        </div>
    );
}