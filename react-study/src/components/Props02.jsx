import { useState } from "react";
import Box from "./Box";

function Props02(){

    // 배열의 값이 변경 -> 변경된 값 유지 -> 화면에 재렌더링
    let [textArr, setTextArr] = useState(['아침','점심','저녁']);
    let [detailArr, setDetailArr] = useState(['졸리다','배부르다','피곤하다']);

    return (
        <div>
            <button onClick={()=>{

                //데이터 기반으로 화면에 표시
                //데이터 조작

                //야식 정보 -> 배열에 추가

                //textArr.push('야식');
                let temp = [...textArr]; //깊은복사
                temp.push('야식');
                setTextArr(temp); //렌더링 발생 조건

                //let temp2 = ...
                //재렌더링은 위의 set함수실행시 이미 발생하므로
                //detailArr 참조변수에 추가만해도 반영이 된다.
                detailArr.push('행복하다');
                // setDetailArr(detailArr);
                

                console.log(textArr);
                console.log(detailArr);

                //재렌더링 발생 조건 -> state변수값이 set함수를 통해서 변경

            }}>야식추가버튼</button>
            {
                textArr.map((item, index)=>{
                    return (
                        <Box text={item} detail={detailArr[index]} key={index}></Box>
                    )
                })
            }
        </div>
    );
}

export default Props02;