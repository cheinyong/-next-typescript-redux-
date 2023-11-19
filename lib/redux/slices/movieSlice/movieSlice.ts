import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */
// import { incrementAsync } from './thunks'
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import {incrementAsync, ReduxState} from "@/lib/redux";
import {getAllMovieAsync} from "@/lib/redux/slices/movieSlice/thunks";
export interface MovieSliceState {
    movies:Movie[],
}

const initialState : MovieSliceState = {
    movies:[]
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        loadAllMovie: (state,action:PayloadAction<Movie[]>) => {

            state.movies =action.payload;
        },
        addMovie: (state,action:PayloadAction<Movie>) => {

            state.movies =[...state.movies,action.payload]
        },
        editMovie: (state,action:PayloadAction<Movie>) => {

            state.movies =state.movies.map(movie=>
                                            movie._id==action.payload._id?
                                                action.payload:movie)
        }},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMovieAsync.fulfilled, (state, action) => {
                //state.movies=action.payload;
            })

    },
});

