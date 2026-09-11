import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { saveUserId, clearUserId, saveUserInfo, setWeatherInfo } from '../store/store';
import { saveUserId, clearUserId, saveUserInfo } from "../store/userSlice";
import { setWeatherInfo } from "../store/weatherSlice";

function Login() {

    /* 
        로그인 시도 -> BE API -> 성공결과 응답 -> 성공하면 accessToken

        로그인성공? -> accessToken 저장
                    -> 로그인한 사용자 정보 전역상태관리(redux)에 등록 사용

        페이지 이동 등 다른페이지에서도 로그인여부 체크? --> redux 등록된 사용자 정보

        리덕스툴킷(redux toolkit) 라이브러리 설치

        npm install @reduxjs/toolkit
        npm install react-redux

    */

    let [id, setId] = useState('');
    let [pw, setPw] = useState('');



    // redux 개념 적용
    // redux 에 저장된 상태값에 접근 사용

    let reduxState = useSelector((state)=>{return state});

    console.log(reduxState);
    console.log(reduxState.user);

    let user = useSelector((state)=>{return state.user}); //getter 값을 읽어오기
    console.log(user);


    // redux 저장용으로 전체 상태관리 store 에 등록된 slice 값을 변경하는 action을 담는 함수를 호출하려면?
    // 단순함수호출X -> dispatch 에 감싸서 요청!    dispatch( 호출할함수(매개변수) )

    let dispatch = useDispatch();

    // let navigate = useNavigate();
    // navigate("/main");

    let weather = useSelector((state)=>{return state.weather}); //store 에 등록된 weather 상태값
    console.log(weather);

    return (
        <div>

            <div>
                <h3>redux 값 테스트</h3>
                <div>
                    <button onClick={()=>{
                        //saveUserId('abcd'); 단순함수호출XX
                        dispatch(saveUserId('abcd')); // redux 관련 action 생성 호출
                    }}>SaveUserId호출</button>

                    <button onClick={()=>{
                        dispatch(clearUserId());
                    }}>ClearUserId호출</button>

                    <button onClick={()=>{
                        dispatch(saveUserInfo({id:'abcd', name:'aab'}));
                    }}>SaveUserInfo호출</button>

                    <button onClick={()=>{
                        dispatch(setWeatherInfo({weather : 'cloudy', temp: 15, hmdt: 40}));
                    }}>SetWeatherInfo호출</button>
                </div>
            </div>

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

            <div>
                <button onClick={()=>{

                    axios.post('/api/loginJWT',        //요청 경로
                    {               //body 담아서 보낼 데이터 json format  
                        id: id,
                        pw: pw      //id pw  state변수값
                    },
                    {
                        headers: {
                            'Content-Type':'application/json'
                        }
                    }
                ).then((response)=>{
                    console.log(response.data);

                    //응답 받은 데이터에서 JWT 토큰 -> 관리/보관/저장

                    let token = response.data;  //accessToken 

                    // 관리 -> 저장
                    // state -> props
                    // 전역상태관리 (Redux)
                    // localStorage
                    // cookie

                    // apiResponse -> header resultCode 참고

                    if(token != null && token != ''){  //단순텍스트로 응답
                        //발급된 엑세스토큰 전달 받음
                        // 저장 -> 다음에 요청할때 토큰값을 같이 담아서 요청 (자유이용권 제시 입장)

                        // 토큰 -> localStorage
                        // localStorage.setItem(key, value);
                        // localStorage.getItem(key)
                        // localStorage.removeItem(key)
                        localStorage.setItem("token", token);  //토큰 저장

                        //어떤 사용자가 로그인한 상태인가? -> 유지 -> 전역상태관리에 등록
                        dispatch( saveUserId(id) );

                        //다른 페이지에서는 userid로 확인
                    }
                    
                    //로그인 성공? 실패? 확인 -> 이후 처리


                }).catch( error => console.log(error) )}
            }>로그인 JWT 방식</button>
            </div>

            <div>
                <button onClick={()=>{

                    let token = localStorage.getItem("token");

                    axios.post(
                        "/api/loginCheckJWT",
                        {},
                        {
                            headers: {
                                'Content-Type':'application/json',
                                'Authorization': "Bearer " + token
                            }
                        }
                    ).then(response => console.log(response.data))
                    .catch(error => console.log(error) )
                }}>로그인 여부 JWT 토큰 인식 확인</button>
            </div>

        </div>
    );
}

export default Login;