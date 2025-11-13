'use client'
import { useState } from "react"
import "./form-validation.css"
import { ExclamationIcon } from "@/public/exclamation"
export function Form(){
    const [form, setForm] = useState({name: "", email: "", password: "", Cpassword: ""})
    const [checklist, setChecklist] = useState({name: true, email: true, password: true, SecurePassword: true})
const Checklist = ()=>{
    if(form.name.trim().length == 0){
    setChecklist((prev)=>{
        return {...prev, name: false}
    })
}else{
     setChecklist((prev)=>{
        return {...prev, name: true}
    })
}
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(!emailRegex.test(form.email)){
 setChecklist((prev)=>{
        return {...prev, email: false}
    })
}else{
    setChecklist((prev)=>{
        return {...prev, email: true}
    })
}

if(form.Cpassword != form.password){
     setChecklist((prev)=>{
        return {...prev, password: false}
    })
}else{
     setChecklist((prev)=>{
        return {...prev, password: true}
    })
}
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if(!passwordRegex.test(form.password)){
  setChecklist((prev)=>{
        return {...prev, SecurePassword: false}
    })
}else{
     setChecklist((prev)=>{
        return {...prev, SecurePassword: true}
    })
}
}


const onChange = (e)=>{
   setForm((x)=>{
    return {...x, [e.target.name]: e.target.value}
   })
}

    return(<div className="main">
        <h1>Register</h1>
         <div>
        <label htmlFor = "name">Full name:</label>
        <input type="name" id="name" name="name" value={form.name} onChange={onChange}/>
         {!checklist.name && <ErrorMessage txt={"Enter your name"}/>}
      
        </div>
        <div>
        <label htmlFor  = "Email Address">Email address:</label>
        <input type="email" id="email" name="email" value={form.email} onChange={onChange}/>
        {!checklist.email && <ErrorMessage txt={"Enter a valid email address"}/>}
        </div>
         <div>
        <label htmlFor  = "password">Password:</label>
        <input type="password" id="password" name="password" value={form.password} onChange={onChange}/>
        {!checklist.SecurePassword && <ErrorMessage txt={"Use at least 8 characters, including a capital letter, number, and symbol"}/>}
        </div>
         <div>
        <label htmlFor  = "Confirm password">Confirm password:</label>
        <input type="password" id="Cpassword" name="Cpassword" value={form.Cpassword} onChange={onChange}/>
        {!checklist.password && <ErrorMessage txt={"Password mismatch"}/>}
        </div>
       <div>
        <button onClick={Checklist}>Continue</button>
       </div>
       
    </div>)
}

function ErrorMessage({txt}){
    return( <p>
  <ExclamationIcon
    width={17}
    height={17}
    style={{ fill: '#ff5722', verticalAlign: 'middle' }}
  /> {txt}
</p>)
}