import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./mySlice";

export default configureStore({
    reducer: CounterSlice
})