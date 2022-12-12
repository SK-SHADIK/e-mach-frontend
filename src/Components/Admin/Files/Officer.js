import Bars from "../Bars/Bars";
import "../CSS/AdminStyle2.css";
import {useState, useEffect} from 'react';
import axios from "axios";

const Officer=()=>{
    const [officer,setOfficer] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44355/api/officer")
        .then((rsp)=>{
            setOfficer(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    const deleteOfficer = (e, Id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.get(`https://localhost:44355/api/officer/delete/${Id}`).then((rsp)=>{
            thisClicked.closest("tr").remove();
        });
    }
    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="main-content-info container">
                    <div class="card">
                        <h2 class="cus-num cus-pro">{officer.length}</h2>
                        <p>Total Officer</p>
                    </div>


                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Officer List</h2>
                                </div>
                                <div class="see-all">
                                    <button><a href={"/Admin/CreateOfficer"}>ADD</a></button>
                                </div>

                            </div>
                            <table>
                                <tr>
                                    <th>Officer Name</th>
                                    <th>Officer ID</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th colspan="2">Options</th>
                                </tr>
                                {
                                     officer.map((off)=>(
                                        <tr>
                                            <td>{off.Name}</td>
                                            <td>{off.Id}</td>
                                            <td>{off.Email}</td>
                                            <td>{off.Add}</td>
                                            <td><div class="btn"><a href={`/Admin/UpdateOfficer/${off.Id}`}>Edit</a></div></td>
                                            <td><button class="btn" onClick={ (e) => deleteOfficer(e, off.Id) }>Delete</button></td>
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
export default Officer;