import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: "geminiMovies",
    initialState: {
        movieNames: null,
        movieResults: null,
        gptSearch: false,
    },
    reducers: {
        addRecommendedMovies: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        toggleGptSearch: (state) => {
            state.gptSearch = !state.gptSearch;
        }
    }
});

export const { addRecommendedMovies, toggleGptSearch } = geminiSlice.actions;
export default geminiSlice.reducer;