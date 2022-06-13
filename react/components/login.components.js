export function LoginComponents() {
  /* // Find all property using this following code
  var table = document.createElement("table");
  for (var property in table){
    document.write(property + "<br>");
  } */
    return(
       <div className="d-flex justify-content-center mt-4">
           <div className="border border-dark p-4">
              <h1>Login Page</h1>
              <dl>
                <dt>User name</dt>
                <dd><input type="text" /></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
              </dl>
           </div>
       </div>
    );  
}