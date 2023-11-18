import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

import { selectMovie } from './selectors'
import { movieSlice } from './movieSlice';
import type { ReduxThunkAction } from '@/lib/redux'
import {fetchAllMovie} from "@/lib/redux/slices/movieSlice/MovieApi";

export const getAllMovieAsync = createAppAsyncThunk(
    'movie/getAllMovieAsync',
    async () => {
        const movies = await fetchAllMovie()
        return movies.data
    }
)
