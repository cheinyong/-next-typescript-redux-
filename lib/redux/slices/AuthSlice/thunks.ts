import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {fetchAllMovie} from "@/lib/redux/slices/movieSlice/MovieApi";
import {authSlice, movieSlice} from "@/lib/redux";
import {LoginApi} from "@/lib/redux/slices/AuthSlice/AuthApi";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export const LoginAsync = createAppAsyncThunk(
    'auth/LoginAsync',
    async (user:any, thunkAPI) => {
        let userResponse;
        try {
            userResponse=await LoginApi(user)
            if (userResponse.status==200)
            thunkAPI.dispatch(authSlice.actions.login(userResponse.data))
        }
        catch (error) {
            console.log('error case',error.response)
            return thunkAPI.rejectWithValue(error.response.data);
        }

        return userResponse.data;
    }
)