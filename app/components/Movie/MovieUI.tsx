'use client';
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {useRouter} from "next/navigation";

export default function MovieUI(props: { movie: Movie }) {
    const {movie}=props;
    let router=useRouter();
    const btnDetailHandler=()=>{
        router.push(`movie/${movie._id}`)
    }
    return (<div className="border border-3 p-3 m-4 border-primary">
        <h3> {movie.title}</h3>
        <div>movie director:{movie.director?.name}</div>
        <div>year:{movie.year}</div>
        <div className='ms-auto'>
            <button className='  btn btn-primary'
                    onClick={btnDetailHandler}>Detail</button>

        </div>
    </div>);
}