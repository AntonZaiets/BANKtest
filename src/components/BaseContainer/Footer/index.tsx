import React from "react";
import {Logo} from "../../../images/icons/logo";
import {Mail} from "../../../images/icons/mail";
import {Phone} from "../../../images/icons/phone";
import {Location} from "../../../images/icons/location";
import {Facebook} from "../../../images/icons/facebook";
import {Twitter} from "../../../images/icons/twitter";
import {Telegram} from "../../../images/icons/telegram";
import "./style.scss"
export const Footer = () => {
    return(
        <div className = "footer">
            <div className = "footer_logo">
                <div className = "logo"><Logo/></div>
                <div className = "name"><p>NAU Bank</p></div>
            </div>
            {/*<div className = "header_navigation">
                <div className = 'header_link'>Home</div>
                <div className = 'header_link'>Careers</div>
                <div className = 'header_link'>About</div>
                <div className = 'header_link'>Security</div>
            </div>*/}
            <ul className="header_navigation">
                <li className="header__nav-item">Home</li>
                <li className="header__nav-item">Careers</li>
                <li className="header__nav-item">About</li>
                <li className="header__nav-item">Security</li>
            </ul>
            <div className = "contact_us">
                <div className = "email">
                    <div className = "email_logo"><Mail/></div>
                    <div className = "email_text">panama@gamil.com</div>
                </div>
                <div className = "number">
                    <div className = "number_logo"><Phone/></div>
                    <div className = "number_text">+5070000000</div>
                </div>
                <div className = "location">
                    <div className = "location_logo"><Location/></div>
                    <div className = "location_text">Panama</div>
                </div>
            </div>
            <div className = "footer_bottom">
                <div className = "icons">
                    <div className = "icon"><Facebook/></div>
                    <div className = "icon"><Twitter/></div>
                    <div className = "icon"><Telegram/></div>
                </div>
                <div className = "reserved bottom_text"><p>NAU Bank All Rights Reserved</p></div>
                <div className = "privacy_policy bottom_text"><p>Privacy Policy | Terms of Service</p></div>
            </div>
        </div>
    );
}