import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../slices/slice";
export const store = configureStore({
    reducer:bookReducer,
})