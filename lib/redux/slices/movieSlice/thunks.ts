import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

import { selectMovie } from './selectors'
import { movieSlice } from './movieSlice';
import type { ReduxThunkAction } from '@/lib/redux'
import {fetchAllMovie} from "@/lib/redux/slices/movieSlice/MovieApi";

export const getAllMovieAsync = createAppAsyncThunk(
    'movie/fetchAllMovie',
    async (arg, thunkAPI) => {
        const movies = await fetchAllMovie()
        thunkAPI.dispatch(movieSlice.actions.loadAllMovie(movies.data))
        return movies.data;
    }
)
