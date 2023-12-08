import "../src/styles/materials.css"
import house from "../src/assets/house.png";
import {useEffect, useState} from "react";

const Materials = ({onMaxScroll, onMinScroll, setUp, up}) => {
    const [offsetY, setOffsetY] = useState(0);
    let animationState = false;
    let isMax = false;
    const maxScrollUp = -400;
    const maxScrollDown = 400;

    const handleWheel = (e) => {
        if (isMax) {
            return false;
        }

        setOffsetY(prevOffsetY => {
            let newOffsetY = prevOffsetY + e.deltaY;
            let parentElement = document.getElementById('section6');
            let h1Element = parentElement.querySelector('h1');
            let items = parentElement.querySelectorAll('.grid-view .item');

            if (newOffsetY < maxScrollUp && !isMax) {
                newOffsetY = maxScrollUp;
                h1Element.style.animation = 'fadeInSlideRightBack 1s linear';

                items.forEach((el) => {
                    el.style.animation = 'fadeInSlideRightBack 1s linear';
                });


                setTimeout(() => {
                    onMinScroll();
                }, 1000)
                isMax = true
            } else if (newOffsetY > maxScrollDown && !isMax) {
                newOffsetY = maxScrollDown;

                h1Element.style.animation = 'fadeInSlideRight 1s linear';

                items.forEach((el) => {
                    el.style.animation = 'fadeInSlideRight 1s linear';
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
            let parentElement = document.getElementById('section6');

            if (parentElement) {
                let h1Element = parentElement.querySelector('h1');
                let items = parentElement.querySelectorAll('.grid-view .item');

                h1Element.style.animation = 'fadeInSlideLeft 1.5s ease-out';

                items.forEach((el) => {
                    el.style.animation = 'fadeInSlideLeft 1.5s ease-in';
                })
            }
            animationState = true;
        }
    }, [offsetY]);

    return(<div className={"materials"} onWheel={handleWheel}>
        <div className={"header"}>
            <div className="get-access">
                Get Access
            </div>
            <h1>ECO-FRIENDLY MATERIALS</h1>

        </div>
        <div className="content">
            <div className="grid-view">
                <div className="div1 item"><img src={house}/></div>
                <div className="div2 item"><img src={house}/></div>
                <div className="div3 item"><img src={house}/></div>
                <div className="div4 item"><img src={house}/></div>
                <div className="div5 item"><img src={house}/></div>

            </div>
        </div>
    </div>)
}
export default Materials