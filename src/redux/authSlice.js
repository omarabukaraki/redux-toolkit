import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:'auth',
    initialState:{isLog:false},
    reducers:{
        login:(state)=>{
            state.isLog = true;
        },
        logout:(state)=>{
            state.isLog = false;
        }
    }
});

export const {login ,logout} = authSlice.actions;

export default authSlice.reducer;