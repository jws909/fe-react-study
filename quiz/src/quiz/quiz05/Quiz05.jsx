import { useState } from "react";
import "./Quiz05.css"

function Quiz05() {

    let [ boxList, setBoxList ] = useState([]);
    const addBox = () => {
        let temp = [ ...boxList, 0 ];
        setBoxList(temp);
    };

    return (
        <div>
            <button onClick={addBox} style={{ margin: "10px" }}>추가</button>
            <div className="box-con">
                {
                    boxList.map((_, index) => {
                        return (
                            <div className="box" key={index}>박스</div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Quiz05;