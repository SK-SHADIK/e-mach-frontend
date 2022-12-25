import Bars from "../Bars/Bars";
import "../CSS/OfficerStyle4.css";
import {useState, useEffect} from 'react';
import axios from "axios";

const QuestionAnswer=()=>{
    const [qa,setQa] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44355/api/qa")
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

        axios.get(`https://localhost:44355/api/qa/delete/${Id}`).then((rsp)=>{
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
                        <p>Total Q&A</p>
                    </div><br/>
                    <div class="card">
                    <a href={"/Officer/UserQuestions"}>Fisherman's Questions</a>
                    </div>


                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Question & Answer List</h2>
                                </div>
                                <div class="see-all">
                                    <button><a href={"/Officer/CreateQuestionAnswer"}>ADD</a></button>
                                </div>

                            </div>
                            <table>
                                <tr>
                                    <th>Id</th>
                                    <th>Question</th>
                                    <th>Answer</th>
                                    <th colspan="2">Options</th>
                                </tr>
                                {
                                     qa.map((qas)=>(
                                        <tr>
                                            <td>{qas.Id}</td>
                                            <td>{qas.Question}</td>
                                            {
                                                qas.Answer=="null"?  <div class="ansbtn"> <a href={`/Officer/UpdateQuestionAnswer/${qas.Id}`}>Answer</a></div>:<div class="ans"><td>{qas.Answer}</td></div>
                                            }
                 
                                            
                                            <td><button class="btn" onClick={ (e) => deleteQa(e, qas.Id) }>Delete</button></td>
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
export default QuestionAnswer;