 export default function InstagramRightComponent()
 {
     return(
         <div>
            <div className="text-center border border-dark p-4 bg-light">
                <h1>Instagram</h1>
                <ol className="input-form list-unstyled">
                    <li className="m-3"><input type='text' size='27' className="form-control" placeholder='enter your email' /></li>
                    <li className="m-3"><input type='password' className="form-control" placeholder="enter your password" /></li>
                    <li className="m-3"><button className="btn btn-primary w-100">Log In</button></li>
                </ol>
                <hr />
                <h5><span className="bi bi-facebook"></span> LogIn with Facebook</h5>
                <p>Forgot Password?</p>
            </div>           
            <div className="bg-light border border-dark mt-3 p-2 text-center">
                <p>Don't have an account? Sign up</p>
            </div>
         </div>
     )
 }