import React from "react";
import "./style.scss";

interface Props {
    image: string;
    title: string;
    description: string;
}
export const ProductNeeds: React.FC<Props> = ({ image, title, description }) => {
    return (
        <div className="product">
            <div className="product_icon">
                <img src={image} alt="" />
            </div>
            <div className="product_title">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}
