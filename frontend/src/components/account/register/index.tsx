import React, { FC, useRef, useEffect } from 'react';
import { Formik, Form, useFormik, FormikHelpers, FormikProvider } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import TextInput from '../../common/textInput/TextInput';
import { IRegister } from './types';
import {RegisterValidationSchema} from './validation';

const Register: FC = () => {

    const initialValues: IRegister = {

        email: "",
        name: "",
        password: "",
        confirmPassword: ""
    };

    const onHandlerSubmit = (values: IRegister, { setFieldError }: FormikHelpers<IRegister>) => {

        console.log("Values registration: ", values);

    };

    const formik = useFormik({

        initialValues: initialValues,
        onSubmit: onHandlerSubmit,
        validationSchema:RegisterValidationSchema
        
    });

    const { errors, touched, handleChange, values, handleSubmit, setFieldValue } = formik;

    return (
        <div className="row">
            <div className="offset-md-3 col-md-6">
                <h1 className="text-center text-primary">Registration</h1>

                <FormikProvider value={formik}>

                    <Form onSubmit={handleSubmit}>

                        <TextInput
                            label="Email"
                            field='Email'
                            type="text"
                            touched={touched.email}
                            error={errors.email}
                            value={values.email}
                            onChange={(e) => setFieldValue('email', e.target.value)}
                        />

                        <TextInput
                            label="Name"
                            field='Name'
                            type="text"
                            touched={touched.name}
                            error={errors.name}
                            value={values.name}
                            onChange={(e) => setFieldValue('name', e.target.value)}
                        />


                        <TextInput
                            label="Password"
                            field='Password'
                            type="password"
                            touched={touched.password}
                            error={errors.password}
                            value={values.password}
                            onChange={(e) => setFieldValue('password', e.target.value)}
                        />

                        <TextInput
                            label="Confirm password"
                            field='Confirm'
                            type="password"
                            touched={touched.confirmPassword}
                            error={errors.confirmPassword}
                            value={values.confirmPassword}
                            onChange={(e) => setFieldValue('confirmPassword', e.target.value)}
                        />

                        <button type="submit"
                            className="btn btn-primary"
                        >Registration</button>
                    </Form>
                </FormikProvider>
            </div>
        </div>
    )

};
export default Register;