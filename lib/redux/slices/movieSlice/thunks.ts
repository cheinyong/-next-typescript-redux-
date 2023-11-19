import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

import { selectMovie } from './selectors'
import { movieSlice } from './movieSlice';
import type { ReduxThunkAction } from '@/lib/redux'
import {deleteMovie, fetchAllMovie, saveMovie, updateMovie} from "@/lib/redux/slices/movieSlice/MovieApi";
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

export const updateMovieAsync = createAppAsyncThunk(
    'movie/updateMovieAsync',
    async (movie:Movie, thunkAPI) => {
        const movies = await updateMovie(movie)
        thunkAPI.dispatch(movieSlice.actions.editMovie(movies.data))
        return movies.data;
    }
)

export const deleteMovieAsync = createAppAsyncThunk(
    'movie/deleteMovieAsync',
    async (movie:Movie, thunkAPI) => {
        const movies = await deleteMovie(movie)
        thunkAPI.dispatch(movieSlice.actions.deleteMovie(movies.data))
        return movies.data;
    }
)