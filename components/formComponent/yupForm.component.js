import { Formik, useFormik } from "formik";
import * as yup from 'yup';

export default function YupFromComponent()
{
    const formik = useFormik({
        initialValues: {
            Name: '',
            Email: ''
        },
        validationSchema: yup.object({
            Name: yup.string()
                      .required('user name required'),
            Email: yup.string()
                       .required('email required')
                       .email('invalid email')
                    
        }),
        onsubmit: values =>{
            alert(JSON.stringify(values));
        }
       
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h1>Registration</h1>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type='text' name="Name" {...formik.getFieldProps('Name')} /></dd>
                    <dd>{formik.errors.Name && formik.touched.Name?formik.errors.Name:null}</dd>
                    <dt>Email</dt>
                    <dd><input type='text' name="Email" {...formik.getFieldProps('Email')} /></dd>
                    <dd>{formik.errors.Email && formik.touched.Email?formik.errors.Email:null}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}