import type { ReduxState } from '@/lib/redux'

export const selectMovie = (state: ReduxState) => state.movie.movies;