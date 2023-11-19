'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import MovieUI from "@/app/components/Movie/MovieUI";
import {selectCount, selectMovie, useDispatch, useSelector} from "@/lib/redux";


export default function MovieList(props:{
    movies:Movie[],
    editHandler:(movie:Movie)=>void}){
    const {movies}=props;
    return(<div>
        {movies.map((movie)=><MovieUI
                                            key={movie._id}
                                            movie={movie}
                                            editHandler={props.editHandler}/>)}

    </div>)
}