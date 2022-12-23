import Bars from "../Bars/Bars";
import "../CSS/AdminStyle2.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import { CSVLink } from "react-csv";

const Fisherman=()=>{
    const [fisherman,setFisherman] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44355/api/fisherman")
        .then((rsp)=>{
            setFisherman(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    const deleteFisherman = (e, Id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.get(`https://localhost:44355/api/fisherman/delete/${Id}`).then((rsp)=>{
            thisClicked.closest("tr").remove();
        });
    }
    return(
        <div>
        <Bars />
        <section id="main-content">
            <div class="main-content-info container">
                <div class="card">
                    <h2 class="cus-num cus-pro">{fisherman.length}</h2>
                    <p>Total Fisherman</p>
                </div>


                <div class="content-pro-par container">
                    <div class="pro-table">
                        <div class="recent-project">
                            <div class="rec-pro-h">
                                <h2>Fisherman List</h2>
                            </div>
                            <div class="see-all">
                                <div class="btn2"><CSVLink data={fisherman} filename="Fisherman List">Export Fisherman List</CSVLink></div>
                                <button><a href={"/Admin/CreateFisherman"}>ADD</a></button>
                            </div>

                        </div>
                        <table>
                            <tr>
                                <th>Fisherman Name</th>
                                <th>Fisherman ID</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th colspan="2">Options</th>
                            </tr>
                            {
                                 fisherman.map((fish)=>(
                                    <tr>
                                        <td>{fish.Name}</td>
                                        <td>{fish.Id}</td>
                                        <td>{fish.Email}</td>
                                        <td>{fish.Add}</td>
                                        <td><div class="btn"><a href={`/Admin/UpdateFisherman/${fish.Id}`}>Edit</a></div></td>
                                        <td><button class="btn" onClick={ (e) => deleteFisherman(e, fish.Id) }>Delete</button></td>
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
export default Fisherman;