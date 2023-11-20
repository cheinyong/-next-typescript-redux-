import Review from "@/lib/redux/slices/reviewSlice/Review";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import {useState} from "react";
function ReviewUI(props: { review: Review }) {
    let {review}=props
    const [rating, setRating] = useState(review.rating)
    return (<div className='border border-2 p-3 m-2 border-success'>
        <div>{review.review}</div>
        <div><Rating style={{ maxWidth: 70 }}
                     value={rating}
                      /></div>
    </div>);
}

export default function ReviewList(props:{
    reviews:Review[];
}){
    const {reviews}=props;
    return(<div>

        {reviews.map(review=>
                                        <ReviewUI key={review._id} review={review}/>)}


    </div>)
}