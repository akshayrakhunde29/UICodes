
export default function NetflixRegisterComponent()
{
    return(
        <div className="d-flex justify-content-center text-center">
            <div>
                <p style={{fontSize: '19px'}}>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="input-group input-group-lg">
                    <input type='email' size='40' className="form-control" placeholder="enter your email" />
                    <button className="btn btn-danger p-3">
                        Get Started
                        <span className="bi bi-chevron-right"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}