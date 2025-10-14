import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: "geminiMovies",
    initialState: {
        movieNames: null,
        movieResults: null,
        gptSearch: false,
        gptSubmit: true,
    },
    reducers: {
        addRecommendedMovies: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        toggleGptSearch: (state) => {
            state.gptSearch = !state.gptSearch;
        },
        toggleGptSubmit: (state) => {
            state.gptSubmit = !state.gptSubmit;
        }
    }
});

export const { addRecommendedMovies, toggleGptSearch, toggleGptSubmit } = geminiSlice.actions;
export default geminiSlice.reducer;