import { createSlice } from "@reduxjs/toolkit";
import { BaseUnemployed } from "Api/BaseUnemployed";
import { Unemployed } from 'Api/Unemployed'

const unemployed = new Unemployed({
    name: 'ffff', 
    age: 10, 
    sity: 'ffff', 
    phoneNumder: 'ffff', 
    email: 'ffff', 
    profession: 'ffff', 
    education: 'ffff', 
    reasonsForDismissal: 'ffff'
});

console.log(unemployed.getInfo());

const baseUnemployed = new BaseUnemployed([unemployed.getInfo()]);

const baseUnemployedSlice = createSlice({
    name: 'baseUnemployed',
    initialState: baseUnemployed.unemployed,
    reducers:{
        addItem(state, action){
            return BaseUnemployed.addItem(action.payload);
        },
        removeItem(state, action){
            return baseUnemployed.removeItem(action.payload);
        },
    }
})

export const { addItem, removeItem } = baseUnemployedSlice.actions;
export const baseUnemployedReduce = baseUnemployedSlice.reducer;