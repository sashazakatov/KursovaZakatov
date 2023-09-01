import { createSlice } from "@reduxjs/toolkit";
import { BaseUnemployed } from "Api/BaseUnemployed";
const baseUnemployed = new BaseUnemployed( JSON.parse(localStorage.getItem('unemployed')) ?? []);
const baseUnemployedSlice = createSlice({
    name: 'baseUnemployed',
    initialState: JSON.parse(localStorage.getItem('baseUnemployed')) ?? baseUnemployed.unemployed,
    reducers:{
        addItem(state, action){
            return baseUnemployed.addItem(action.payload);
        },
        removeItem(state, action){
            return baseUnemployed.removeItem(action.payload);
        },
    }
})
export const { addItem, removeItem } = baseUnemployedSlice.actions;
export const baseUnemployedReduce = baseUnemployedSlice.reducer;