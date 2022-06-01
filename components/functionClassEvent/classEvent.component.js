import React from "react";
export default class EvemtClassComponent extends React.Component{
    InsertClick (event){
        document.write(`
            Button Id: ${event.target.id}<br />
            X Position : ${event.clientX}
        `)
    }
    render(){
        return(
            <div>
                <h1>Event Demo</h1>
                <button id="btnInsert" onClick={this.InsertClick} className="btn btn-primary">Insert</button>
            </div>
        )
    }
}