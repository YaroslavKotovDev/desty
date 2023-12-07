import "../src/styles/phone2.css"
import phone from "../src/assets/phone.png"
import attribute1 from "../src/assets/attribute1.jpg"
import attribute2 from "../src/assets/attribute2.jpg"
import vue from "../src/assets/vuelink.png";
import easyjet from "../src/assets/easyjet.png";
import ryanair from "../src/assets/ryanair.png";
import british from "../src/assets/british.png";
import wizzair from "../src/assets/wizzair.png";
import nike from "../src/assets/nike.png";
import gymshard from "../src/assets/gymshark.png";
import decathlon from "../src/assets/decathlon.png";
import addidas from "../src/assets/addidas.png";
import benefit2 from "../src/assets/benefit2.png"
import benefit1 from "../src/assets/benefit1.png"
const Phone1 = () => {

    return (<div className={"phone2"}>
        <div className={"header"}>
            <div className="get-access">
                Get Access
            </div>
            <h1 >EXPLORE BEYOND BORDERS</h1>
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

    </div>)
}
export default Phone1