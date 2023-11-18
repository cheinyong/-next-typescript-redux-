'use client';
import MovieList from "@/app/components/Movie/MovieList";
import {useRouter} from "next/router";
import {selectMovie, useDispatch, useSelector} from "@/lib/redux";
import {useEffect} from "react";
import {getAllMovieAsync} from "@/lib/redux/slices/movieSlice/thunks";


export default function MovieListPage(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllMovieAsync())
    },[])

    const movies = useSelector(selectMovie)

    return(<div>
        <MovieList movies={movies}/>
    </div>)
}