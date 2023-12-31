'use client';
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {useRouter} from "next/navigation";

export default function MovieUI(props: {
    movie: Movie ,
    editHandler:(movie:Movie)=>void,
    deleteHandler:(movie:Movie)=>void}) {
    let {movie}=props;
    let router=useRouter();

    const btneditHandler=()=>{
        props.editHandler(movie)
    }
    const btnDeleteHandler=()=>{
        props.deleteHandler(movie)
    }
    const btnDetailHandler=()=>{
        router.push(`movie/${movie._id}`)
    }
    return (<div className="border border-3 p-3 m-4 border-primary">
        <h3> {movie.title}</h3>
        <div>movie director:{movie.director?.name}</div>
        <div>year:{movie.year}</div>
        <div className=''>
            <button className='  btn btn-primary me-4'
                    onClick={btneditHandler}>Edit</button>
            <button className='  btn btn-primary me-4'
                    onClick={btnDeleteHandler}>Delete</button>

            <button className=' ms-auto  btn btn-primary'
                    onClick={btnDetailHandler}>Detail</button>
        </div>
    </div>);
}