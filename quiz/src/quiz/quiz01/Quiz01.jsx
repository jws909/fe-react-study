import { useState } from "react";
import './Quiz01.css'

function Quiz01(){

    let [evenNum, setEven] = useState(0);

    return(
        <>
            <div className="container">
                <button onClick={()=>{
                    setEven(evenNum+2);
                }}>짝수출력</button>
                <p>{evenNum}</p>
            </div>
        </>
    );
}

export default Quiz01;