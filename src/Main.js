import "../src/styles/main.css";
import earth from "../src/assets/earth.png";
import {useEffect, useState} from "react";
import _ from "lodash";

const Main = ({onMaxScroll, up, setUp}) => {
    const [offsetY, setOffsetY] = useState(0);
    const [startY, setStartY] = useState(0);
    const [isMax, setMax] = useState(false);
    const maxScrollUp = 0;
    const maxScrollDown = 600;

    const handleWheel = (e) => {
        if (isMax) {
            return false;
        }


        setOffsetY(prevOffsetY => {
            let newOffsetY = null;
            if (e?.touches && e.touches.length) {
                const touch = e.touches[0];
                const deltaY = touch.clientY - startY;

                setStartY(touch.clientY);
                newOffsetY = prevOffsetY + deltaY;
            } else {
                newOffsetY =  prevOffsetY + e.deltaY;
            }

            if (newOffsetY < maxScrollUp) {
                newOffsetY = maxScrollUp;
            } else if (newOffsetY > maxScrollDown) {
                newOffsetY = maxScrollDown;
                onMaxScroll();
                setMax(true);
            }

            return newOffsetY;
        });
    };

    useEffect(() => {
        if (up) {
            setOffsetY(0);
            setUp(false);
        }

        const moveUpElements = document.querySelectorAll('.move-to-top');
        const moveDown = document.getElementById('move-to-bottom');

        moveUpElements.forEach(el => {
            el.style.transition = 'transform 1s ease-out';
            el.style.transform = `translateY(${-offsetY * 0.5}px)`;
        });
        moveDown.style.transition = 'transform 1s ease-out';
        moveDown.style.transform = `translateY(${offsetY}px)`;

    }, [offsetY]);

    function handleTouchStart(event) {
        // Запоминаем начальную позицию Y при первом касании
        const touch = event.touches[0];
        setStartY(touch.clientY);
    }

    return (
        <div className="main-content" onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchMove={handleWheel} >
            <div className="get-access move-to-top">
                Get Access
            </div>
            <h1 id="move-to-top" className="move-to-top">EXPLORE BEYOND BORDERS</h1>
            <div id={"move-to-bottom"} className="move-to-bottom image"> </div>
            <div className="scroll-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="386"
                    height="358"
                    fill="none"
                    viewBox="0 0 386 358"
                >
                    <path
                        fill="#C1C1C1"
                        d="M5.641 176.279l176 176a15.983 15.983 0 005.207 3.502 15.984 15.984 0 0012.306 0 15.983 15.983 0 005.207-3.502l176-176a16 16 0 000-22.56 16.007 16.007 0 00-17.513-3.502 15.983 15.983 0 00-5.207 3.502l-164.64 164.64-164.64-164.64a15.99 15.99 0 00-11.36-4.733 16.007 16.007 0 00-11.36 4.733 16 16 0 000 22.56z"
                    ></path>
                    <path
                        fill="#C1C1C1"
                        d="M181.641 204.279a15.983 15.983 0 005.207 3.502 15.984 15.984 0 0012.306 0 15.983 15.983 0 005.207-3.502l176-176a16 16 0 000-22.56 15.994 15.994 0 00-11.36-4.733 15.997 15.997 0 00-11.36 4.733l-164.64 164.64L28.361 5.719a16 16 0 00-22.72 0 16 16 0 000 22.56l176 176z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Main;
