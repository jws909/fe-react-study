import { useState } from "react";

function State01(){

    // React Hooks
    // useState -> 상태를 저장하는 변수, 재렌더링 발생 기준. 재렌더링 상황에서 값이 계속 유지

    // 재렌더링 발생 기준
    // state 변수 set함수를 통해서 값이 변경 된 경우 -> 화면 재렌더링 (re-rendering)

    // const|let [변수명, set함수명] = useState(초기값);

    let [count, setCount] = useState(0);

    let cnt = 0; // 함수에 존재하는 일반 변수

    let [num, setNum] = useState(0);

    return (
        <div>
            <h1>State01</h1>

            <p>{cnt}</p>

            <button onClick={()=>{
                console.log('cnt증가 버튼 클릭');
                cnt++;
                console.log(cnt);

                num++; //state변수 그냥 증가
                console.log(num);
            }}>cnt증가</button>

            <p>{count}</p>
            <button onClick={()=>{
                console.log('count증가 버튼 클릭');
                // count++; //값 증가 O, 재렌더링 X -> set 함수를 사용해서 값을 바꾼게 아니라서
                setCount(count+1); // 재렌더링 발생 조건
                setNum(num+1); // 재렌더링 발생 조건 -> 인근에 있는 재렌더링요소를 모아서 한번에 수행
                console.log(count);
            }}>count증가</button>
        </div>
    )
}

export default State01;