import "../src/styles/house.css"
import houseplan from "../src/assets/housePlan.png"
import {useEffect, useState} from "react";

const House2 = ({onMaxScroll, onMinScroll, setUp, up}) => {
    const [offsetY, setOffsetY] = useState(0);
    let animationState = false;
    let isMax = false;
    const maxScrollUp =  -400;
    const maxScrollDown = 400;

    const handleWheel = (e) => {
        if (isMax) {
            return false;
        }

        let parentElement = document.getElementById('section5');
        let h1Element = parentElement.querySelector('h1');
        let image = parentElement.querySelector('img');
        let access = parentElement.querySelector('.get-access');

        setOffsetY(prevOffsetY => {
            let newOffsetY = prevOffsetY + e.deltaY;

            if (newOffsetY < maxScrollUp && !isMax) {
                newOffsetY = maxScrollUp;
                h1Element.style.animation = 'fadeOutHouse 1s linear';
                image.style.animation = 'fadeOutHouse 1s linear';

                setTimeout(() => {
                    onMinScroll();
                }, 1000)
                isMax = true
            } else if (newOffsetY > maxScrollDown && !isMax) {
                newOffsetY = maxScrollDown;

                h1Element.style.animation = 'fadeLeftHouseIcon 1s linear';
                image.style.animation = 'fadeLeftHouseIcon 1s linear';

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
            let parentElement = document.getElementById('section5');

            if (parentElement) {
                let h1Element = parentElement.querySelector('h1');
                let image = parentElement.querySelector('img');

                h1Element.style.animation = 'fadeInHouseIcons 2s linear';

                image.style.animation = 'fadeInBlurHouse 1.5s linear';

                setTimeout(() => {
                    h1Element.style.opacity = '1';
                }, 2000)

            }
            animationState = true;
        }
    }, [offsetY]);

    return(<div className={"house2"} onWheel={handleWheel}>
        <div className={"header"}>
            <div className="get-access">
                Get Access
            </div>
            <h1>FULLY PERSONAL STORY</h1>

        </div>
        <div className="content">
            <img src={houseplan} alt=""/>
        </div>
    </div>)
}
export default House2