import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
    name: 'baseUnemployed',
    initialState: '',
    reducers:{
        change(state, action){
            return action.payload;
        }
    }
})
export const filterReducer = filterSlice.reducer;
export const { change } = filterSlice.actions;