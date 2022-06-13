import React from "react"

export default class RegisterComponent extends React.Component {
    render () {
        return(
            <>
                <div className="d-flex justify-content-center">
                    <div className="border border-dark p-4 mt-4">
                        <h1><span className="bi bi-person-fill"></span>Register</h1>
                        <dl className="form-group">
                            <dt>User Name</dt>
                            <dd><input className="form-control" type="text" placeholder="enter your name" /></dd>
                            <dt>Email Id</dt>
                            <dd><input className="form-control" type= 'email' placeholder="enter your email" /></dd>
                            <dt>Password</dt>
                            <dd><input className="form-control" type= 'password' placeholder="*********" /></dd>
                        </dl>
                        <button className="btn btn-primary w-100">Register</button>
                    </div>
                </div>
            </>
        )
    }
}