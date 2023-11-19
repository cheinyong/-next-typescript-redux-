'use client';
import MovieList from "@/app/components/Movie/MovieList";
import {useRouter} from "next/router";
import {deleteMovieAsync, saveMovieAsync, selectMovie, updateMovieAsync, useDispatch, useSelector} from "@/lib/redux";
import React, {useEffect, useState} from "react";
import {getAllMovieAsync} from "@/lib/redux/slices/movieSlice/thunks";
import Button from 'react-bootstrap/Button';

import * as Yup from 'yup';
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import NewOrUpdateMovieModal from "@/app/movie/NewOrUpdateMovieModal";

const MySwal = withReactContent(Swal)





export default function MovieListPage(){
    const [movieToEdit,newMovieToEdit]=useState(null);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(()=>{
        dispatch(getAllMovieAsync())
    },[])

    const movies = useSelector(selectMovie)
    const editHandler=(movie:Movie)=>{
        console.log("edit handler",movie);
        newMovieToEdit(movie);
        handleShow();

    }
    const deleteHandler=(movie:Movie)=>{
        console.log("delete handler",movie);
        MySwal.fire({
            title: "Are you sure delete ?"+movie.title,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "you successful deleted"+movie.title,
                    icon: "success"
                })
                dispatch(deleteMovieAsync(movie));
            }
        });
    }
    const newMovieHandler=()=>{
        newMovieToEdit(null);
        handleShow();
    }
    return(<div>
        <button className="mt-3 mb-0 btn btn-primary"
                type={"button"}
                onClick={newMovieHandler}>
            New Movie
        </button>
        <NewOrUpdateMovieModal movieToEdit={movieToEdit} show={show} onHide={handleClose}/>
        <MovieList movies={movies}
                   editHandler={editHandler}
                   deleteHandler={deleteHandler}/>
    </div>)
}