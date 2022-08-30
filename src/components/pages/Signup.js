import React ,{useState} from "react";
import "../styles/Signup.css"
import box2 from "../styles/box2.png"
import axios from "axios";


export const Signup = () => {
    const [firstname,setFirst] = useState()
    const [lastname,setLast] = useState()
    const [useremail,setEmail] = useState()
    const [phone,setPhone] = useState()
    const [password,setPass] = useState()
    const [confirmpassword,setConfirm] = useState();

  async function handleSignin() 
  { 
    const user = {
      firstname,
      lastname,
      useremail,
      phone,
      password,
      confirmpassword,
    };
    await axios.post("http://localhost:4000/api/register",user).then(function(response){
     window.location.href="/login";
    }).catch(function(error)
    {
      console.log(error);
    })  
  }
    return (
    <div className="form">
        <img src={box2} alt="" />
    <div className="form-body">
        <div className="username">
            <label className="form__label" for="firstName">First Name </label>
            <input className="form_input" type="text" id="firstName" placeholder="First Name" onChange={(e) => {
            setFirst(e.target.value);
          }}/>
        </div>
        <div className="lastname">
            <label className="form__label" for="lastName">Last Name </label>
            <input  type="text" name="" id="lastName"  className="form_input"placeholder="LastName" onChange={(e) => {
            setLast(e.target.value);
          }}/>
        </div>
        <div className="email">
            <label className="form__label" for="email">Email </label>
            <input  type="email" id="email" className="form_input" placeholder="Email" onChange={(e) => {
            setEmail(e.target.value);
          }}/>
        </div>
        <div className="phone">
            <label className="form__label" for="phone">phone </label>
            <input className="form_input" type="string" id="phone" placeholder="Phone" onChange={(e) => {
            setPhone(e.target.value);
          }}/>
        </div>
        <div className="password">
            <label className="form__label" for="password">Password </label>
            <input className="form_input" type="password"  id="password" placeholder="Password" onChange={(e) => {
            setPass(e.target.value);
          }}/>
        </div>
        <div className="confirm-password">
            <label className="form__label" for="confirmPassword">Confirm Password </label>
            <input className="form_input" type="password" id="confirmPassword" placeholder="Confirm Password" onChange={(e) => {
            setConfirm(e.target.value);
          }}/>
        </div>
    </div>
    <div class="register">
        <button onClick={() =>
          {
            handleSignin();
          }} type="submit" class="btn">Register</button>
    </div>
</div>      
  );
};