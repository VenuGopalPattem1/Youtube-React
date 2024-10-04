import { createSlice } from "@reduxjs/toolkit";


export const charSlice =createSlice({
    name:'chat',
    initialState:{
        message:[]
    }
    ,
    reducers:{
        addChatData:(state,action) =>{
            state.message.splice(10,1);
            state.message.unshift(action.payload);
        }
    }
})

export const{addChatData} = charSlice.actions;

export default charSlice.reducer;