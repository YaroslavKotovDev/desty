import "../src/styles/country.css"
import scotland from "../src/assets/scotland.jpg"
import spain from "../src/assets/spain.jpg"
import italy from "../src/assets/italy.jpg"
import norway from "../src/assets/norway.jpg"
import indonesia from "../src/assets/indonesia.jpg"
import portugal from "../src/assets/portugal.jpg"
import {useEffect, useState} from "react";

const Country = ({onMaxScroll, onMinScroll,  setUp, up}) => {
    const [offsetY, setOffsetY] = useState(0);
    let animationState = false;
    let isMax = 0;
    const maxScrollUp = -200;
    const maxScrollDown = 400;

    const handleWheel = (e) => {
        if (isMax) {
            return false;
        }

        setOffsetY(prevOffsetY => {
            let newOffsetY = prevOffsetY + e.deltaY;
            let parentElement = document.getElementById('section4');
            let h1Element = parentElement.querySelector('h1');
            let getAcccess = parentElement.querySelector('.get-access');



            if (newOffsetY < maxScrollUp && !isMax) {
                newOffsetY = maxScrollUp;

                getAcccess.style.animation = 'fadeTopCountries 2s linear';
                h1Element.style.animation = 'fadeTopCountries 2s ease-in-out';

                const images = parentElement.querySelectorAll('.content .image-container');
                images.forEach((image, index) => {
                    setTimeout(() => {
                        image.style.animation = "myAnimBack 1s linear  0s 1 normal forwards";
                        image.style.opacity = 1
                        setTimeout(() => {
                            let textElement = image.querySelector('.text');
                            textElement.style.animation = 'fadeIn 1.5s ease-in-out'
                            textElement.style.opacity = 1
                        }, 500)

                    }, index * 200);
                });

                setTimeout(() => {
                    onMinScroll();
                }, 2000)

                isMax= true
            } else if (newOffsetY > maxScrollDown && !isMax) {
                newOffsetY = maxScrollDown;

                getAcccess.style.animation = 'fadeTopCountries 2s linear';
                h1Element.style.animation = 'fadeTopCountries 2s ease-in-out';

                const images = parentElement.querySelectorAll('.content .image-container');
                images.forEach((image, index) => {
                    setTimeout(() => {
                        image.style.animation = "myAnimBack 1s linear  0s 1 normal forwards";
                        image.style.opacity = 1
                        setTimeout(() => {
                            let textElement = image.querySelector('.text');
                            textElement.style.animation = 'fadeIn 1.5s ease-in-out'
                            textElement.style.opacity = 1
                        }, 500)

                    }, index * 200);
                });

                setTimeout(() => {
                    onMaxScroll();
                }, 2000)
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
            let h1Element = parentElement.querySelector('h1');
            let getAcccess = parentElement.querySelector('.get-access');

            getAcccess.style.animation = 'fadeInSlideDown 1.5s linear';
            h1Element.style.animation = 'fadeInSlideDown 2s ease-in-out';

            const images = parentElement.querySelectorAll('.content .image-container');
            images.forEach((image, index) => {
                setTimeout(() => {
                    image.style.animation = "myAnim 1s linear  0s 1 normal forwards";
                    image.style.opacity = 1
                    setTimeout(() => {
                        let textElement = image.querySelector('.text');
                        textElement.style.animation = 'fadeIn 1.5s ease-in-out'
                        textElement.style.opacity = 1
                    }, 500)

                }, index * 200);
            });

            animationState = true;
        }

    }, [offsetY]);

    return (
        <div className={"country"} onWheel={handleWheel}>
            <div className={"header"}>
                <div className="get-access">
                    Get Access
                </div>
                <h1>EXPLORE 70 COUNTRIES</h1>
            </div>
            <div className="content">
                <div className="image-container">
                    <img src={scotland}/>
                    <div className="text">
                        Scotland
                    </div>
                </div>
                <div className="image-container">
                    <img src={spain}/>
                    <div className="text">
                        Spain
                    </div>
                </div>
                <div className="image-container">
                    <img src={italy}/>
                    <div className="text">
                        Italy
                    </div>
                </div>
                <div className="image-container">
                    <img src={norway}/>
                    <div className="text">
                        Norway
                    </div>
                </div>
                <div className="image-container">
                    <img src={indonesia}/>
                    <div className="text">
                        Indonesia
                    </div>
                </div>
                <div className="image-container">
                    <img src={portugal}/>
                    <div className="text">
                        Portugal
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Country