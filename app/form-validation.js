import "./form-validation.css"
export function Form(){
    
    return(<div className="main">
        <h1>Register</h1>
         <div>
        <label htmlFor = "name">Full name:</label>
        <input type="name" id="name" name="name"/>
        </div>
        <div>
        <label htmlFor  = "Email Address">Email address:</label>
        <input type="email" id="email" name="email"/>
        </div>
         <div>
        <label htmlFor  = "password">Password:</label>
        <input type="password" id="password" name="password"/>
        </div>
         <div>
        <label htmlFor  = "Confirm password">Confirm password:</label>
        <input type="password" id="Cpassword" name="Cpassword"/>
        </div>
       <div>
        <button>Continue</button>
       </div>
       
    </div>)
}