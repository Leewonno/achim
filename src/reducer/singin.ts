import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SigninState{
    user_id:number,
    user_name:string,
    grade:string,
    userid:string,
}

const initialState:SigninState = {
    user_id:0,
    user_name:'',
    grade:'N',
    userid:'',
}

export const signinSlice = createSlice({
    name:"signin",
    initialState,

    reducers:{
        setUserId:(state, action:PayloadAction<number>)=>{
            state.user_id = action.payload;
        },
        setUserName:(state, action:PayloadAction<string>)=>{
            state.user_name = action.payload;
        },
        setGrade:(state, action:PayloadAction<string>)=>{
            state.grade = action.payload;
        },
        setUserid:(state, action:PayloadAction<string>)=>{
            state.userid = action.payload;
        }
    }
})

export const {setUserId, setUserName, setGrade, setUserid} = signinSlice.actions;
export default signinSlice.reducer;