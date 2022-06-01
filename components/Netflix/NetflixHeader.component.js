
export default function NetflixHeaderComponent()
{
    return(
        <div className="d-flex justify-content-between p-3">
            <div style={{color: 'red', fontSize: '30px'}}>
                NETFLIX
            </div>
            <div className="d-flex">
                <select className="form-select">
                    <option>Language</option>
                    <option>Engligh</option>
                    <option>Hindi</option>
                </select>
                <button className="btn btn-danger ms-3 ps-3 pe-3">SignIn</button>
            </div>
        </div>
    )
}