import { configureStore } from "@reduxjs/toolkit";  
import { baseJobsReducer } from './baseJobsSlice'

export const store = configureStore({
    reducer:{
        baseJobs: baseJobsReducer,
    }
})