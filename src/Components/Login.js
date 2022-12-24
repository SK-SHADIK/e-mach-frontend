import "./Admin/CSS/Login.css"
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate = useNavigate();
   const [Email, setEmail] = useState("");
   const [Pass, setPass] = useState("");
   document.title = "Login";

   const Submit = (event) => {
      event.preventDefault();

      var data = { Email: Email, Pass: Pass };
      axios.post("https://localhost:44355/api/Login", data)
         .then((rsp) => {
            console.log(rsp)

            localStorage.setItem('_authToken', rsp.data.token);
            localStorage.setItem('User_Name', rsp.data.Username)

            if (rsp.data.UserType === "Fisherman") {

            navigate('/FishermanDashboard');
            } else if (rsp.data.user === "Officer") {
               navigate('/OfficerDashboard');
            }
         });

   }
   return (
      <div>
         <div class="wrapperf">
            <div class="titlef">
               Login Form
            </div>
            <form onSubmit={Submit} class="Form">
               <div class="fieldf">
                  <input type="text" placeholder="Enter Your Email" name="Email" onChange={(e) => setEmail(e.target.value)} value={Email} />
                  <label>Email Address</label>
               </div>
               <div class="fieldf">
                  <input type="password" placeholder="Enter Your Password" name="Pass" onChange={(e) => setPass(e.target.value)} value={Pass} />
                  <label>Password</label>
               </div>
               <div class="content">
                  <div class="checkbox">
                     <input type="checkbox" id="remember-me" />
                     <label for="remember-me">Remember me</label>
                  </div>
                  <div class="pass-link">
                     <a href="#">Forgot password?</a>
                  </div>
               </div>
               <div class="fieldf">
                  <input type="submit" value="Login" />
               </div>
               <div class="signup-link">
                  I Don't Have Any Account <a href={"/Regestration"}>Regestration Now</a>
               </div>
            </form>

         </div>
      </div>
   )
}
export default Login;