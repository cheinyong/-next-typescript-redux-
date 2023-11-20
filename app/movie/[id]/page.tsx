
"use client";
import MovieDetail from "@/app/components/Movie/MovieDetail";
import {
    getAllMovieAsync, getAllReviewByMovieAsync,
    getMovieById,
    movieSlice,
    selectMovie,
    selectReview,
    useDispatch,
    useSelector
} from "@/lib/redux";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import ReviewList from "@/app/components/Movie/ReviewList";
import ReviewModal from "@/app/movie/[id]/ReviewModal";


export default function MoviePage({ params }: { params: { id: string } }){
    const router=useRouter();
    const movies = useSelector(selectMovie);
    const movie = getMovieById(movies,params.id);
    const reviews=useSelector(selectReview)

    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        dispatch(getAllReviewByMovieAsync(movie._id))
    }, []);


    const btnNewHandler=()=>{
        handleShow();
    }
    const btnBackHandler=()=>{
        router.push('/movie')
    }
    return(<div>

        <MovieDetail movie={movie} />
        <button
            type={"button"}
            className={"btn btn-primary"}
            onClick={btnNewHandler}>
            New Review
        </button>



            <ReviewList reviews={reviews}/>
        <ReviewModal show={show} onHide={handleClose}/>

        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnBackHandler}>
            Back
        </button>
    </div>)
}