import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SigninState{
    name:string,
    userid:string,
}

const initialState:SigninState = {
    name:'',
    userid:'',
}

export const signinSlice = createSlice({
    name:"signin",
    initialState,

    reducers:{
        setName:(state, action:PayloadAction<string>)=>{
            state.name = action.payload;
        },
        setUserId:(state, action:PayloadAction<string>)=>{
            state.userid = action.payload;
        }
    }
})

export const {setName, setUserId} = signinSlice.actions;
export default signinSlice.reducer;