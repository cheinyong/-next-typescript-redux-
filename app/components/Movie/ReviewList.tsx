import Review from "@/lib/redux/slices/reviewSlice/Review";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import {useState} from "react";
import Swal from "sweetalert2";
import {deleteMovieAsync} from "@/lib/redux";
import withReactContent from "sweetalert2-react-content";

function ReviewUI(props: {
    review: Review,
    showEditReviewModal:(review:Review)=>void,
    deleteReviewHandler:(review:Review)=>void}) {
    let {review}=props
    const [rating, setRating] = useState(review.rating)
    const btnEditHandler=()=>{
        console.log("btn edit")
        props.showEditReviewModal(review)
    }
    const MySwal = withReactContent(Swal)
    const btnDeleteHandler=()=>{
        console.log('btn delete')
        MySwal.fire({
            title: "Are you sure delete ?"+review.review,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                props.deleteReviewHandler(review);
            }

        });
    }
    return (<div className='border border-2 p-3 m-2 border-success'>
        <div>{review.review}</div>
        <div><Rating style={{ maxWidth: 70 }}
                     value={rating}
                      />

        <button type={"button"}
                className={'btn btn-primary'}
                onClick={btnEditHandler}>Edit</button>
        <button type={"button"}
                onClick={btnDeleteHandler}
                className={'btn btn-danger'}>Delete</button>
        </div>
    </div>);
}

export default function ReviewList(props:{
    reviews:Review[],
    showEditReviewModal:(review:Review)=>void,
    deleteReviewHandler:(review:Review)=>void,
}){
    const {reviews}=props;
    return(<div>

        {reviews.map(review=>
                                        <ReviewUI key={review._id}
                                                  review={review}
                                                  showEditReviewModal={props.showEditReviewModal}
                                                    deleteReviewHandler={props.deleteReviewHandler}/>)}


    </div>)
}