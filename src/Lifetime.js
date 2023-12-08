import "./styles/lifetime.css"
import indiegogo from "../src/assets/indiegogo.png";
import {useEffect, useState} from "react";

const Experience = ({onMaxScroll, onMinScroll, setUp, up}) => {
    const [offsetY, setOffsetY] = useState(0);
    let animationState = false;
    let isMax = false;
    const maxScrollUp = 0;
    const maxScrollDown = 400;

    const handleWheel = (e) => {
        if (isMax) {
            return false;
        }

        let parentElement = document.getElementById('section8');
        let containerContent = parentElement.querySelector('.container-content');
        let phoneContainer = parentElement.querySelector('.your-phone-container');
        let indegogo = parentElement.querySelector('.indiegogo-wrapper');
        let items = parentElement.querySelectorAll('.grid-circle-item');

        setOffsetY(prevOffsetY => {
            let newOffsetY = prevOffsetY + e.deltaY;

            if (newOffsetY < maxScrollUp && !isMax) {
                newOffsetY = maxScrollUp;
                containerContent.style.animation = 'fadeInSlideBottomBack 1s linear';
                phoneContainer.style.animation = 'fadeInSlideBottomBack 1s linear';

                items.forEach((el) => {
                    el.style.animation = 'fadeInSlideBottomBack 1s linear';
                })

                indegogo.style.animation = 'fadeOut 1s linear';


                setTimeout(() => {
                    onMinScroll();
                }, 1000)
                isMax = true
            } else if (newOffsetY > maxScrollDown && !isMax) {
                newOffsetY = maxScrollDown;
                onMaxScroll();
                isMax = true;
            }

            return newOffsetY;
        });

    };

    useEffect(() => {
        if (up) {
            setOffsetY(0);
            setUp(false);
        }


        if (offsetY === 0 && !animationState) {
            let parentElement = document.getElementById('section8');

            if (parentElement) {
                let containerContent = parentElement.querySelector('.container-content');
                let phoneContainer = parentElement.querySelector('.your-phone-container');
                let indegogo = parentElement.querySelector('.indiegogo-wrapper');
                let items = parentElement.querySelectorAll('.grid-circle-item');
                indegogo.style.opacity = '0';
                containerContent.style.animation = 'fadeInSlideBottom 1s ease-in';
                phoneContainer.style.animation = 'fadeInSlideBottom 1s ease-in';

                items.forEach((el) => {
                    el.style.animation = 'fadeInSlideBottom 1s ease-out';
                })


                setTimeout(() => {
                    indegogo.style.animation = 'fadeIn 1s linear';
                    indegogo.style.opacity = '1';
                }, 1000);


            }
            animationState = true;
        }
    }, [offsetY]);

    return (
        <div className={"lifetime"} onWheel={handleWheel}>
            <div className={"header"}>
                <div className="get-access">
                    Get Access
                </div>
            </div>
            <div className="content">
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="grid-container-left">
                            <div className="text-wrapper container-content">
                                <div className="title text-bold">BECOME LIFETIME MEMBER</div>
                                <p className="sub-title text-medium">PAY ONCE AND TRAVEL EVERY YEAR FOR FREE</p>
                                <div className="title-2 text-bold">300 EUR</div>
                            </div>
                            <div className="your-phone-container">
                                <div className="text-regular title">Your Phone Number</div>
                                <div className="contact-container">
                                    <div className="contact-me-container">
                                        <div className="plus text-medium">+</div>
                                        <div className="contact-me-wrapper">
                                            <div className="contact-me-text text-medium">Contact Me</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="circle-container">
                                <div className="grid-circle-container">
                                    <div className="grid-circle-item item-1">
                                        <div className="circle-wrapper">
                                            <div className="title text-bold">5</div>
                                            <div className="ellipse"/>
                                        </div>
                                        <p className="text-medium title">
                                            days of free travel every year
                                        </p>
                                    </div>
                                    <div className="grid-circle-item item-2">
                                        <div className="circle-wrapper">
                                            <div className="title text-bold">+</div>
                                            <div className="ellipse"/>
                                        </div>
                                        <p className="text-medium title">
                                            invest in new city,
                                            get more days
                                        </p>
                                    </div>
                                    <div className="grid-circle-item item-3">
                                        <div className="circle-wrapper">
                                            <div className="title text-bold">70</div>
                                            <div className="ellipse"/>
                                        </div>
                                        <p className="text-medium title">
                                            explore 70
                                            countries
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="indiegogo-wrapper">
                            <img className="img" alt="Image" src={indiegogo}/>
                            <div className="title text-light">Exlusive Offer</div>
                            <div className="sub-title text-bold">
                                EXPERIENCE
                                <br/>
                                DESTY
                            </div>
                            <p className="get-unique-offers text-light">
                                Get unique offers for you and <br/>
                                your friends. We are starting on May 2024
                            </p>
                            <div className="learn-more-container">
                                <div className="text-medium text-button">Learn More</div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience