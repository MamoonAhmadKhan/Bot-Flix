import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import geminiMoviesReducer from "./geminiSlice";

const app = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        geminiMovies: geminiMoviesReducer,
    }
});

export default app;