import type { ReduxState } from '@/lib/redux'

export const selectMovie = (state: ReduxState) => {
    return state.movie.movies;
};