'use client';
import MovieList from "@/app/components/Movie/MovieList";
import {useRouter} from "next/router";
import {saveMovieAsync, selectMovie, updateMovieAsync, useDispatch, useSelector} from "@/lib/redux";
import React, {useEffect, useState} from "react";
import {getAllMovieAsync} from "@/lib/redux/slices/movieSlice/thunks";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import NewOrUpdateMovieModal from "@/app/components/Movie/NewOrUpdateMovieModal";
import {Field, Form, Formik, FormikValues} from "formik";

import * as Yup from 'yup';
import Movie from "@/lib/redux/slices/movieSlice/Movie";



const MovieSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    year: Yup.number()
        .required('Required'),
    director: Yup.string()
        .required('Required'),
});


function NewOrUpdateMovieModal(props: {
    show: boolean,
    onHide: () => void,
    movieToEdit?:Movie}) {
    const dispatch = useDispatch();

    function saveMovieAction(values: FormikValues) {
        let director = {
            name: values.director
        }
        let movie: Movie = {
            title: values.title,
            year: values.year,
            director
        }
        console.log("create movie", movie)
        dispatch(saveMovieAsync(movie)).unwrap()
            .then(result => {
                console.log("redux action result", result);
                props.onHide()
            })
    }
    function updateMovieAction(values: FormikValues) {
        console.log('form values ',values);
        let movieToUpdate:Movie={
            ...props.movieToEdit,
        }

        movieToUpdate.title=values.title
        movieToUpdate.year= values.year;
        movieToUpdate.director={
            ...props.movieToEdit?.director,
            name:values.director
        }
        console.log("update movie", movieToUpdate)
        dispatch(updateMovieAsync(movieToUpdate)).unwrap()
            .then(result => {
                console.log("redux action result", result);
                props.onHide()
            })
    }


    function saveOrUpdateMovie(values:FormikValues) {

        if(props.movieToEdit){
            updateMovieAction(values)
        }
        else {
            saveMovieAction(values);
        }

    }
     return (<div>
             <Modal show={props.show} onHide={props.onHide}>
                 <Modal.Header closeButton>
                     <Modal.Title>{props.movieToEdit?"Update":"New"}</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                     <Formik
                         initialValues={{
                             title:props.movieToEdit?props.movieToEdit.title:" ",
                             year:props.movieToEdit?props.movieToEdit.year:" ",
                             director:props.movieToEdit?props.movieToEdit.director?.name:' ',
                         }}
                         validationSchema={MovieSchema}
                         onSubmit={values => {
                             saveOrUpdateMovie(values);
                                                  }}
                     >
                         {({errors, touched}) => (
                             <Form>

                                 <label htmlFor="title">Title</label>
                                 <Field name="title"
                                        className={"form-control"}/>
                                 {errors.title && touched.title ? (
                                     <div className={"alert alert-danger"}>{errors.title}</div>
                                 ) : null}

                                 <label htmlFor="year">Year</label>
                                 <Field name="year"
                                        className={"form-control"}/>
                                 {errors.year && touched.year ? (
                                     <div className={"alert alert-danger"}>{errors.year}</div>
                                 ) : null}


                                 <label htmlFor="director">director</label>
                                 <Field name="director"
                                        className={"form-control"}/>
                                 {errors.director && touched.director ? (
                                     <div className={"alert alert-danger"}>{errors.director}</div>
                                 ) : null}


                                 <Modal.Footer>
                                     <button type="submit"
                                             className={"btn btn-primary"}>
                                         {props.movieToEdit?"Update":"Save"}
                                     </button>
                                     <Button onClick={props.onHide}>
                                         Cancel
                                     </Button>
                                 </Modal.Footer>
                             </Form>
                         )}


                     </Formik>

                 </Modal.Body>

             </Modal>
         </div>
     )
 }

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
                   editHandler={editHandler}/>
    </div>)
}