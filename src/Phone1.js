import "../src/styles/phone1.css"
import phone from "../src/assets/phone.png"
import {useEffect, useRef, useState} from "react";
import _ from "lodash";

const Phone1 = ({onMaxScroll, onMinScroll, setUp, up}) => {
    const sectionRef = useRef(null);
    const [offsetY, setOffsetY] = useState(0);
    const [animationState, setAnimationState] = useState(false);
    let isMax = false;
    const maxScrollUp = -200;
    const maxScrollDown = 400;

    const handleWheel = (e) => {
        if (isMax) {
            return false;
        }

        let parentElement = document.getElementById('section2');
        let h1Element = parentElement.querySelector('h1');
        let access = parentElement.querySelector('.get-access');
        let h1ElementImage = parentElement.querySelector('.content img');

        setOffsetY(prevOffsetY => {
            let newOffsetY = prevOffsetY + e.deltaY;

            if (newOffsetY < maxScrollUp && !isMax) {
                newOffsetY = maxScrollUp;
                h1Element.style.animation = 'fadeOutHeader 1s linear';
                access.style.animation = 'fadeOutHeader 1s linear';
                h1ElementImage.style.animation = 'fadeOutSlideRight 1s linear';
                setTimeout(() => {
                    onMinScroll();
                }, 1000)
                isMax = true
            } else if (newOffsetY > maxScrollDown && !isMax) {
                newOffsetY = maxScrollDown;

                h1Element.style.animation = 'fadeOutSlideUp 1s linear';
                access.style.animation = 'fadeOutSlideUp 1s linear';

                setTimeout(() => {
                    onMaxScroll();
                }, 1000)
                isMax = true
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
            let parentElement = document.getElementById('section2');
            let h1Element = parentElement.querySelector('h1');
            let access = parentElement.querySelector('.get-access');
            let h1ElementImage = parentElement.querySelector('.content img');

            if (!up) {
                h1Element.style.animation = 'fadeInSlideDown 1.5s linear';
                access.style.animation = 'fadeInSlideDown 1.5s linear';
                h1ElementImage.style.animation = 'fadeInSlideUp 1.5s linear';
            } else {
                h1Element.style.animation = 'fadeInSlideDown 1.5s linear';
                access.style.animation = 'fadeInSlideDown 1.5s linear';
            }


            setAnimationState(true);
        }
    }, [offsetY]);

    return (<div className={"phone1"} ref={sectionRef} onWheel={handleWheel}>
        <div className="get-access move-to-top">
            Get Access
        </div>
        <h1>WE ISSUE YOU A SPECIAL PASSPORT</h1>
        <div className="content">
            <img src={phone}/>
        </div>

    </div>)
}

export default Phone1;