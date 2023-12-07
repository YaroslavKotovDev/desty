import "../src/styles/materials.css"
import house from "../src/assets/house.png";
const Materials = () => {

    return(<div className={"materials"}>
        <div className={"header"}>
            <div className="get-access">
                Get Access
            </div>
            <h1>ECO-FRIENDLY MATERIALS</h1>

        </div>
        <div className="content">
            <div className="grid-view">
                <div className="div1"><img src={house}/></div>
                <div className="div2"><img src={house}/></div>
                <div className="div3"><img src={house}/></div>
                <div className="div4"><img src={house}/></div>
                <div className="div5"><img src={house}/></div>

            </div>
        </div>
    </div>)
}
export default Materials