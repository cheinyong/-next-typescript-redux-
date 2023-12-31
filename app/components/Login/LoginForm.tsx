"use client";
import * as Yup from "yup";
import {Button, Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import {LoginAsync, selectAuth, selectCount, useDispatch, useSelector} from "@/lib/redux";
import {log} from "next/dist/server/typescript/utils";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
import {useRouter, useSearchParams} from "next/navigation";

// or via CommonJS
const MySwal = withReactContent(Swal);
const LoginSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});

export default function LoginForm() {
    const dispatch = useDispatch()
    const auth = useSelector(selectAuth)
    let router = useRouter();
    const searchParams = useSearchParams()

    const redirectUrl = searchParams.get('redirectUrl');
    console.log('RedirectUrl ',redirectUrl);
    function loginAction(values: FormikValues, resetForm) {
        console.log('Submit ', values);
        dispatch(LoginAsync(values))
            .unwrap()
            .then(response =>{console.log("thunk response", response)
                if(redirectUrl)
                {
                    router.push(redirectUrl);

                }
                else
                {
                    router.push('/');
                }} ,
            err=> {
                    console.log('Error case ', err);
                    MySwal.fire('Invalid username or password');
                    resetForm()})
    }

    return (
        <div
            className="modal show container-lg"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik  initialValues={{
                        userName:'',
                        password:'',
                    }}
                             validationSchema={LoginSchema}
                             onSubmit={(values,{resetForm}) => {
                                 loginAction(values,resetForm);

                             }}
                    >
                        {({ errors, touched }) => (
                            <Form>

                                <label htmlFor="userName">Username</label>
                                <Field name="userName"
                                       className={"form-control"}/>
                                {errors.userName && touched.userName ? (
                                    <div className={"alert alert-danger"}>{errors.userName}</div>
                                ) : null}

                                <label htmlFor="password">Password</label>
                                <Field name="password"
                                       type="password"

                                       className={"form-control"}/>

                                {errors.password && touched.password ? (
                                    <div className={"alert alert-danger"}>{errors.password}</div>
                                ) : null}



                                <Modal.Footer>
                                    <button type="submit"
                                            className={"btn btn-primary"}>
                                        Login
                                    </button>

                                </Modal.Footer>
                            </Form>
                        )}


                    </Formik>

                </Modal.Body>

            </Modal.Dialog>
        </div>);

}