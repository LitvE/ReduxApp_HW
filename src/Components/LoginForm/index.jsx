import React from 'react';
import {Formik, Form, Field} from 'formik';
import {connect} from 'react-redux';
import {authLogin} from "../../actions/index"

function LoginForm(props) {
    console.log('isFetching: ', props.isFetching, ', error: ', props.error);
    const {authLoginAction} = props;
    const initialUserValues ={
        email: '',
        password: '',
    };

    const submitHandler = (values, formikBag) => {
        authLoginAction(values);
        formikBag.resetForm();
    }

    return (
        <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
            {formikProps => {
                return(
                    <Form>
                        <Field name="email"/>
                        <Field type='password' name="password"/>
                        <button type='submit'>Submit</button>
                    </Form>
                )}}
        </Formik>
        
    )
}

const mapStateToProps = (state) => state.authReducerStates;

const mapDispatchToProps = (dispatch) => {
    return {
        authLoginAction: data => {
            dispatch(authLogin(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
