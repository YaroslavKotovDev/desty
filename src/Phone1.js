import "../src/styles/phone1.css"
import phone from "../src/assets/phone.png"
import {useEffect, useRef} from "react";
const Phone1 = () => {
    const animatedRef = useRef(null);



    return(<div className={"phone1"} ref={animatedRef}>
        <div className="get-access">
            Get Access
        </div>
        <h1 >EXPLORE BEYOND BORDERS</h1>
        <div className="content">
            <img src={phone}/>
        </div>

    </div>)
}
export default Phone1