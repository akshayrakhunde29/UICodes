export default function InstagramFooterComponent()
{
    return(
        <div className="bg-light p-5">
            <ol className="list-unstyled d-flex justify-content-center">
                <li className="me-3">Meta</li>
                <li className="me-3">About</li>
                <li className="me-3">Job</li>
                <li className="me-3">Blog</li>
                <li className="me-3">Help</li>
                <li className="me-3">API</li>
                <li className="me-3">Privacy</li>
                <li className="me-3">Terms</li>
                <li className="me-3">Top Accound</li>
                <li className="me-3">Instagram file</li>
                <li>Location</li>
            </ol>  
            <div className="d-flex justify-content-center">
                <select className="me-3">
                    <option>English</option>
                    <option>Hind</option>
                </select>
                <p>@2022 instagram from meta</p>
            </div> 
        </div>
    )
}