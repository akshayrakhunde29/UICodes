export default function CardComponet(props){
    return(
        <div className="contianer-fluid m-2">
            <img src={props.Photo} alt='preview' width='150px' className="card-image-top bg-black"/>
            <div className="card-header" style={{height: '100px'}}>
                <p>{props.Name}</p>
                <p>{props.Price}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-danger">
                    <span className="bi bi-cart4"></span> Add to Card
                </button>
            </div>
        </div>
    )
}