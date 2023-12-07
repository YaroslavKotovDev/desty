import Main from "./Main";
import Phone1 from "./Phone1";
import { useEffect, useState } from "react";
import Phone2 from "./phone2";
import Country from "./Country";
import House from "./House";
import House2 from "./House2";
import Materials from "./Materials";

function App() {
    useEffect(() => {
        const sections = document.querySelectorAll('.section');
        let currentIndex = 0;
        let prevIndex = 0;
        let animationFrameId;
        let isScrolling = false;

        function updateSections() {
            const translateY = -currentIndex * 100;
           if(prevIndex === 0 && currentIndex === 1){
               let parentElement = document.getElementById('section1');
               let h1Element = parentElement.querySelector('h1');
               let h1ElementImage = parentElement.querySelector('img');
               h1Element.style.transform = 'translateY(-100vh)';
               h1ElementImage.style.transform = 'translateY(100vh)';
               sleep(700).then(() => {
                   document.body.style.transform = `translateX(${translateY}vw)`;
               });
               parentElement = document.getElementById('section2');
               h1Element = parentElement.querySelector('h1');
               h1ElementImage = parentElement.querySelector('.content img');
               h1Element.style.animation = 'fadeInSlideDown 1.5s linear';
               h1ElementImage.style.animation = 'fadeInSlideUp 1.5s linear';



           }
           if (prevIndex === 1&& currentIndex === 2){
               let parentElement = document.getElementById('section2');
               let h1Element = parentElement.querySelector('h1');
               let h1ElementImage = parentElement.querySelector('.content img');
               h1Element.style.animation = 'none';
               h1ElementImage.style.animation = 'none';
               sleep(200).then(()=>{
                   parentElement = document.getElementById('section3');
                   let mainImageElement = parentElement.querySelector('.content img');
                   let services = parentElement.querySelector('.content .services .service:first-child');
                   let services2 = parentElement.querySelector('.content .services .service:last-child');
                   services2.style.display = "none"
                   services.style.display = "none"
                   mainImageElement.style.margin = 0
                   document.body.style.transform = `translateX(${translateY}vw)`;
                   h1Element = parentElement.querySelector('h1');

                   mainImageElement.style.animation = 'movePhone 2s ease-in-out'
                   mainImageElement.style.transform = 'translateX(-50vh)'
                   services.style.animation = "fadeIn 2s ease-in-out"
                   services.style.display = "flex"

                   services2.style.animation = "fadeIn 2s ease-in-out"
                   services2.style.display = "flex"
               })



           }
            if(prevIndex===2 && currentIndex ===3){
                document.body.style.transform = `translateX(${translateY}vw)`;
                let parentElement = document.getElementById('section4');
                let h1Element = parentElement.querySelector('h1');
                h1Element.style.animation = 'fadeInSlideDown 2s ease-in-out';
                const images = parentElement.querySelectorAll('.content .image-container');
                images.forEach((image, index) => {
                    setTimeout(() => {
                        image.style.animation = "myAnim 1s linear  0s 1 normal forwards";
                        image.style.opacity = 1
                        setTimeout(()=>{
                            let textElement = image.querySelector('.text');
                            textElement.style.animation = 'fadeIn 1.5s ease-in-out'
                            textElement.style.opacity = 1
                        },500)

                    }, index * 200);
                });

            }
            else {
                document.body.style.transform = `translateX(${translateY}vw)`;
            }
        }

        function sleep (time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }
        function smoothScroll() {
            updateSections();
            if (currentIndex === 4) {
                document.body.style.transition = 'transform 1s ease-in-out';
            } else {
                document.body.style.transition = 'none';
            }
            animationFrameId = requestAnimationFrame(smoothScroll);
        }

        function handleWheel(event) {
            if (!isScrolling) {
                isScrolling = true;

                if (event.deltaY > 0 && currentIndex < sections.length - 1) {
                    prevIndex = currentIndex;
                    currentIndex++;
                } else if (event.deltaY < 0 && currentIndex > 0) {
                    prevIndex = currentIndex;
                    currentIndex--;
                }

                cancelAnimationFrame(animationFrameId);
                smoothScroll();

                setTimeout(() => {
                    isScrolling = false;
                }, 1000);
            }
        }

        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.transform = `translateY(${0}vh)`;
        const parentElement = document.getElementById('section1');
        const h1Element = parentElement.querySelector('h1');
        const h1ElementImage = parentElement.querySelector('img');
        h1Element.style.animation = 'fadeIn 2.5s ease-in-out';
        h1ElementImage.style.animation = 'topEarth 2.5s ease-in-out';
        h1ElementImage.style.transform = 'translateY(0)'
    }, []);

    return (
        <>
            <div id={"section1"} className="section">
                <Main />
            </div>
            <div id={"section2"} className="section">
                <Phone1 />
            </div>
            <div id={"section3"} className="section">
                <Phone2 />
            </div>
            <div id={"section4"} className="section">
                <Country />
            </div>
            <div className="section">
                <House />
            </div>
            <div className="section">
                <House2 />
            </div>
            <div className="section">
                <Materials />
            </div>
        </>
    );
}

export default App;
