import starlink from "../src/assets/starlink.png";
import "../src/styles/experience.css"
import React, {useEffect, useState} from "react";

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

        setOffsetY(prevOffsetY => {
            let newOffsetY = prevOffsetY + e.deltaY;
            let parentElement = document.getElementById('section7');
            let h1Element = parentElement.querySelector('h1');
            let items = parentElement.querySelectorAll('.wrapper');

            if (newOffsetY < maxScrollUp && !isMax) {
                newOffsetY = maxScrollUp;
                h1Element.style.animation = 'fadeLeftBack 1s linear';

                items.forEach((el) => {
                    el.style.animation = 'fadeLeftBack 1s linear';
                });


                setTimeout(() => {
                    onMinScroll();
                }, 1000)
                isMax = true;
            } else if (newOffsetY > maxScrollDown && !isMax) {
                newOffsetY = maxScrollDown;
                h1Element.style.animation = 'fadeTop 1s linear';

                items.forEach((el) => {
                    el.style.animation = 'fadeTop 1s linear';
                });


                setTimeout(() => {
                    onMaxScroll();
                }, 1000)

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
            let parentElement = document.getElementById('section7');

            if (parentElement) {
                let h1Element = parentElement.querySelector('h1');
                let items = parentElement.querySelectorAll('.wrapper');

                h1Element.style.animation = 'fadeInSlideLeft 1s linear';

                items.forEach((el) => {
                    el.style.animation = 'fadeInSlideLeft 1.5s linear';
                })
            }
            animationState = true;
        }
    }, [offsetY]);


    return (<div className="travel-experience" onWheel={handleWheel}>
        <div className={"header"}>
            <div className="get-access">
                Get Access
            </div>
            <h1>UPGRADE YOUR TRAVEL EXPERIENCE</h1>

        </div>
        <div className="content">
            <div className="overlap wrapper-overlap">
                <div className="peoples-wrapper wrapper">
                    <div className="peoples image text-wrapper">
                        <div className="title text-bold">5 DAYS</div>
                        <div className="description text-regular">with 16 new people</div>
                    </div>
                </div>

                <div className="activities-wrapper wrapper">
                    <div className="activities image text-wrapper">
                        <div className="title text-wrapper text-regular">
                            LEARN PRO
                            <br/>
                            ACTIVITIES
                        </div>
                    </div>
                </div>
                <div className="culture-wrapper wrapper">
                    <div className="culture image text-wrapper">
                        <div className="title text-wrapper text-regular">
                            SPECIAL CULTURAL
                            <br/>
                            PROGRAM
                        </div>
                    </div>
                </div>
                <div className="starlink-wrapper wrapper">
                    <img className="img" alt="Starlink" src={starlink}/>
                </div>
            </div>
            <div className="overlap-1 wrapper-overlap">
                <div className="meditation-wrapper wrapper">
                    <div className="meditation image text-wrapper">
                        <div className="title text-bold">MEDITATION</div>
                        <div className="description text-regular">practices</div>
                    </div>
                </div>
                <div className="unique-wrapper wrapper">
                    <div className="unique image">
                        <div className="rectanglew-wrapper">
                            <div className="rectangle"/>
                            <div className="rectangle-2"/>
                        </div>
                        <div className="text-wrapper info-wrapper">
                            <div className="title text-bold">
                                UNIQUE
                                <br/>
                                PASSPORT
                            </div>
                            <div className="text-wrapper text-table table">
                                <div className="description text-regular table-row">discounts</div>
                                <div className="description text-regular table-row">priority</div>
                                <div className="description text-regular table-row">exclusive meetings</div>
                            </div>

                            <div className="plan-trap-wrapper">
                                <div className="plan-trip-text">Plan your trip</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="countries-wrapper wrapper">
                    <div className="countries image text-wrapper">
                        <div className="text-bold title">70</div>
                        <div className="text-bold description">COUNTRIES</div>
                    </div>
                </div>
                <div className="travel-wrapper wrapper">
                    <div className="travel image text-wrapper">
                        <div className="text-bold title">INVEST ONCE</div>
                        <div className="text-bold title-2">TRAVEL EVERY YEAR</div>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}
export default Experience