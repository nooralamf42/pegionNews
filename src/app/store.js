import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "../feature/news/newsSlice";

export const store = configureStore({
    reducer : newsSlice
})