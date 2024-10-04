import { createSlice } from "@reduxjs/toolkit";

export const navSlicer = createSlice({
    name:'nav',
    initialState:{
        navTrigger:true,
    },
    reducers:{
        hanldeNav:(state) =>{
            state.navTrigger=!state.navTrigger;
        },
        stopeNav:(state) =>{
            state.navTrigger=false;
        },
        onNav:(state)=>{
            state.navTrigger=true;
        }
    }
})


export const {hanldeNav,stopeNav,onNav} =navSlicer.actions

export default navSlicer.reducer;