import "../src/styles/house.css"
import {useEffect, useState} from "react";
import _ from "lodash";

const House = ({onMaxScroll, onMinScroll, setUp, up}) => {
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

            let parentElement = document.getElementById('section4');
            let h1Element = parentElement.querySelector('h1');
            let items = parentElement.querySelectorAll('.item');
            let access = parentElement.querySelector('.get-access');

            if (newOffsetY < maxScrollUp && !isMax) {
                newOffsetY = maxScrollUp;

                h1Element.style.animation = 'fadeTopHouseIcon 1s linear';
                access.style.animation = 'fadeTopHouseIcon 1s linear';

                items.forEach((el, index) => {
                    el.style.animation = 'myAnimBack 1s linear';
                })

                setTimeout(() => {
                    onMinScroll();
                }, 1000)
                isMax = true
            } else if (newOffsetY > maxScrollDown && !isMax) {
                newOffsetY = maxScrollDown;

                h1Element.style.animation = 'fadeTopHouseIcon 1s linear';
                access.style.animation = 'fadeTopHouseIcon 1s linear';

                items.forEach((el, index) => {
                    el.style.animation = 'myAnimBack 1s linear';
                })

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
            let parentElement = document.getElementById('section4');

            if (parentElement) {
                let h1Element = parentElement.querySelector('h1');
                let items = parentElement.querySelectorAll('.item');
                let access = parentElement.querySelector('.get-access');

                h1Element.style.animation = 'fadeInSlideDown 1.5s linear';
                access.style.animation = 'fadeInSlideDown 1.5s linear';
                items.forEach((el, index) => {
                    el.style.opacity = 0;
                    setTimeout(() => {
                        el.style.animation = "myAnim 1s linear  0s 1 normal forwards";
                        el.style.opacity = 1
                        setTimeout(() => {
                            let textElement = el.querySelector('.text');
                            textElement.style.animation = 'fadeIn 1.5s ease-in-out'
                            textElement.style.opacity = 1
                        }, 500)

                    }, index * 200);
                })
            }
            animationState = true;
        }
    }, [offsetY]);

    return (<div className={"house"} onWheel={handleWheel}>
        <div className={"header"}>
            <div className="get-access">
                Get Access
            </div>
            <h1>IN MODERN HOUSES</h1>
        </div>
        <div className="content">
            <div className="item">
                <div className="image">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="155"
                        height="154"
                        fill="none"
                        viewBox="0 0 155 154"
                    >
                        <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                            d="M46.94 103.558a21.567 21.567 0 01-11.645 3.347 19.524 19.524 0 01-20.358-18.572A19.527 19.527 0 0135.297 69.76c.459 0 .907.036 1.357.065a17.435 17.435 0 0116.55-13.807c2.676.006 5.308.683 7.653 1.97a32.697 32.697 0 019.067-9.892c11.605-8.41 26.1-8.204 32.378.458a16.592 16.592 0 012.466 13.24c.171-.005.339-.027.513-.027a17.146 17.146 0 0115.673 11.068 18.947 18.947 0 0119.11 18.071 19.04 19.04 0 01-19.847 18.105 20.614 20.614 0 01-15.033-6.307 16.63 16.63 0 01-13.237 6.774 16.045 16.045 0 01-8.15-2.23 21.666 21.666 0 01-2.876 1.995c-8.883 5.128-19.647 3.114-24.042-4.499a14.699 14.699 0 01-1.113-11.813C58.19 85.055 74.48 70.092 90.918 79.97a29.181 29.181 0 00-15.893-6.471c-14.671-.22-29.494 10.78-29.494 20.918a23.349 23.349 0 001.41 9.142z"
                        ></path>
                    </svg>
                </div>
                <div className="text">
                    AIR IONIZATION
                </div>
            </div>
            <div className="item">
                <div className="image">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="155"
                        height="154"
                        fill="none"
                        viewBox="0 0 155 154"
                    >
                        <g clipPath="url(#clip0_401_31)">
                            <mask
                                id="mask0_401_31"
                                style={{maskType: "luminance"}}
                                width="155"
                                height="154"
                                x="0"
                                y="0"
                                maskUnits="userSpaceOnUse"
                            >
                                <path fill="#fff" d="M154.63 0H.63v154h154V0z"></path>
                            </mask>
                            <g
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="4"
                                mask="url(#mask0_401_31)"
                            >
                                <path
                                    d="M20.63 103V51.667h19.25L71.963 26v102.667L39.88 103H20.63zM84.046 57.75S96.88 60.958 96.88 77 84.046 96.25 84.046 96.25M96.88 44.916S116.13 50.264 116.13 77c0 26.736-19.25 32.083-19.25 32.083"></path>
                                <path
                                    d="M109.713 32.083S135.38 39.57 135.38 77c0 37.43-25.667 44.917-25.667 44.917"></path>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_401_31">
                                <path
                                    fill="#fff"
                                    d="M0 0H154V154H0z"
                                    transform="translate(.63)"
                                ></path>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="text">
                    BOSE SOUND
                </div>
            </div>
            <div className="item">
                <div className="image">
                    <svg xmlns="http://www.w3.org/2000/svg" width="154" height="120" viewBox="0 0 154 120" fill="none">
                        <path
                            d="M53.678 92.0835L53.4954 103.831C53.4954 103.831 46.2806 107.556 30.1749 107.374C14.0773 107.183 -0.173879 102.711 0.000609141 93.0006C0.183213 83.2982 26.6527 72.6626 53.3047 68.1948V81.809L24.9849 89.2673C24.9849 89.2673 20.1398 95.4394 26.6527 95.6138C41.472 96.044 53.678 92.0835 53.678 92.0835ZM94.9506 59.8072C94.9506 59.8072 99.0206 66.5311 109.758 65.4071C113.596 65.0013 124.557 51.2208 117.524 29.9617C110.5 8.7025 59.4118 0.120117 59.4118 0.120117V109.816L82.915 119.888L83.2842 20.6326L94.9465 25.4818L94.9506 59.8072ZM118.827 72.1188C118.827 72.1188 103.294 72.8817 89.2128 79.0212C89.0829 79.0862 89.2128 90.5943 89.2128 90.5943L124.934 82.2026L137.526 87.7984L89.0383 104.785V117.648C89.0383 117.648 144.375 99.7366 152.519 92.8423C160.647 85.9237 133.448 68.767 118.827 72.1188Z"
                            fill="white" style={{
                            fill: 'white',
                            fillOpacity: 1,
                        }}/>
                    </svg>
                </div>
                <div className="text">
                    PLAY STATION 5 VR
                </div>
            </div>
        </div>
    </div>)
}
export default House