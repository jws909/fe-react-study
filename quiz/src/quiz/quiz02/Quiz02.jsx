import { useState } from 'react';
import './Quiz02.css'

function Quiz02(){

    const cntArr = ['하나','둘','셋'];
    let [cntIdx, setIdx] = useState(0);

    const raiseCnt = ()=>{
        // setIdx((cntIdx+1)%cntArr.length);
        setIdx(prev => (prev + 1) % cntArr.length);
    };

    return (
        <>
            <div className="quiz2-container">
                <p id="view">{cntArr[cntIdx]}</p>
                <button id="count" onClick={raiseCnt}>변경버튼</button>
            </div>
        </>
    );
}

export default Quiz02;