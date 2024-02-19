import React, {useState} from "react";
import "./style.scss"
import {Logo} from "../../../images/icons/logo";
import {Menu} from "../../../images/icons/menu";
import {Link} from "react-router-dom";

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
                    <Link className = "link" to = "/"><li className="header__nav-item">Home</li></Link>
                    <Link className = "link" to = "/careers"><li className="header__nav-item">Careers</li></Link>
                    <Link className = "link" to = "/about"><li className="header__nav-item">About</li></Link>
                    <Link className = "link" to = "/security"><li className="header__nav-item">Security</li></Link>
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
