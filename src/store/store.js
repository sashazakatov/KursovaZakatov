import { configureStore } from "@reduxjs/toolkit";

import { baseJobsReducer } from './baseJobsSlice';
import { baseUnemployedReduce } from './baseUnemployedSlice';
import { filterReducer } from './filterSlice';
import { openModalReduser } from './openModalSlice';

export const store = configureStore({
    reducer:{
        baseJobs: baseJobsReducer,
        baseUnemployed: baseUnemployedReduce,
        filter: filterReducer,
        openModal: openModalReduser,
    }
})