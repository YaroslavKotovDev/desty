import "../src/styles/house.css"
import houseplan from "../src/assets/housePlan.png"
const House2 = () => {

    return(<div className={"house2"}>
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