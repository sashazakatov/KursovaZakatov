import { createSlice } from "@reduxjs/toolkit";
import { BaseJob } from "Api/BaseJob"

const baseJobs = new BaseJob( JSON.parse(localStorage.getItem('jobs')) ?? []);

const baseJobsSlice = createSlice({
    name: 'baseJobs',
    initialState: JSON.parse(localStorage.getItem('baseJobs')) ?? baseJobs.jobs,
    reducers:{
        addItem(state, actions){
            return baseJobs.addItem(actions.payload);
        },
        removeItem(state, actions){
            const aaa = baseJobs.removeItem(actions.payload);
            return aaa;
        }
    }
})

export const { addItem, removeItem } = baseJobsSlice.actions;
export const baseJobsReducer = baseJobsSlice.reducer;