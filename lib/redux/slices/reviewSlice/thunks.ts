import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {fetchAllMovie} from "@/lib/redux/slices/movieSlice/MovieApi";
import {movieSlice, reviewSlice} from "@/lib/redux";
import {fetchAllReviewByMovieId, saveReview} from "@/lib/redux/slices/reviewSlice/ReviewApi";

export const getAllReviewByMovieAsync = createAppAsyncThunk(
    'movie/getAllReviewByMovieAsync',
    async (movieId:String, thunkAPI) => {
        const reviews = await fetchAllReviewByMovieId(movieId)
        thunkAPI.dispatch(reviewSlice.actions.loadAllReviewByMovie(reviews.data))
        return reviews.data;
    }
)


export const createReviewAsync = createAppAsyncThunk(
    'movie/createReviewAsync',
    async (review:any, thunkAPI) => {
        const reviewResponse = await saveReview(review);
        if(reviewResponse.status==201){
            thunkAPI.dispatch(reviewSlice.actions.addReview(reviewResponse.data))
        }

        return reviewResponse.data;
    }
)
