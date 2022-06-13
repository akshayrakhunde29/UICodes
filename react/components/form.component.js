import { useState } from "react"

export default function FormComponent ()
{
    const [Name, setName] = useState('');
    const [Passwoed, setPassword] = useState('');
    function HandleClick(){
        document.write(`Name ${Name}<br>Password ${Passwoed}`)
    }
    return(
        <>
            <div className="container-fluid">
                <form>
                    <h1>Login Form</h1>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" onChange={(e)=>{setName(e.target.value)}} value={Name} /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={Passwoed} /></dd>
                    </dl>
                    <button onClick={HandleClick} type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}