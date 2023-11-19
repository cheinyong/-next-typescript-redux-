import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

import { selectMovie } from './selectors'
import { movieSlice } from './movieSlice';
import type { ReduxThunkAction } from '@/lib/redux'
import {fetchAllMovie, saveMovie} from "@/lib/redux/slices/movieSlice/MovieApi";
import Movie from "@/lib/redux/slices/movieSlice/Movie";

export const getAllMovieAsync = createAppAsyncThunk(
    'movie/fetchAllMovie',
    async (arg, thunkAPI) => {
        const movies = await fetchAllMovie()
        thunkAPI.dispatch(movieSlice.actions.loadAllMovie(movies.data))
        return movies.data;
    }
)

export const saveMovieAsync = createAppAsyncThunk(
    'movie/saveMovieAsync',
    async (movie:Movie, thunkAPI) => {
        const movies = await saveMovie(movie)
        thunkAPI.dispatch(movieSlice.actions.addMovie(movies.data))
        return movies.data;
    }
)