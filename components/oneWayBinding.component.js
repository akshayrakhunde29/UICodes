import { useState } from "react";

export default function OneWayBindingComponent()
{
    const[username, SetUserName] = useState();
    function updateName(event){
        SetUserName(event.target.value);    
    }
    return(
        <>
            <div className="container-fluid">
                <h2>User Details</h2>
                    User Name:
                    <input type="text" name="username" onKeyUp={updateName}/>
                    <div>
                        <p>Hello ! {username}</p>
                    </div>
            </div>
        </>
    )
}