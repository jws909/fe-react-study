import axios from "axios";
import { useState } from "react";

function Login() {

    let [id, setId] = useState('');
    let [pw, setPw] = useState('');

    return (
        <div>
            <h1>React Spring API Login</h1>

            <p>id : <input type="text" onChange={(e)=>{
                setId(e.target.value);
            }}></input></p>
            <p>pw : <input type="password" onChange={(e)=>{
                setPw(e.target.value);
            }}></input></p>

            <button onClick={()=>{
                //로그인 버튼 클릭

                // 입력된 값 id, pw  <-- useState

                // id, pw 유효성 검사
                // id, pw 취합  -> json format 정리  ->  서버 /api 요청 (post 방식)

                // axios.post( url, dataBody, header ).then().catch()

                axios.post('/api/login',  //요청 경로
                    {                     //body 담아서 보낼 데이터 json format
                        id: id,
                        pw: pw            //id pw  state변수값
                    },
                    {
                        headers: {
                            'Content-Type':'application/json'
                        }
                    }
                ).then(response => {
                    console.log(response.data);
                    console.log(response.data.header);
                    console.log(response.data.header.resultCode);
                    console.log(response.data.header.resultMessage);
                    console.log(response.data.body);

                    // response.data json format

                    if(response.data.header.resultCode == "100"){
                        console.log("jsonformat 응답 확인");
                        console.log("로그인 성공");
                        console.log("성공한 로그인 아이디 : " + response.data.body);
                    }

                    // response.data    loginOk loginNo

                    if(response.data == 'loginOk') {  //로그인 성공
                        //성공시 처리할 로직

                        // 성공했다고 메세지  표시
                        // 성공했으니 메인페이지or마이페이지로 이동
                        // ReactRouter  navigate("/main") navigate("/mypage")

                        console.log("로그인 성공");
                    } else {  //로그인 실패

                        //실패했다. 틀렸다. 다시시도해라
                        console.log('로그인 실패');
                    }

                }).catch(error => {
                    console.log(error);
                });

            }}>로그인</button>

            <div>
                <button onClick={()=>{
                    axios.post('/api/loginCheck')
                        .then(response => console.log(response.data))
                        .catch(error => console.log(error));
                }}>로그인 여부 확인</button>    
            </div>

        </div>
    );
}

export default Login;