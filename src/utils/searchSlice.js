import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:'search',
    initialState:{
        data:''
    },
    reducers:{
        getData:(state,action)=>{
            state.data=action.payload;
        }
    }
})

export const{getData} = searchSlice.actions;

export default searchSlice.reducer;