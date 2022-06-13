import { useState } from 'react';

export default function KeyEventComponent()
{
    const [users] = useState([{UserName: 'john'}, {UserName: 'john12'}, {UserName: 'john_nit'}, {UserName: 'david'}]);
    const [userMassage, setUserMassage] = useState('')
    const [inValid, setIsValid] = useState(true)
    const [showWarning, setShowWarning] = useState(false)

    function verifyUserName(event)
    {
        if(users.UserName == event.target.value)
        {
            setUserMassage('user name taken try another');
            setIsValid(false);
        } else{
            setUserMassage('user name available')
            setIsValid(true);
        }
    }
    function NameBlur(){
        setUserMassage('')
    }
    function verifyUserPass (event){
        if((event.which>=65 && event.which<90) || (event.keyCode>=65 && event.keyCode<=90)){
            setShowWarning(true);
        } else{
            setShowWarning(false)
        }
    }
    return(
        <div className='container-fluid'>
            <h1>Register User</h1>
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input onKeyUp={verifyUserName} onBlur={NameBlur} type='text' />
                </dd>
                <dd className={(inValid==true)?'text-success':'text-danger'}>{userMassage}</dd>
                <dt>Password</dt>
                <dd>
                    <input onKeyPress={verifyUserPass} type='password' />
                </dd>
                <dd className={(showWarning==true)?'d-block':'d-none'}><span className='bi bi-exclamation-triangle-fill'></span> Caps ON</dd>
            </dl>
        </div>
    )
}