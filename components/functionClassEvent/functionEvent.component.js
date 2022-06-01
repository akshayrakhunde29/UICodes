 export default function FunctionEventComponent()
 {
     function InsertClick(e){
         for(var property in e.target){
             document.write(property + "<br>")
         }
     }
     return(
         <div className="container-fluid">
             <h1>Event Demo</h1>
             <button onClick={InsertClick} className="btn btn-primary">Insert</button>
         </div>
     )
 }