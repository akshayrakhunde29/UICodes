import { useFormik } from 'formik';
import * as yup from 'yup';
import '../potfolioWebsite/index.css';
import axios from 'axios';

function MySkillComponent() {
    return (
        <div>
            <h1 className='text-center'>MY SKILL's</h1>
            <div className='skillImgages text-center'>
                <img className='me-5 mt-5' src='backgroundImg/html.png' alt='HTML Photo' />
                <img className='me-5 mt-5' src='backgroundImg/css.jpg' alt='CSSl Photo' />
                <img className='me-5 mt-5' src='backgroundImg/javascrip.png' alt='JavaScript hoto' />
                <img className='mt-5' src='backgroundImg/bootstrap.jpg' alt='Bootstrap hoto' />
                <img className='me-5 mt-5' src='backgroundImg/react.png' alt='React.js Photo' />
                <img className='me-5 mt-5' src='backgroundImg/nodejs.png' alt='Node.js Photo' />
                <img className='me-5 mt-5' src='backgroundImg/expressjs.png' alt='Express.js Photo' />
                <img className='mt-5' src='backgroundImg/mongodb.png' alt='MongoDB Photo' />
            </div>
        </div>
    )
}

function ContactMe() {
    const formik = useFormik({
        initialValues: {
            Name: '',
            Email: '',
            Subject: '',
            Message: ''
        },
        validationSchema: yup.object({
            Name: yup.string()
                     .required('Name required'),
            Email: yup.string()
                      .required('email required')
                      .email('invalid email'),
            Subject: yup.string()
                        .required('subject required'),
            Message: yup.string()
                        .required('message required')
        }),
        onSubmit: values =>{
            axios.post("http://127.0.0.1:8080/getmessage",values);
            alert("Registered Successfully");
            console.log(values)
        }
    })
    return (
        <div className='mt-5' style={{fontSize: '17px'}}>
            <h1 className='text-center pb-5'>CONTACT ME</h1>
            <div className='row m-0'>
                <div className='col ps-5 pe-5'>
                    <dl>
                        <dt className='mb-2'>Get in Touch</dt>
                        <dd>If You Want to contact me personally you can call me between 10 AM to 6 PM my mobile no. 8329093880</dd>
                        <dt><span className='bi bi-person-fill'></span> Name</dt>
                        <dd className='ms-4'> Akshay Rakhunde</dd>
                        <dt><span className='bi bi-geo-alt-fill'></span> Address</dt>
                        <dd className='ms-4'> Ward-1 At-Mangli Post-Dhanora TQ-Zari Jamni Dist-Yavatmal Maharashtra - 445305</dd>
                        <dt><span className='bi bi-envelope-fill'></span> Gmail</dt>
                        <dd className='ms-4'> rakhundeakshay29@gmail.com</dd>
                    </dl>
                </div>
                <form className='col pe-4 ps-4' onSubmit={formik.handleSubmit}>
                    <h5 className='mb-3'>Message me</h5>
                    <ol className='list-unstyled input-group row'>
                        <li className='input-group col mb-2'>
                            <span className='bi bi-person-fill input-group-text'></span>
                            <input className='form-control' value={formik.values.Name} {...formik.getFieldProps('Name')} name='Name' type='text' placeholder='Name' />
                            <div className='text-danger position-absolute top-100'>{formik.errors.Name && formik.touched.Name?formik.errors.Name:null}</div>
                        </li>
                        <li className='input-group col mb-2'>
                            <span className='bi bi-envelope-fill input-group-text'></span>
                            <input className='form-control' value={formik.values.Email} {...formik.getFieldProps('Enail')} name='Email' type='text' placeholder='Email' />
                            <div className='text-danger position-absolute top-100'>{formik.errors.Email && formik.touched.Email?formik.errors.Email:null}</div>
                        </li>
                        <li className='input-group mt-3 mb-2'>
                            <span className='bi bi-chat-left-quote-fill input-group-text'></span>
                            <input className='form-control' value={formik.values.Subject} {...formik.getFieldProps('Subject')} name='Subject' type='text' placeholder='Subject' />
                            <div className='text-danger position-absolute top-100'>{formik.errors.Subject && formik.touched.Subject?formik.errors.Subject:null}</div>
                        </li>
                        <li className='input-group mt-3 mb-2'>
                            <span className='bi bi-chat-left-dots-fill input-group-text'></span>
                            <textarea className='form-control' value={formik.values.Message} {...formik.getFieldProps('Message')} name='Message' placeholder='Message...'></textarea>
                            <div className='text-danger position-absolute top-100'>{formik.errors.Message && formik.touched.Message?formik.errors.Message:null}</div>
                        </li>
                        <li className='mt-3'><button type='submit' className='btn btn-danger p-2'>Send Message</button></li>
                    </ol>
                </form>
            </div>
        </div>
    )
}

export default function MainComponent() {
    return (
        <main className='border border-dark m-4'>
            <div className='mb-5'>
                <h1 className='text-center p-5'>ABOUT ME</h1>
                <div className='d-flex justify-content-center'>
                    <div className='row'>
                        <div className='col text-center'>
                            <img className='rounded-circle' src='backgroundImg/myPic.jpeg' width='350px' height='350px' alt='OwnerImage' />
                        </div>
                        <div className='col pt-5 ps-5 pe-5'>
                            <h3>Akshay Rakhunde</h3>
                            <h4>I'm a Full Stack Web Developer</h4>
                            <p>A Passionate aspiring Android Developer and am skilled in developing Android applications, shaped by Masai school’s intensive and immersive learning. Look forward to joining a company where I will be able to contribute towards individual and company growth.</p>
                            <button className='btn btn-danger p-2 mt-2'>Download CV <span className='bi bi-chevron-double-right'></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MySkillComponent />
                <ContactMe />
            </div>
        </main>
    )
}