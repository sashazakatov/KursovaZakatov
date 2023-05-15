import { createSlice } from "@reduxjs/toolkit";

const openModalSlice = createSlice({
    name: 'openModal',
    initialState: false,
    reducers:{
        toggle( state, action){
            return action.payload;
        }
    }
})

export const { toggle } = openModalSlice.actions;
export const openModalReduser = openModalSlice.reducer;