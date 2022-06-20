import React, { FC, useRef, useEffect } from 'react';
import { Formik, Form, useFormik, FormikHelpers } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import TextInput from '../../common/textInput/TextInput';
import { IRegister } from './types';

const Register:FC=()=>{

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
        onSubmit: onHandlerSubmit

    });

    const { errors, touched, handleChange, handleSubmit, setFieldValue, values } = formik;

    return(
        <div className="row">
            <div className="offset-md-3 col-md-6">
                <h1  className="text-center text-primary">Registration</h1>                              
               
                    <form onSubmit={(e) => formik.handleSubmit(e)}>
                        <TextInput
                            label="Email"
                            field='Email'
                            type="text"
                            touched={touched.email}
                            error={errors.email}
                            value={values.email}
                            onChange={handleChange}
                        />

                        <TextInput
                            label="Name"
                            field='Name'
                            type="text"
                            touched={touched.name}
                            error={errors.name}
                            value={values.name}
                            onChange={handleChange}
                        />                     
                       

                        <TextInput

                            label="Password"
                            field='Password'
                            type="password"
                            touched={touched.password}
                            error={errors.password}
                            value={values.password}
                            onChange={handleChange}
                        />

                        <TextInput

                            label="Confirm password"
                            field='Confirm'
                            type="password"
                            touched={touched.confirmPassword}
                            error={errors.confirmPassword}
                            value={values.confirmPassword}
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn btn-primary">Реєстрація</button>                                        
                    </form>                              
            </div>                  
        </div>
    )

};
export default Register;