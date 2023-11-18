import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */
// import { incrementAsync } from './thunks'
import Movie from "@/lib/redux/slices/movieSlice/Movie";
export interface movieSliceState {
   movies:Movie[];
}

const initialState: movieSliceState = {
    movies:[{
        "_id": "6554e519579476ccd795eca9",
        "title": "update success",
        "director": {
            "name": "cheinyone",
            "phoneNo": "87878787",
            "_id": "6554f4f173c7fb2048e79b26"
        },
        "year": 2002
    },
        {
            "_id": "6554ededd2d82bd4d124bd1a",
            "title": "mobile",
            "director": {
                "name": "rui rui",
                "phoneNo": "0990909",
                "_id": "6554ededd2d82bd4d124bd1b"
            },
            "year": 2023,

        },
        {
            "_id": "6554ee45d2d82bd4d124bd1d",
            "title": "react",
            "director": {
                "name": "aung san",
                "phoneNo": "0990909",
                "_id": "6554ee45d2d82bd4d124bd1e"
            },
            "year": 3030,

        }]
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

    }})