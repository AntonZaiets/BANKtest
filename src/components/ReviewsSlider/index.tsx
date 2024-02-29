import React, {useState} from "react";
import "./style.scss"
import {ArrowRight} from "../../images/icons/ArrowRight";
import {ArrowLeft} from "../../images/icons/ArrowLeft";
export const ReviewsSlider = () => {
    const Reviews = [
        {name: "John", review: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze."},
        {name: "Sara", review: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable."},
        {name: "Emily", review: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind."},
        {name: "Ivan", review: "The customer service at this bank is outstanding. Every time I visit, I'm greeted with a smile and my concerns are addressed promptly."},
        {name: "Peter", review: "I've been banking with this institution for years and have never had any issues. Their online banking platform is easy to use and convenient."},
        {name: "Sam", review: "I recently opened a savings account here and I'm impressed with the interest rates. It's great to see my money grow over time."},
        {name: "Max", review: "I had a problem with a transaction and reached out to customer support. They were able to resolve the issue quickly and efficiently. Very satisfied."},
        {name: "Ben", review: "This bank offers competitive loan rates. I recently refinanced my mortgage with them and saved a significant amount of money on interest."},
        {name: "Ann", review: "I appreciate the security measures this bank has in place. I feel confident knowing my personal information is protected."},
        {name: "Alice", review: "I had some concerns about my retirement savings and spoke with a financial advisor at this bank. They provided valuable insights and helped me create a solid plan for the future."},
    ];
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? Reviews.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === Reviews.length - 1 ? 0 : prevIndex + 1));
    };
    //setTimeout(handleNext, 5000);
    return(
        <div className="reviews_slider">
            <div className="reviews_slider__top">
                <h1 style={{color: "#FFFFFF"}}>Our <span style={{color: "#CAFF33"}}>Testimonials</span></h1>
                <p style={{color: "#B3B3B3"}}>
                    Discover how YourBank has transformed lives with innovative digital solutions and personalized
                    customer service. See why our clients trust us for a secure and prosperous financial journey
                </p>
            </div>
            <div className="slider">
                <div className="arrow" onClick={handlePrev}><ArrowLeft/></div>
                <div className = "slide">
                    <p style={{color: "#FFFFFF"}}>{Reviews[index].review}</p>
                    <p style={{color: "#CAFF33"}}>{Reviews[index].name}</p>
                </div>
                <div className="arrow" onClick={handleNext}><ArrowRight/></div>
            </div>
        </div>
    );
}