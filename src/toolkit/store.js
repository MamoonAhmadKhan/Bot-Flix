import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const app = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    }
});

export default app;