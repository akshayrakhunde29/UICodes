/* import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function LoginComponent(){
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [userdetails, setUserDetails] = useState({UserName:'', Password:''});


    function HandleUserName(e){
        setUserDetails({
            UserName: e.target.value,
            Password: userdetails.Password
        })
    }

    function HandlePassword(e){
        setUserDetails({
            UserName: userdetails.UserName,
            Password: e.target.Password
        })
    }

    function HandleLogin(){
        setCookie('username',userdetails.UserName, {path:'/', expires: new Date("2021-12-20")});
        alert('Cookie Created');
    }

    useEffect(()=>{
         if(cookies.username==undefined) {
             //logic for redirection to login page
         } else {
            // logic for redirection to success page.
         }
    },[])

    function HandleSignout(){
        removeCookie('username');
    }

    return(
        <div className="container-fluid">
            <h2>Admin Login - {cookies.username}  <button onClick={HandleSignout} className="btn btn-link">Signout</button></h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={HandleUserName} /></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={HandlePassword} /></dd>
            </dl>
            <button onClick={HandleLogin} >Login</button>
           
        </div>
    )
} */