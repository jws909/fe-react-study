import {createSlice} from '@reduxjs/toolkit';


//날씨 정보 저장 상태관리
// let [weather, setWeather] = useState({weather : 'sunny', temp: 20, hmdt: 40});

let weatherSlice = createSlice({
    name : 'weather',
    initialState : {
        weather : 'sunny',
        temp: 20,
        hmdt: 60
    },
    reducers: {
                        // dispatch(setWeatherInfo({weather : 'cloudy', temp: 15, hmdt: 40}));
        setWeatherInfo(state, action){  //state 현재 원본 상태값(객체라서 주소값), action 전달은 매개변수

            //action.payload.weather
            //action.payload.temp

            let { weather, temp, hmdt } = action.payload;

            // state 값이 객체 타입(참조변수) 인 경우
            // 저장할 값을 return 하지않고, 바로 변수값에 대입하듯이 저장해도 적용이 가능

            state.weather = weather;
            state.temp = temp;
            state.hmdt = hmdt;
        }
    }
});

export let {setWeatherInfo} = weatherSlice.actions;

export default weatherSlice.reducer;