import Bars from "../Bars/Bars";
import "../CSS/AdminStyle2.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import { CSVLink } from "react-csv";


const LeaveStatus=()=>{
    const [LS,setLS] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44355/api/la")
        .then((rsp)=>{
            setLS(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="main-content-info container">


                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Leave Application Lists</h2>
                                   <div class="btn2"><CSVLink data={LS} filename="Leave Applications">Export Leave Applications</CSVLink></div>
                                </div>
                                

                            </div>
                            <table>
                                <tr>
                                    <th>Reason</th>
                                    <th>Officer Name</th>
                                    <th>Start Date</th>
                                    <th>Finished Date</th>
                                    <th>Status</th>
                                    <th>Option</th>
                                </tr>
                                {
                                     LS.map((la)=>(
                                        <tr>
                                            <td>{la.Reason}</td>
                                            <td>{la.Name}</td>
                                            <td>{la.From}</td>
                                            <td>{la.To}</td>
                                            <td>{la.Status}</td>
                                            <td><div class="btn"><a href={`/Admin/UpdateStatus/${la.Id}`}>Edit</a></div></td>
                                        </tr>
                                    ))
                                }
                                
                            </table>
                         </div>
                         </div>
                 </div>
    
            </section>
        </div>
    )
}
export default LeaveStatus;