import * as Yup from "yup";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import Modal from "react-bootstrap/Modal";
import {Field, Form, Formik} from "formik";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import {Rating} from "@smastrom/react-rating";
import {createReviewAsync, updateReviewAsync, useDispatch} from "@/lib/redux";
import Review from "@/lib/redux/slices/reviewSlice/Review";

const ReviewSchema = Yup.object().shape({
    review: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')

});

export default function ReviewModal(props: {
    show: boolean,
    onHide: () => void,
    addReview: (review:any)=>void,
    movie:Movie,
    editReview?:Review
    }){
    const [rating, setRating] = useState(0)
    const dispatch = useDispatch();

    useEffect(() => {
        if(props.editReview){
            setRating(props.editReview.rating);
        }
        else {
            setRating(0)
        }
    }, [props.editReview]);
    function saveOrUpdateReview(values: FormikValues) {
        let model = {

            ...values,
            rating,
            movie: props.movie._id
        }
        console.log(model);
        if(props.editReview){
            console.log("edit review");
            model._id=props.editReview._id;
            dispatch(updateReviewAsync(model))
                .unwrap()
                .then(response => props.onHide())
        }
        else {
            dispatch(createReviewAsync(model))
                .unwrap()
                .then(response => props.onHide())
        }

    }

    return (<div>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.editReview?"Edit Review":"New Review"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            review:props.editReview?props.editReview.review:""

                        }}
                        validationSchema={ReviewSchema}
                        onSubmit={values => {
                            saveOrUpdateReview(values);

                        }}
                    >
                        {({errors, touched}) => (
                            <Form>

                                <label htmlFor="review">Review</label>
                                <Field name="review"
                                       className={"form-control"}/>
                                {errors.review && touched.review ? (
                                    <div className={"alert alert-danger"}>{errors.review}</div>
                                ) : null}

                                <label >Rating</label>
                                <div >
                                    <Rating style={{ maxWidth: 100}}
                                            value={rating}
                                            onChange={setRating}
                                    />
                                </div>

                                <Modal.Footer>
                                    <button type="submit"
                                            className={"btn btn-primary"}>
                                        {props.editReview?"Update":"Save"}
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