import Bars from "../../Bars/Bars";
import "../../CSS/AdminStyle3.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateSuggestion=(props)=>{
    const [inputs,setInputs] = useState({});
    const {Id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://localhost:44355/api/suggestion/${Id}`).then((res)=>{
            setInputs({
                Id:res.data.Id,
                Title:res.data.Title,
                Details:res.data.Details,
                
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
        axios.post(`https://localhost:44355/api/suggestion/update`, inputs).then((rsp)=>{
            navigate('/Admin/Suggestions');
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
                              
                              <label>Title</label><br/>
                              <input type="text" name="Title" id="Title" value={inputs.Title || '' } onChange={handleChange} /><br/>
                              
                              <label>Details</label><br/>
                              <input type="text" name="Details" id="Details" value={inputs.Details || '' } onChange={handleChange} /><br/>
                              
                              
                              
                              <button onClick={submitForm}>SAVE</button>
                            </form>
                    
                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default UpdateSuggestion;