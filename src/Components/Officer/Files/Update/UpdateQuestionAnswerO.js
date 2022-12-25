import Bars from "../../Bars/Bars";
import "../../CSS/OfficerStyle4.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateQuestionAnswerO=(props)=>{
    const [inputs,setInputs] = useState({});
    const[Question,setQuestion] = useState("");
    const[Answer,setAnswer] = useState("");
    const {Id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://localhost:44355/api/qa/${Id}`).then((res)=>{
            setInputs({
                Id:res.data.Id,
                Question:res.data.Question,
                Answer:res.data.Answer,
                
            });
        });
    },[Id]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = (e) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";
        console.log(inputs);
        axios.post(`https://localhost:44355/api/qa/update`, inputs).then((rsp)=>{
            navigate('/Officer/QuestionAnswer');
        });
    }
    const handleForm = (event) =>{
        event.preventDefault();
        setQuestion('');
        setAnswer('');
        var data = {Question:inputs.Question, Answer:Answer};
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
                            <h1>Answer the Question</h1>
                                 
                            <form>
                              <input type="hidden" name="Id" id="Id" value={inputs.Id || '' }  /><br/>
                              
                              
                              <label>Question :{inputs.Question || '' }</label><br/>
                              
                              
                              <label>Answer</label><br/>
                              <textarea cols="80" rows={10} name="Answer" id="Answer" value={Answer} onChange={(e)=>{setAnswer(e.target.value)}} /><br/>
                              
                              
                              
                              <button onClick={handleForm}>SAVE</button>
                            </form>
                    
                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default UpdateQuestionAnswerO;