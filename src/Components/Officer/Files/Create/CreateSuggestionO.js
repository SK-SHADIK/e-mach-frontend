import Bars from "../../Bars/Bars";
import "../../CSS/OfficerStyle3.css";
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateSuggestionO=()=>{
    const[Title,setTitle] = useState("");
    const[Details,setDetails] = useState("");
    const navigate = useNavigate();

    const handleForm = (event) =>{
        event.preventDefault();
        setTitle('');
        setDetails('');
        var data = {Title:Title, Details:Details};
        axios.post("https://localhost:44355/api/suggestion/add", data).then((rsp)=>{
            navigate('/Officer/Suggestions');
        });
    }
    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="containerf">
                    <div class="contentf">
                        <div class="contentf-3">
                            <h1>Add A New Suggestions</h1>
                                 
                            <form action="" method="POST" onSubmit={handleForm}>
                              
                              <label>Title</label><br/>
                              <input type="text" name="Title" id="Title" value={Title} onChange={(e)=>{setTitle(e.target.value)}} /><br/>
                              
                              <label>Details</label><br/>
                              <input type="text" name="Details" id="Details" value={Details} onChange={(e)=>{setDetails(e.target.value)}} /><br/>
                              
                              
                              <button>ADD</button>
                            </form>
                    
                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CreateSuggestionO;