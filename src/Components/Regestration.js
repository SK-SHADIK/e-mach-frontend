import "./Admin/CSS/Login.css"
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Regestration=()=>{
   const[Name,setName] = useState("");
   const[Email,setEmail] = useState("");
   const[Add,setAdd] = useState("");
   const[Pass,setPass] = useState("");
   const[utype,setUtype] = useState("");
   const[msg,setMsg] = useState("");
    const[err,setErr] = useState("");
   const navigate = useNavigate();

   const handleForm = (event) =>{
       event.preventDefault();
       setName('');
       setEmail('');
       setAdd('');
       setPass('');
       var data = {Name:Name, Email:Email, Add:Add, Pass:Pass};
       if(utype === "Fisherman"){
         axios.post("https://localhost:44355/api/fisherman/add", data).then((rsp)=>{
            navigate('/Login');
         },(err)=>{
            if(err.response.status==422) //for data validation
            {
                setErr(err.response.data);
            }else{
                setMsg("Provide Every Data Properly");
            }
        
       });
      }
      else if(utype === "Officer"){
         axios.post("https://localhost:44355/api/officer/add", data).then((rsp)=>{
            navigate('/Login');
        
       });
      }
      
   }
    return(
        <div>
            <div class="wrapperf">
                <div class="titlef">
                   Regestration Form
                </div>
                <h4>{msg}</h4>
                <form action="" method="POST" onSubmit={handleForm} class="Form">
                <div class="fieldf">
                      <input type="text" placeholder="Enter Your Name" name="Name" id="Name" value={Name} onChange={(e)=>{setName(e.target.value)}}/>
                      <label>Name</label>
                   </div>
                   <div class="fieldf">
                      <input type="text" placeholder="Enter Your Email" name="Email" id="Email" value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
                      <label>Email Address</label>
                   </div>
                   <div class="fieldf">
                      <input type="text" placeholder="Enter Your Address" name="Add" id="Add" value={Add} onChange={(e)=>{setAdd(e.target.value)}}/>
                      <label>Address</label>
                   </div>
                   <div class="fieldf">
                      <input type="password" placeholder="Enter Your Password" />
                      <label>Password</label>
                   </div>
                   <div class="fieldf">
                      <input type="password" placeholder="Enter Your Password Again" name="Pass" id="Pass" value={Pass} onChange={(e)=>{setPass(e.target.value)}}/>
                      <label>Confirm Password</label>
                   </div>
                   <label>Regestration As:</label>
                   <div class="fieldf">
                      <select name="utype" id="utype" value={utype} onChange={(e)=>{setUtype(e.target.value)}}>
                      <option>SELECT ONE...</option>
                      <option value="Fisherman">Fisherman</option>
                      <option value="Officer">Officer</option>
                      </select>
                      
                   </div>
                   <div class="fieldf">
                      <input type="submit" value="Regestration" />
                   </div>
                   <div class="signup-link">
                      I Already Have An Account <a href={"/Login"}>Login</a>
                   </div>
                </form>
            </div>
        </div>
    )
}
export default Regestration;