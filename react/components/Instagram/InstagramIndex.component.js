import InstagramFooterComponent from "./InstagramFooter.component";
import InstagramLeftComponent from "./Instagramleft.component";
import InstagramRightComponent from "./InstagramRight.component";

export default function InstagramIndexComponent()
{
    return(
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{width: '100%', height: '600px'}}>
                <InstagramLeftComponent />
                <InstagramRightComponent />
            </div>
            <InstagramFooterComponent />
        </div>
    )
}