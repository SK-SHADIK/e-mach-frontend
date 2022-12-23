import "../../Admin/CSS/AdminStyle2.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import Topbar from "../Bars/Topbar";

const QuestionAndAnswerFish=()=>{
    const [qa,setQa] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44355/api/qa")
        .then((rsp)=>{
            setQa(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    return(
        <div>
            <Topbar />
            <section id="main-content">
                <div class="main-content-info container">


                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Question & Answers</h2>
                                </div>
                            </div>
                            <table>
                                <tr>
                                    <th>Question</th>
                                    <th>Answer</th>
                                </tr>
                                {
                                     qa.map((qas)=>(
                                        <tr>
                                            <td>{qas.Question}</td>
                                            <td>{qas.Answer}</td>
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
export default QuestionAndAnswerFish;