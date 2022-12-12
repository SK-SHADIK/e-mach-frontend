import Bars from "../../Bars/Bars";
import "../../CSS/AdminStyle3.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateQuestionAnswer=(props)=>{
    const [inputs,setInputs] = useState({});
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
            navigate('/Admin/Officer');
        });
    }
    console.log(inputs);
    
    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="containerf">
                    <div class="contentf">
                        <div class="contentf-3">
                            <h1>Update A Q&A Details</h1>
                                 
                            <form>
                              <label>ID</label><br />
                              <input readOnly name="Id" id="Id" value={inputs.Id || '' } onChange={handleChange} /><br/>
                              
                              <label>Question</label><br/>
                              <input type="text" name="Question" id="Question" value={inputs.Question || '' } onChange={handleChange} /><br/>
                              
                              <label>Answer</label><br/>
                              <input type="text" name="Answer" id="Answer" value={inputs.Answer || '' } onChange={handleChange} /><br/>
                              
                              
                              
                              <button onClick={submitForm}>SAVE</button>
                            </form>
                    
                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default UpdateQuestionAnswer;