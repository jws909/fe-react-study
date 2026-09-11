import {createSlice} from '@reduxjs/toolkit';

let userSlice = createSlice({
    name :  "userId",
    initialState : 'initDefaultId',
    reducers : {  // 각종 함수들 (getter, setter)
        saveUserId(state, action){  // saveUserId('abcd');
            console.log("saveUserId action.payload : " + action.payload);      // action 이라는 객체 안에 payload 키 값 안에 실제 전달할 데이터가 들어간다

            return action.payload;  // 'abcd'           setUserId('abcd')
                        //단순텍스트를 리턴 ---> state 변수값에 저장할 값으로 전달 ---> state에 저장
        },
        clearUserId(state){  // clearUserId();
            return "clear";  // "clear" 텍스트 값 return 0 -> state 에 저장
        },
        saveUserInfo(state, action){  //action.payload  객체(json) 단위로 값 전달 받았다
                        // saveUserId( {id:'adcd', name:'aab'} )

                        // dispatch(saveUserInfo( {id:'abcd', name:'aab'} )

            console.log(action.payload); //{id:'abcd', name:'aab'}
            console.log(action.payload.id);
            console.log(action.payload.name);

            let {id, name} = action.payload;

            return id;
        }
    }
});


// 보유한 수행 함수들을 export 
export let { saveUserId, clearUserId, saveUserInfo } = userSlice.actions;
// actions : 상태관리하는 변수(slice) 에 속해있는 상태변경 함수들이 모여있는 객체
//           화면쪽에서 dispatch()에 전달해서 사용할 Action Creator 들이 모여있음

export default userSlice.reducer;