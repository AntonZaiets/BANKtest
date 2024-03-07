import React from "react";
import "./styles.scss"
import {Diplomat} from "../../images/icons/Diplomat";
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
                <div className="requirements"><Diplomat/><p>Bachelor's degree in Finance, Economics, or a related
                    field</p></div>
                <div className="requirements"><Diplomat/><p>Minimum of 2 years of experience in risk management or a
                    similar role</p></div>
                <div className="requirements"><Diplomat/><p>Proficiency in risk analysis tools and techniques</p></div>
                <div className="requirements"><Diplomat/><p>Strong analytical and problem-solving skills</p></div>
                <div className="requirements"><Diplomat/><p>Knowledge of regulatory requirements and industry best
                    practices</p></div>
            </div>
            <div className="vacansion">
                <h1>IT Security Specialist</h1>
                <span>Location: Kiev</span>
                <span>Department: Information Technology</span>
                <h2>About This Job</h2>
                <p>
                    As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and
                    integrity of our information systems. You will develop and implement security protocols, conduct
                    vulnerability assessments, and respond to security incidents. We are seeking individuals with a
                    strong technical background, knowledge of cybersecurity best practices, and a commitment to
                    maintaining the confidentiality of customer data.
                </p>
                <h2>Requirement & Qualifications</h2>
                <div className="requirements"><Diplomat/><p>Strong knowledge of banking products and services</p></div>
                <div className="requirements"><Diplomat/><p>Minimum of 5 years of experience in IT security or a similar role</p></div>
                <div className="requirements"><Diplomat/><p>In-depth knowledge of network security protocols and technologies</p></div>
                <div className="requirements"><Diplomat/><p>Familiarity with regulatory frameworks such as PCI DSS and GDPR</p></div>
                <div className="requirements"><Diplomat/><p>Professional certifications such as CISSP or CISM are preferred</p></div>
            </div>
        </div>
    );
}