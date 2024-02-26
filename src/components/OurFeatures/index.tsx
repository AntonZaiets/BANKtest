import React, { useState } from "react";
import "./style.scss";
import Arrow from "../../images/icons/ArrowTopRight.svg"
export const OurFeatures = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const buttons = [
        { label: "Online Banking", isActive: activeButtonIndex === 0 },
        { label: "Financial Tools", isActive: activeButtonIndex === 1 },
        { label: "Customer Support", isActive: activeButtonIndex === 2 }
    ];

    const handleButtonClick = (index:any) => {
        setActiveButtonIndex(index);
    };

    return (
        <div className="our_features">
            <div className="our_features__buttons">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={button.isActive ? "active" : ""}
                        onClick={() => handleButtonClick(index)}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
            <div className="our_features__cards">
                <div className={activeButtonIndex === 0? "online_banking" : "hiden"} >
                    <div className= {activeButtonIndex === 0?"card active": "card"}>
                        <div className="card_head">
                            <h1>24/7 Account Access</h1>
                            <img src={Arrow} alt=''/>
                        </div>
                        <p>
                            Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online
                            banking platform. Check balances, transfer funds, and pay bills with ease.
                        </p>
                    </div>
                    <div className= {activeButtonIndex === 0?"card active": "card"}>
                        <div className="card_head">
                            <h1>Mobile Banking App</h1>
                            <img src={Arrow} alt=''/>
                        </div>
                        <p>
                            Stay connected to your finances on the go with our user-friendly mobile banking app.
                            Easily manage your accounts, deposit checks, and make payments from your smartphone or
                            tablet.
                        </p>
                    </div>
                    <div className= {activeButtonIndex === 0?"card active": "card"}>
                        <div className="card_head">
                            <h1>Secure Transactions</h1>
                            <img src={Arrow} alt=''/>
                        </div>
                        <p>
                            Rest assured knowing that your transactions are protected by industry-leading security
                            measures. We employ encryption and multi-factor authentication to safeguard your financial
                            information.
                        </p>
                    </div>
                    <div className= {activeButtonIndex === 0?"card active": "card"}>
                        <div className="card_head">
                            <h1>Bill Pay and Transfers</h1>
                            <img src={Arrow} alt=''/>
                        </div>
                        <p>
                            Save time and avoid late fees with our convenient bill pay service. Set up recurring
                            payments or make one-time transfers between your accounts with just a few clicks.
                        </p>
                    </div>
                </div>
                <div className={activeButtonIndex === 1? "online_banking" : "hiden"}>
                    <div className= {activeButtonIndex === 1?"card active": "card"}>
                        <div className="card_head">
                            <h1>Expense tracking</h1>
                            <img src={Arrow} alt=''/>
                        </div>
                        <p>
                            Enable customers to create budgets, track their expenses, and receive alerts when they go
                            over budget.
                        </p>
                    </div>
                    <div className= {activeButtonIndex === 1?"card active": "card"}>
                        <div className="card_head">
                            <h1>Currency exchange</h1>
                            <img src={Arrow} alt=''/>
                        </div>
                        <p>
                            Add the ability to exchange currencies at current rates directly through the online banking
                            platform.
                        </p>
                    </div>
                    <div className= {activeButtonIndex === 1?"card active": "card"}>
                        <div className="card_head">
                            <h1>Investment instruments</h1>
                            <img src={Arrow} alt=''/>
                        </div>
                        <p>
                            Add the ability to invest in funds, stocks, bonds, and other financial instruments directly
                            through online banking. Expand information about market reviews, analyzes, and portfolio
                            managers.
                        </p>
                    </div>
                    <div className= {activeButtonIndex === 1?"card active": "card"}>
                        <div className="card_head">
                            <h1>Financial planning calculators</h1>
                            <img src={Arrow} alt=''/>
                        </div>
                        <p>
                            Provide customers with access to calculators for calculating retirement savings, taxes,
                            loans, hypothecation, and more.
                        </p>
                    </div>
                </div>
                <div className={activeButtonIndex === 2? "online_banking" : "hiden"}>
                    <div className= {activeButtonIndex === 2?"card active": "card"}>
                        <div className="card_head">
                            <h1>24/7 Support</h1>
                            <img src={Arrow} alt=''/>
                        </div>
                        <p>
                            Our customer support team is available 24/7, ensuring that help is always at hand whenever
                            you need it, be it day or night.
                        </p>
                    </div>
                    <div className= {activeButtonIndex === 2?"card active": "card"}>
                        <div className="card_head">
                            <h1>Multi-Channel Access</h1>
                            <img src={Arrow} alt=''/>
                        </div>
                        <p>
                            Reach out to us conveniently through multiple communication channels such as phone,
                            email, live chat, or by visiting any of our branches in person. We're committed to
                            making support accessible in the way that suits you best.
                        </p>
                    </div>
                    <div className= {activeButtonIndex === 2?"card active": "card"}>
                        <div className="card_head">
                            <h1>Expert Assistance</h1>
                            <img src={Arrow} alt=''/>
                        </div>
                        <p>
                            Our team comprises skilled specialists who possess in-depth knowledge across all
                            banking services. From account management to loan inquiries, our experts are
                            equipped to provide tailored assistance to address your specific needs effectively.
                        </p>
                    </div>
                    <div className= {activeButtonIndex === 2?"card active": "card"}>
                        <div className="card_head">
                            <h1>Prompt Solutions</h1>
                            <img src={Arrow} alt=''/>
                        </div>
                        <p>
                            We prioritize swift resolution of your concerns, aiming to provide efficient
                            solutions to ensure your banking experience remains seamless and hassle-free.
                            Your satisfaction is our top priority, and we're dedicated to resolving any issues
                            you encounter promptly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
