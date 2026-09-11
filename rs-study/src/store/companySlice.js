import {createSlice} from '@reduxjs/toolkit';

//-----------------------------------------------------------
//회사 정보 저장 상태관리

let companySlice = createSlice({
    name : "company",
    initialState : {
        name:"hicorp",
        address:"서울 강남",
        tel:"02-123-1234"
    },
    reducers : {
        changeTel(state, action){
            
            //state.tel = "02-123-5678";

            // dispatch(changeTel('02-333-4444'));
            state.tel = action.payload;

            // dispatch(changeTel({tel:'02-333-4444'}));
            state.tel = action.payload.tel;

        }
    }
})

export let {changeTel} = companySlice.actions;

export default companySlice.reducer;