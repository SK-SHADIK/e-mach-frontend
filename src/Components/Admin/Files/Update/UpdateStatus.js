import Bars from "../../Bars/Bars";
import "../../CSS/AdminStyle3.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateStatus=(props)=>{
    const [inputs,setInputs] = useState({});
    const {Id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://localhost:44355/api/la/${Id}`).then((res)=>{
            setInputs({
                Id:res.data.Id,
                Reason:res.data.Reason,
                Name:res.data.Name,
                From:res.data.From,
                To:res.data.To,
                Status:res.data.Status,
                
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
        axios.post(`https://localhost:44355/api/la/update`, inputs).then((rsp)=>{
            navigate('/Admin/LeaveStatus');
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
                            <h1>Update A Leave Status</h1>
                                 
                            <form>
                              <label>ID</label><br />
                              <input readOnly name="Id" id="Id" value={inputs.Id || '' } onChange={handleChange} /><br/>
                              
                              <label>Reason</label><br />
                              <textarea readOnly name="Reason" id="Reason" value={inputs.Reason || '' } onChange={handleChange} /><br/>
                              
                              <label>Officer Name</label><br/>
                              <input readOnly name="Name" id="Name" value={inputs.Name || '' } onChange={handleChange} /><br/>
                              
                              <label>Start Date</label><br/>
                              <input readonly name="From" id="From" value={inputs.From || '' } onChange={handleChange} /><br/>
                              
                              <label>Finished Date</label><br/>
                              <input readonly name="To" id="To" value={inputs.To || '' } onChange={handleChange} /><br/>
                               
                              <label>Change Status</label><br/>
                              <select name="Status" id="Status" values={inputs.To || '' } onChange={handleChange} >
                                <option value={"Pending"}>Pending</option>
                                <option value={"Approved"}>Approved</option>
                                <option value={"Rejected"}>Rejected</option>
                              </select>
                              
                              
                              <button onClick={submitForm}>SAVE</button>
                            </form>
                    
                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default UpdateStatus;