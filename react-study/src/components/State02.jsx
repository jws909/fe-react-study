
function State02(){

    let numArr = [1,1,1,1]; //단순 반복 용도로 사용 (4회 반복)


    //실제 화면에 그려지는 요소로 사용되는 데이터 배열
    let msgArr = ["안녕","하이","반가워","hi"];
    msgArr.push("평안하세요");


    let text = "";
    for(let i=1; i<=5; i++){
        text += "<p>안녕하세요! text for문</p>";
    }

    //element 요소 모아둔 배열
    let eleArr = [];
    for(let i=1; i<=5; i++){
        eleArr.push(<p>안녕하세요! eleArr for</p>);
    }

    return (
        <div>
            {
                numArr.map(()=>{
                    return (
                        <p>안녕하세요! numArr map()</p>
                    )
                })
            }

            <hr/>
            {text}

            <hr/>
            {eleArr}

            <hr/>
            {
                msgArr.map((msg)=>{
                    return (
                        <p>인사 : {msg}</p>
                    )
                })
            }
        </div>
    );
}

export default State02;