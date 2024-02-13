import React, {useState} from "react";
import "./style.scss"
import {Logo} from "../../../images/icons/logo";
import {Menu} from "../../../images/icons/menu";

export const Head = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className= "header">
            <div className = "header_logo">
                <div className = "logo"><Logo/></div>
                <div className = "name"><p>NAU Bank</p></div>
            </div>
            <nav className={`header__nav ${isOpen ? "active" : ""}`}>
                <ul className="header__nav-list">
                    <li className="header__nav-item">Home</li>
                    <li className="header__nav-item">Careers</li>
                    <li className="header__nav-item">About</li>
                    <li className="header__nav-item">Security</li>
                </ul>
                <ul className = "header__login-list">
                    <li className="header__login-item">Login</li>
                    <li className="header__login-item">Sign Up</li>
                </ul>
            </nav>
            <button className = "header__menu-button" onClick={() => setOpen(!isOpen)}>
                <div className = "menu_icon"><Menu/></div>
            </button>
            {/*<div className = "header_login hide">
                <div className = "authorization">Login</div>
                <div className = "authorization sign_up">Sing Up</div>
            </div>*/}
        </div>
    );
}
