import { configureStore } from "@reduxjs/toolkit";  
import { baseJobsReducer } from './baseJobsSlice'
import { baseUnemployedReduce } from './baseUnemployedSlice'

export const store = configureStore({
    reducer:{
        baseJobs: baseJobsReducer,
        baseUnemployed: baseUnemployedReduce,
    }
})