
"use client";
import MovieDetail from "@/app/components/Movie/MovieDetail";
import {
    createReviewAsync, deleteReviewAsync,
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
import Review from "@/lib/redux/slices/reviewSlice/Review";
import IsAuth from "@/app/components/Auth/IsAuth";


 function MoviePage({ params }: { params: { id: string } }){
    const router=useRouter();
    const movies = useSelector(selectMovie);
    const movie = getMovieById(movies,params.id);
    const reviews=useSelector(selectReview)

    const [show, setShow] = useState(false);
    const [reviewToEdit,setReviewToEdit]=useState(null)
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        dispatch(getAllReviewByMovieAsync(movie._id))
    }, []);


    // const btnNewReview=()=>{
    //     console.log('New Review handler');
    //
    //     handleShow();
    //
    //
    // }
    const btnNewHandler=()=>{
        handleShow();
        setReviewToEdit(null)
    }
    const btnBackHandler=()=>{
        router.push('/movie')
    }

    const editReviewHandler=(review:Review)=>{
        handleShow();
        setReviewToEdit(review)
    }

    const deleteReviewHandler=(review:any)=>{
        console.log('Delete review ',review);
        dispatch(deleteReviewAsync(review))

    }
    return(<div>

        <MovieDetail movie={movie} />
        <button
            type={"button"}
            className={"btn btn-primary"}
            onClick={btnNewHandler}>
            New Review
        </button>

        <ReviewModal
            movie={movie}
            //addReview={btnNewReview}
            show={show}
            onHide={handleClose}
            editReview={reviewToEdit}/>


            <ReviewList
                showEditReviewModal={editReviewHandler}
                reviews={reviews}
                deleteReviewHandler={deleteReviewHandler}
            />


        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnBackHandler}>
            Back
        </button>
    </div>)
}

export default IsAuth(MoviePage);