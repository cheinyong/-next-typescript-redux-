import type { ReduxState } from '@/lib/redux'
import Movie from "@/lib/redux/slices/movieSlice/Movie";

export const selectMovie = (state: ReduxState) => {
    return state.movie.movies;
};

export const getMovieById = (movies:Movie[],id: string) =>
    movies.find(movie=>movie._id==id)