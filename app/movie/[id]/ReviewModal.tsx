import * as Yup from "yup";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import Modal from "react-bootstrap/Modal";
import {Field, Form, Formik} from "formik";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import {Rating} from "@smastrom/react-rating";

const ReviewSchema = Yup.object().shape({
    review: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),


});

export default function ReviewModal(props: {
    show: boolean,
    onHide: () => void,
    }){
    const [rating, setRating] = useState(0)

    return (<div>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>New Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            review:''

                        }}
                        validationSchema={ReviewSchema}
                        onSubmit={values => {
                            let modal= {
                                ...values,
                                rating
                            }
                            console.log(modal)
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

                                <label htmlFor="rating">Rating</label>
                                <div id="rating">
                                    <Rating style={{ maxWidth: 70 }}
                                            value={rating}
                                            onChange={setRating}
                                    />
                                </div>

                                <Modal.Footer>
                                    <button type="submit"
                                            className={"btn btn-primary"}>
                                        Save
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