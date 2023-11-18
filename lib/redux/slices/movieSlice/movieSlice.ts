import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */
// import { incrementAsync } from './thunks'
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import {incrementAsync} from "@/lib/redux";
import {getAllMovieAsync} from "@/lib/redux/slices/movieSlice/thunks";
export interface movieSliceState {
   movies:Movie[];
}

const initialState: movieSliceState = {
    movies:[]
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMovieAsync.fulfilled, (state, action) => {
                state.movies=action.payload;
            })

    },
})