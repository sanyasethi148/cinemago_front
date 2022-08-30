import React, {useState} from "react";
// import "../styles/Login.css";
import axios from "axios";
import box4 from "../styles/box4.png";

export const Login = () => {
    const [useremail,setEmail] = useState()
    const [password,setPass] = useState();
  async function handleSignin() 
  { 
    const user = {
      useremail,
      password,
    };
    await axios.post("http://localhost:4000/api/signin",user).then(function(response){
      if(response.data.token)
      {
          localStorage.setItem("token",response.data.token);
          window.location.href="/movies";
      }
    }).catch(function(error)
    {
      console.log(error);
    })  
  }
    return (
        <div className="form">
             <img src={box4} alt="" />
        <div className="form-body">      
            <div className="email">
                <label className="form__label" for="email">Email </label>
                <input  type="email" id="email" className="form_input" placeholder="Email" onChange={(e) => {
            setEmail(e.target.value);
          }}/>
            </div>
            <div className="password">
                <label className="form__label" for="password">Password </label>
                <input className="form_input" type="password"  id="password" placeholder="Password" onChange={(e)=>
          {
              setPass(e.target.value);
          }}/>
            </div>
        </div>
        <div class="register">
            <button onClick={() =>
          {
            handleSignin();
          }} type="submit" class="btn">login</button>
        </div>
    </div>      
      );
    };