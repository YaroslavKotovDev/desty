import "../src/styles/country.css"
import scotland from "../src/assets/scotland.jpg"
import spain from "../src/assets/spain.jpg"
import italy from "../src/assets/italy.jpg"
import norway from "../src/assets/norway.jpg"
import indonesia from "../src/assets/indonesia.jpg"
import portugal from "../src/assets/portugal.jpg"
const Country = () => {

    return(<div className={"country"}>
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
    </div>)
}
export default Country