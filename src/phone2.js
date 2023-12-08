import "../src/styles/phone2.css"
import phone from "../src/assets/phone.png"

import benefit2 from "../src/assets/benefit2.png"
import benefit1 from "../src/assets/benefit1.png"
import {useEffect, useRef, useState} from "react";
import _ from "lodash";

const Phone2 = ({onMinScroll, onMaxScroll, setUp, up}) => {
    const [offsetY, setOffsetY] = useState(0);
    const [animationState, setAnimationState] = useState(false);
    let isMax = false;
    const maxScrollUp = -200;
    const maxScrollDown = 400;

    const handleWheel = (e) => {
        if (isMax) {
            return false;
        }

        setOffsetY(prevOffsetY => {
            let newOffsetY = prevOffsetY + e.deltaY;
            let parentElement = document.getElementById('section3');
            let mainImageElement = parentElement.querySelector('.content img');
            let services = parentElement.querySelector('.content .services .service:first-child');
            let services2 = parentElement.querySelector('.content .services .service:last-child');
            let h1Element = parentElement.querySelector('h1');
            let access = parentElement.querySelector('.get-access');

            if (newOffsetY < maxScrollUp && !isMax) {
                newOffsetY = maxScrollUp;
                h1Element.style.animation = 'moveHeaderNext 1s linear';
                access.style.animation = 'moveHeaderNext 1s linear';
                mainImageElement.style.animation = 'movePhoneBackBack 1s linear';

                setTimeout(() => {
                    mainImageElement.style.transform = 'none'
                }, 1000)

                services.style.animation = "fadeOutServices 1s linear"
                services2.style.animation = "fadeOutServices 1s linear"

                setTimeout(() => {
                    onMinScroll();
                }, 1000)
                isMax = true
            } else if (newOffsetY > maxScrollDown && !isMax) {
                newOffsetY = maxScrollDown;

                h1Element.style.animation = 'moveHeaderNext 1s linear';
                access.style.animation = 'moveHeaderNext 1s linear';
                mainImageElement.style.margin = 0;
                mainImageElement.style.animation = 'movePhoneNext 1s linear'

                services.style.animation = "moveServiceNext 1s linear"
                services2.style.animation = "moveServiceNext 1s linear"

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
            let parentElement = document.getElementById('section3');

            if (parentElement) {
                let mainImageElement = parentElement.querySelector('.content img');
                let services = parentElement.querySelector('.content .services .service:first-child');
                let services2 = parentElement.querySelector('.content .services .service:last-child');
                let access = parentElement.querySelector('.get-access');
                mainImageElement.style.margin = 0

                let h1Element = parentElement.querySelector('h1');

                if (!up) {
                    h1Element.style.animation = 'moveHeaderBack 1s linear';
                    access.style.animation = 'moveHeaderBack 1s linear';
                    mainImageElement.style.animation = 'movePhone 2s ease-in-out'
                    mainImageElement.style.transform = 'translateX(-50vh)'
                    services.style.animation = "fadeIn 2s ease-in-out"

                    services2.style.animation = "fadeIn 2s ease-in-out"

                } else {
                    h1Element.style.animation = 'moveHeaderBack 1s linear';
                    access.style.animation = 'moveHeaderBack 1s linear';
                    mainImageElement.style.animation = 'movePhoneBack 1s ease-in-out'
                    mainImageElement.style.transform = 'translateX(-50vh)'
                    services.style.animation = "moveServiceBack 1s ease-in-out"
                    services2.style.animation = "moveServiceBack 1s ease-in-out"
                }

                services.style.display = "flex"
                services.style.opacity = "1"
                services2.style.display = "flex"
                services2.style.opacity = "1"

                // h1Element.style.animation = 'fadeInSlideDown 1.5s linear';
                // access.style.animation = 'fadeInSlideDown 1.5s linear';

            }
            setAnimationState(true);
        }
    }, [offsetY]);

    return (<div className={"phone2"} onWheel={handleWheel}>
        <div className={"header"}>
            <div className="get-access">
                Get Access
            </div>
            <h1>WITH SPECIAL BENEFITS ALL AROUND THE WORLD</h1>
        </div>
        <div className="content">
            <img src={phone}/>
            <div className="services">
                <div className="service">
                    <img src={benefit1}/>
                </div>
                <div className="service">
                    <img src={benefit2}/>
                </div>
            </div>
        </div>
    </div>);
}
export default Phone2