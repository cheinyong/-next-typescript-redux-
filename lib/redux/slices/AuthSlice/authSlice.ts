import Movie from "@/lib/redux/slices/movieSlice/Movie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AuthShape {
    token?:string,
}

const initialState : AuthShape = {
    token:undefined
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        login: (state,action:PayloadAction<string>) => {

            state.token =action.payload;
        },
        logout: (state,action:PayloadAction<string>) => {

            state.token =undefined;
        },
    }});