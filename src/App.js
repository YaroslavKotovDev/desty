import Main from "./Main";
import "../src/styles/main.css";
import Phone1 from "./Phone1";
import {useEffect, useMemo, useState} from "react";
import Phone2 from "./phone2";
import Country from "./Country";
import House from "./House";
import House2 from "./House2";
import Materials from "./Materials";
import Experience from "./Experience";
import Lifetime from "./Lifetime";

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [Up, setUp] = useState(false);

    const handleChangeSetUp = (state) => {
        setUp(state);
    }

    const handleMaxScroll = () => {
        if (currentPage >= 8) {
            return false;
        }

        setCurrentPage(currentPage + 1);

        if (Up) {
            setUp(false);
        }
    };

    const handleMinScroll = () => {
        if (currentPage === 0) {
            return false
        }
        if (!Up) {
            setUp(true);
        }

        setCurrentPage(currentPage - 1);
    };


    return (
        <div style={{display: 'flex'}}>
            {currentPage === 0 &&
                <div id={"section1"} className="section">
                    <Main onMaxScroll={handleMaxScroll} up={Up}
                          setUp={handleChangeSetUp}/>
                </div>
            }
            {currentPage === 1 &&
                <div id={"section2"} className="section">
                    <Phone1 onMaxScroll={handleMaxScroll} onMinScroll={handleMinScroll} up={Up}
                            setUp={handleChangeSetUp}/>
                </div>
            }
            {
                currentPage === 2 &&
                <div id={"section3"} className="section">
                    <Phone2 onMaxScroll={handleMaxScroll} onMinScroll={handleMinScroll} up={Up}
                            setUp={handleChangeSetUp}/>
                </div>
            }
            {
                currentPage === 3 &&
                <div id={"section4"} className="section">
                    <Country onMaxScroll={handleMaxScroll} onMinScroll={handleMinScroll} up={Up}
                             setUp={handleChangeSetUp}/>
                </div>
            }
            {
                currentPage === 4 &&
                <div id={"section4"} className="section">
                    <House onMaxScroll={handleMaxScroll} onMinScroll={handleMinScroll} up={Up}
                           setUp={handleChangeSetUp}/>
                </div>
            }
            {
                currentPage === 5 &&
                <div id={"section5"} className="section">
                    <House2 onMaxScroll={handleMaxScroll} onMinScroll={handleMinScroll} up={Up}
                            setUp={handleChangeSetUp}/>
                </div>
            }
            {
                currentPage === 6 &&
                <div id={"section6"} className="section">
                    <Materials onMaxScroll={handleMaxScroll} onMinScroll={handleMinScroll} up={Up}
                               setUp={handleChangeSetUp}/>
                </div>
            }
            {
                currentPage === 7 &&
                <div id={"section7"} className="section">
                    <Experience onMaxScroll={handleMaxScroll} onMinScroll={handleMinScroll} up={Up}
                                setUp={handleChangeSetUp}/>
                </div>
            }
            {
                currentPage === 8 &&
                <div id={"section8"} className="section">
                    <Lifetime onMaxScroll={handleMaxScroll} onMinScroll={handleMinScroll} up={Up}
                              setUp={handleChangeSetUp}/>
                </div>
            }
        </div>
    )
        ;
}

//     return (
//         <div style={{display: 'flex'}}>
//             <div id={"section1"} className="section">
//                 <Main onMaxScroll={handleMaxScroll} up={up} setUp={setUp}/>
//             </div>
//
//             <div id={"section2"} className="section">
//                 <Phone1 onMaxScroll={handleMaxScroll} onMinScroll={handleMinScroll} up={up} setUp={setUp}/>
//             </div>
//             <div id={"section3"} className="section">
//                 <Phone2 onMaxScroll={handleMaxScroll} onMinScroll={handleMinScroll} up={up} setUp={setUp}/>
//             </div>
//             <div id={"section4"} className="section">
//                 <Country />
//             </div>
//             {/*<div className="section">*/}
//             {/*    <House />*/}
//             {/*</div>*/}
//             {/*<div className="section">*/}
//             {/*    <House2 />*/}
//             {/*</div>*/}
//             {/*<div className="section">*/}
//             {/*    <Materials />*/}
//             {/*</div>*/}
//             {/*<div className="section">*/}
//             {/*    <Experience />*/}
//             {/*</div>*/}
//             {/*<div className="section">*/}
//             {/*    <Lifetime />*/}
//             {/*</div>*/}
//         </div>
//     );
// }

export default App;
