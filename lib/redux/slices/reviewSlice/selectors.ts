import type { ReduxState } from '@/lib/redux'
import Movie from "@/lib/redux/slices/movieSlice/Movie";

export const selectReview = (state: ReduxState) => {
    return state.review.reviews;
};