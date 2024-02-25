import React, { useState } from "react";
import "./style.scss";

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
        </div>
    );
};
