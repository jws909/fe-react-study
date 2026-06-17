import { useState } from 'react';
import './Quiz06.css'
import ColorBox from './ColorBox';

function Quiz06() {

    let [ clrList, setClrList ] = useState([ 'black' ]);

    return (
        <>
            <div className='btn-con'>
                <button onClick={() => {
                    let temp = [ 'red', ...clrList ];
                    setClrList(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    let temp = [ 'blue', ...clrList ];
                    setClrList(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let temp = [ 'green', ...clrList ];
                    setClrList(temp);
                }}>앞초록박스추가</button>
                <button onClick={() => {
                    let temp = [ ...clrList, 'red' ];
                    setClrList(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    let temp = [ ...clrList, 'blue' ];
                    setClrList(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    let temp = [ ...clrList, 'green' ];
                    setClrList(temp);
                }}>뒤초록박스추가</button>
                <button onClick={() => {
                    let temp = [ ...clrList ];
                    temp.shift();
                    setClrList(temp);
                }}>앞 박스 삭제</button>
                <button onClick={() => {
                    let temp = [ ...clrList ];
                    temp.pop();
                    setClrList(temp);
                }}>뒤 박스 삭제</button>
            </div>
            <div className='box-con'>
                {
                    clrList.map((color, idx) => {
                        return (
                            <ColorBox bgColor={color} index={idx} list={clrList} setFunc={setClrList} key={idx}></ColorBox>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Quiz06;