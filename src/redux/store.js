import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./CounterSlice";

export default configureStore({
    reducer:todoReducer
})