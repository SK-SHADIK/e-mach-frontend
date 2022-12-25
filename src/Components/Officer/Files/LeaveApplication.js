import React from 'react';
import "../CSS/OfficerStyle.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import Bars from "../Bars/Bars";
import { useNavigate } from 'react-router-dom';
//import MyLeaveApplication from '/Officer/MyLeaveApplication';

const LeaveApplication =()=>{
    const[Reason,setReason] = useState("");
    const[Name,setName] = useState("");
    const[From,setFrom] = useState("");
    const[To,setTo] = useState("");
    const[Status,setStatus] = useState("");
    const navigate = useNavigate();
    //setStatus('Waiting')
    let varName=localStorage.getItem("User_Name")



    const handleForm = (event) =>{
        event.preventDefault();
        setReason('');
        var data = {Name:varName,Reason:Reason,From:From,To:To,Status:"waiting"};
        axios.post("https://localhost:44355/api/la/add", data).then((rsp)=>{
            navigate('/Officer/MyLeaveApplication');
        });
    }
    const handleLeaveApplication=()=>{
        console.log(Reason)
    }
    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="containerf">
                <a class="card" href={"/Officer/MyLeaveApplication"}><span>My Applications</span></a>

                    <div class="contentf">
                        <div class="contentf-3">
                        
                            <h1>Leave Application Form</h1>  
                            <form action="" method="POST" onSubmit={handleForm}>
                              
                              <label>Name:</label><input type="text" name="Name" id="Name" value={varName} onChange={(e)=>{setName(e.target.value)}} readOnly/><br/>
                              <label>Reason:</label><br/>
                              <textarea rows={12} cols={70} name="Reason" id="Reason" value={Reason} onChange={(e)=>{setReason(e.target.value)}}  ></textarea><br/>
                              <label>From:</label>
                              <input type="date" name="From" id="From"  onChange={(e)=>{setFrom(e.target.value)}}/><br/>
                              
                              <label>TO  :</label>
                              <input type="date" name="To" id="To"  onChange={(e)=>{setTo(e.target.value)}}/><br/>
                              <input type="hidden" name="Status" id="Status"  /><br/>

                              
                              
                              
                              
                              <button onClick={handleLeaveApplication}>ADD</button>
                            </form>
                    
                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default LeaveApplication;