import Bars from "../../Bars/Bars";
import "../../CSS/OfficerStyle3.css";
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateQuestionAnswerO=()=>{
    const[Question,setQuestion] = useState("");
    const[Answer,setAnswer] = useState("");
    const navigate = useNavigate();

    const handleForm = (event) =>{
        event.preventDefault();
        setQuestion('');
        setAnswer('');
        var data = {Question:Question, Answer:Answer};
        axios.post("https://localhost:44355/api/qa/add", data).then((rsp)=>{
            navigate('/Officer/QuestionAnswer');
        });
    }
    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="containerf">
                    <div class="contentf">
                        <div class="contentf-3">
                            <h1>Add A New Q&A</h1>
                                 
                            <form action="" method="POST" onSubmit={handleForm}>
                              
                              <label>Question</label><br/>
                              <textarea cols="50" rows="5"name="Question" id="Question" value={Question} onChange={(e)=>{setQuestion(e.target.value)}} /><br/>
                              
                              <label>Answer</label><br/>
                              <textarea cols="50" rows="5" name="Answer" id="Answer" value={Answer} onChange={(e)=>{setAnswer(e.target.value)}} /><br/>
                              
                              
                              <button>ADD</button>
                            </form>
                    
                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CreateQuestionAnswerO;