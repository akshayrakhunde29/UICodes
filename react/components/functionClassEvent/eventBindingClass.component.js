import React from "react";
export default class EvemtBindingClassComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            msg: 'plese click insert button'
        }
        // this.InsertClick = this.InsertClick.bind(this);
    }
    InsertClick (){
        this.setState({
            msg: 'Record Inserted'
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <h1>Event binding Demo</h1>
                <button onClick={this.InsertClick.bind(this)} className="btn btn-primary">Insert</button>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}