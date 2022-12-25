import Bars from "../Bars/Bars";
import "../CSS/OfficerStyle4.css";
import {useState, useEffect} from 'react';
import axios from "axios";

const UserQuestions=()=>{
    const [qa,setQa] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44355/api/question")
        .then((rsp)=>{
            setQa(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    const deleteQa = (e, Id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.get(`https://localhost:44355/api/question/delete/${Id}`).then((rsp)=>{
            thisClicked.closest("tr").remove();
        });
    }
    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="main-content-info container">
                    <div class="card">
                        <h2 class="cus-num cus-pro">{qa.length}</h2>
                        <h3>Total Q&A <span class="material-icons">quiz</span></h3>
                    </div><br/>



                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Question  List</h2>
                                </div>

                            </div>
                            <table>
                                <tr>
                                    <th>Id</th>
                                    <th>Question</th>
                                    <th colspan="2">Options</th>
                                </tr>
                                {
                                     qa.map((qas)=>(
                                        <tr>
                                            <td>{qas.Id}</td>
                                            <td>{qas.Ques}</td>
                                            
                                            <td><div class="ansbtn"> <a href={`/Officer/CreateAnswer/${qas.Id}`}>Answer</a></div></td>
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
export default UserQuestions;