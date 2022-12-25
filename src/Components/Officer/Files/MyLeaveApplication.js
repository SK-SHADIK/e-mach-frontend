import Bars from "../Bars/Bars";
import "../CSS/OfficerStyle2.css";
import {useState, useEffect} from 'react';
import axios from "axios";

const MyLeaveApplication=()=>{
    const [LA,setLA] = useState([]);
    //const[varName,setvarName] = useState("");
    let varName=localStorage.getItem("User_Name")

    useEffect(()=>{
        axios.get("https://localhost:44355/api/la")
        .then((rsp)=>{
            setLA(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    const deleteLA = (e, Id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.get(`https://localhost:44355/api/la/delete/${Id}`).then((rsp)=>{
            thisClicked.closest("tr").remove();
        });
    }
    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="main-content-info container">
                    <div class="card">
                        
                        <p>My Leave Application</p>
                    </div>


                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Suggestions List</h2>
                                </div>
                                <div class="see-all">
                                    <button><a href={"/Officer/LeaveApplication"}>ADD</a></button>
                                </div>

                            </div>
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Reason</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Status</th>
                                    <th colspan="2">Options</th>
                                </tr>
                                {
                                     LA.map((la)=>(
                                        <tr>
                                            {
                                                la.Name==varName ?<> <td>{la.Name}</td>
                                            <td>{la.Reason}</td>
                                            <td>{la.From}</td>
                                            <td>{la.To}</td>
                                            <td>{la.Status}</td>
                                            <td><div class="btn"><a href={`/Officer/UpdateLeaveApplication/${la.Id}`}>Edit</a></div></td>
                                            <td><button class="btn" onClick={ (e) => deleteLA(e, la.Id) }>Delete</button></td></>:<input type="hidden"/>
                                            
                                            }
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
export default MyLeaveApplication;