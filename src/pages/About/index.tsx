import React from "react";
import "./style.scss"
import Image from "../../images/Image.png";
import AbstractImage from "../../images/AbstractDesign.png"
import Plant from "../../images/Plant.png"
import Eye from "../../images/Eye.png"
import FirstImg from "../../images/img_1.png"
import SecondImg from "../../images/img_2.png"
import ThirdImg from "../../images/img_3.png"
import FourthImg from "../../images/img_4.png"
export const About = () => {
    return(
        <div className = "about">
            <div className= "about_excellence">
                <div className = "about_excellence__description">
                    <p>Welcome to NAU Bank</p>
                    <h1>Where Banking Meets <br/><span>Excellence!</span></h1>
                    <p>
                        <span>
                            At NAU Bank, we believe that banking should be more than just
                            transactions. It should be an experience that empowers individuals
                            and businesses to thrive and reach their financial goals. As a
                            trusted financial institution, we are committed to delivering
                            exceptional banking services that go beyond expectations.
                            With a focus on innovation, personalized solutions,
                            and unwavering integrity, we strive to provide the best banking
                            experience for our valued customers. Join us on this exciting
                            journey and discover a new level of banking excellence.
                        </span>
                    </p>
                </div>
                <img className = "excellence_img" src = {Image} alt = ""/>
                <img className = "excellence_abstract" src = {AbstractImage} alt = ""/>
            </div>
            <div className = "mission_vision">
                <div className = "title">
                    <h1> Mission & Vision</h1>
                    <p>
                        We envision being a leading force in the industry, driven by innovation,
                        integrity, and inclusivity, creating a brighter financial future for
                        individuals and businesses while maintaining a strong commitment to customer
                        satisfaction and community development
                    </p>
                </div>
                <div className = "mission">
                    <div className = "mission_image">
                        <img className = "plant_image" src = {Plant} alt = ""/>
                    </div>
                    <div className = "mission_text">
                        <h1>Mission</h1>
                        <p>
                            At NAU Bank, our mission is to empower our customers to achieve financial
                            success. We are dedicated to delivering innovative banking solutions that
                            cater to their unique needs. Through personalized services, expert guidance,
                            and cutting-edge technology, we aim to build strong, lasting relationships
                            with our customers. Our mission is to be their trusted partner, helping them
                            navigate their financial journey and realize their dreams.
                        </p>
                    </div>
                </div>
                <div className = "vision">
                    <div className = "vision_text">
                        <h1>Vision</h1>
                        <p>
                            Our vision at YourBank is to redefine banking by creating a seamless and
                            personalized experience for our customers. We envision a future where
                            banking is accessible, transparent, and tailored to individual
                            preferences. Through continuous innovation and collaboration, we strive to
                            be at the forefront of the industry, setting new standards for
                            customer-centric banking. Our vision is to be the preferred financial
                            institution, known for our unwavering commitment to excellence, trust,
                            and customer satisfaction.
                        </p>
                    </div>
                    <div className = "vision_image">
                        <img className = "eye_image" src = {Eye} alt = ""/>
                    </div>

                </div>
            </div>
            <div className = "releases">
                <div className = "releases_title">
                    <h1>Press Releases</h1>
                    <p>
                        Stay updated with the latest happenings and exciting developments at YourBank
                        through our press releases.
                    </p>
                </div>
                <div className = "releases_news">
                    <div className = "block">
                        <img className = "img" src = {FirstImg} alt = {""}/>
                        <div className = "text">
                            <h1>YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h1>
                            <span>Location: Kiev</span><span>Date: 06/11/2024</span>
                            <p>
                                YourBank is pleased to announce the introduction of our new Rewards Program, aimed at
                                rewarding our loyal customers and enhancing their banking experience. The program offers
                                exclusive benefits, discounts, and personalized offers tailored to individual customer
                                preferences. With this initiative, YourBank reaffirms its commitment to delivering
                                exceptional value and building lasting relationships with our valued customers.
                            </p>
                        </div>
                    </div>
                    <div className = "block">
                        <img className = "img" src = {SecondImg} alt = {""}/>
                        <div className = "text">
                            <h1>YourBank Expands Branch Network with Opening of New Location in Chennai</h1>
                            <span>Location: Kiev</span><span>Date: 12/11/2024</span>
                            <p>
                                YourBank is excited to announce the grand opening of our newest branch in [City].
                                This expansion is a testament to our continued commitment to serving our customers
                                and providing them with convenient access to our comprehensive range of banking
                                services. The new branch will feature state-of-the-art facilities, a team of dedicated
                                professionals, and a personalized approach to banking, further strengthening our
                                presence in the local community.
                            </p>
                        </div>
                    </div>
                    <div className = "block">
                        <img className = "img" src = {ThirdImg} alt = {""}/>
                        <div className = "text">
                            <h1>YourBank Partners with Local Nonprofit to Support Financial Education Initiatives</h1>
                            <span>Location: Kiev</span><span>Date: 24/12/2024</span>
                            <p>
                                YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating
                                our commitment to environmental responsibility. This initiative includes a range of
                                sustainable banking products and services, such as green loans, eco-friendly
                                investment options, and paperless banking solutions. By incorporating sustainable
                                practices into our operations, we aim to contribute to a greener future while
                                providing innovative banking solutions to our customers.
                            </p>
                        </div>
                    </div>
                    <div className = "block">
                        <img className = "img" src = {FourthImg} alt = {""}/>
                        <div className = "text">
                            <h1>YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility</h1>
                            <span>Location: Kiev</span><span>Date: 28/12/2024</span>
                            <p>
                                YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating
                                our commitment to environmental responsibility. This initiative includes a range of
                                sustainable banking products and services, such as green loans, eco-friendly
                                investment options, and paperless banking solutions. By incorporating sustainable
                                practices into our operations, we aim to contribute to a greener future while
                                providing innovative banking solutions to our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}