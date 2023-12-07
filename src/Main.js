import "../src/styles/main.css";
import earth from "../src/assets/earth.png";
import { useEffect, useState } from "react";

const Main = () => {
    
    return (
        <div className="main-content" >
            <div  className="get-access">
                Get Access
            </div>
            <h1 id={"move-to-top"}>EXPLORE BEYOND BORDERS</h1>
            <img  id={"move-to-bottom"} src={earth} />
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
