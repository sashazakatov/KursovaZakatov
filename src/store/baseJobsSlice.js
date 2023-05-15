import { createSlice } from "@reduxjs/toolkit";
import { BaseJob } from "Api/BaseJob"
import { Job } from "Api/Job";

const job = new Job({title: 'ffff', description: 'ffff', salary: 1, employer: 'ffff'});
const job2 = new Job({title: 'aaaa', description: 'aaaa', salary: 1, employer: 'aaaa'})

const baseJobs = new BaseJob([job.getInfo(), job2.getInfo()]);

const baseJobsSlice = createSlice({
    name: 'baseJobs',
    initialState: JSON.parse(localStorage.getItem('baseJobs')) ?? baseJobs.jobs,
    reducers:{
        addItem(state, actions){
            return baseJobs.addItem(actions.payload).jobs;
        },
        removeItem(state, actions){
            const aaa = baseJobs.removeItem(actions.payload);
            return aaa;
        }
    }
})

export const { addItem, removeItem } = baseJobsSlice.actions;
export const baseJobsReducer = baseJobsSlice.reducer;