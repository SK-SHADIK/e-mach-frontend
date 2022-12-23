import "../../../Admin/CSS/AdminStyle3.css";
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Topbar from "../../Bars/Topbar";

const CreateQuestions=()=>{
    const[Ques,setQuestion] = useState("");
    const navigate = useNavigate();

    const handleForm = (event) =>{
        event.preventDefault();
        setQuestion('');
        var data = {Ques:Ques};
        axios.post("https://localhost:44355/api/question/add", data).then((rsp)=>{
            navigate('/FishermanDashboard');
        });
    }
    return(
        <div>
            <Topbar />
            <section id="main-content">
                <div class="containerf">
                    <div class="contentf">
                        <div class="contentf-3">
                            <h1>Add A New Question</h1>
                                 
                            <form action="" method="POST" onSubmit={handleForm}>
                              
                              <label>Question</label><br/>
                              <input type="text" name="Ques" id="Ques" value={Ques} onChange={(e)=>{setQuestion(e.target.value)}} /><br/>
                               
                              
                              <button>ADD</button>
                            </form>
                    
                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CreateQuestions;