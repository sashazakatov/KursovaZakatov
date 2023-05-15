import { configureStore } from "@reduxjs/toolkit";

import { baseJobsReducer } from './baseJobsSlice';
import { baseUnemployedReduce } from './baseUnemployedSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
    reducer:{
        baseJobs: baseJobsReducer,
        baseUnemployed: baseUnemployedReduce,
        filter: filterReducer,
    }
})