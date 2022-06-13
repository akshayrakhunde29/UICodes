import React from "react";

class SuccessComponent extends React.Component
{
    componentWillMount(){
        alert("success component will mount")
    }
    componentDidMount(){
        alert("success component mounted")
    }
    componentWillUnmount(){
        alert("success conponent will unmount")
    }
    render(){
        return(
            <h2>log in</h2>
        )
    }
}

class ErrorComponent extends React.Component
{
    componentWillMount(){
        alert("Error component will mount")
    }
    componentDidMount(){
        alert("Error component mounted")
    }
    componentWillUnmount(){
        alert("Error conponent will unmount")
    }
    render(){
        return(
            <h2>Invalid Credentials</h2>
        )
    }
}

export default class LifeCycleClassComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            userDetails : {
                userName : 'john',
                password : 'john@12'    
            },
            formDetails : {
                userName : '',
                password : ''
            },
            msg : ''
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.HandleLoginClick = this.HandleLoginClick.bind(this);
    }

    componentWillMount(){
        this.setState({
            msg: 'Provide Credintiala'
        })
    }

    handleUserName(e){
        this.setState({
            formDetails :  {
                userName : e.target.value,
                password : this.state.formDetails.password
            }
        })
    }

    handlePassword(e){
        this.setState({
            formDetails :  {
                userName : this.state.formDetails.userName,
                password : e.target.value
            }
        })
    }

    HandleLoginClick(){
        if(this.state.userDetails.userName===this.state.formDetails.userName && this.state.userDetails.password===this.state.formDetails.password) {
            this.setState({
                msg: <SuccessComponent />
            })
        } else {
            this.setState({
                msg: <ErrorComponent />
            })
        }
    }


    render(){
        return(
            <div className="container-fluid">
                <h1>User Login</h1>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={this.handleUserName} /></dd>
                    <dt>Password</dt>
                    <dd><input type='password' onChange={this.handlePassword} /></dd>
                </dl>
                <button onClick={this.HandleLoginClick}>LogIn</button>
                    <hr />
                    <div>
                        {this.state.msg}
                    </div>
            </div>
        )
    }
}