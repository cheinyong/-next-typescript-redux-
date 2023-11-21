import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {fetchAllMovie} from "@/lib/redux/slices/movieSlice/MovieApi";
import {movieSlice, reviewSlice} from "@/lib/redux";
import {
    deleteReview,
    fetchAllReviewByMovieId,
    saveReview,
    updateReview
} from "@/lib/redux/slices/reviewSlice/ReviewApi";
import Review from "@/lib/redux/slices/reviewSlice/Review";

export const getAllReviewByMovieAsync = createAppAsyncThunk(
    'review/getAllReviewByMovieAsync',
    async (movieId:String, thunkAPI) => {
        const reviews = await fetchAllReviewByMovieId(movieId)
        thunkAPI.dispatch(reviewSlice.actions.loadAllReviewByMovie(reviews.data))
        return reviews.data;
    }
)


export const createReviewAsync = createAppAsyncThunk(
    'review/createReviewAsync',
    async (review:any, thunkAPI) => {
        const reviewResponse = await saveReview(review);
        if(reviewResponse.status==201){
            thunkAPI.dispatch(reviewSlice.actions.addReview(reviewResponse.data))
        }

        return reviewResponse.data;
    }
)


export const updateReviewAsync = createAppAsyncThunk(
    'review/updateReviewAsync',
    async (review:any, thunkAPI) => {
        const reviewResponse = await updateReview(review);
        if(reviewResponse.status==200){
            thunkAPI.dispatch(reviewSlice.actions.updateReview(reviewResponse.data))
        }

        return reviewResponse.data;
    }
)

export const deleteReviewAsync = createAppAsyncThunk(
    'review/deleteReviewAsync',
    async (review:any, thunkAPI) => {
        const reviewResponse = await deleteReview(review);
        if(reviewResponse.status==200){
            thunkAPI.dispatch(reviewSlice.actions.deleteReview(reviewResponse.data))
        }

        return reviewResponse.data;
    }
)
