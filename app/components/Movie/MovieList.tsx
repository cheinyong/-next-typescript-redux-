'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import MovieUI from "@/app/components/Movie/MovieUI";
import {selectCount, selectMovie, useDispatch, useSelector} from "@/lib/redux";


export default function MovieList(){
    const dispatch = useDispatch()
    const movies = useSelector(selectMovie)
    return(<div>
        {movies.map((movie)=><MovieUI key={movie._id} movie={movie}/>)
        }

    </div>)
}