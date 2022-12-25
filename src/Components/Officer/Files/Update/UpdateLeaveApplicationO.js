import Bars from "../../Bars/Bars";
import "../../CSS/OfficerStyle3.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateLeaveApplicationO=(props)=>{
    const [inputs,setInputs] = useState({});
    const {Id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://localhost:44355/api/la/${Id}`).then((res)=>{
            setInputs({
                Name:res.data.Name,
                Reason:res.data.Reason,
                From:res.data.From,
                To:res.data.To,

                
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
            navigate('/Officer/MYLeaveApplication');
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
                            <h1>Update LeaveApplication</h1>
                                 
                            <form>
                              <label>Name</label><br />
                              <input readOnly name="Name" id="Name" value={inputs.Name || '' } onChange={handleChange} /><br/>
                              
                              <label>Reason</label><br/>
                              <textarea rows="10" cols="120" name="Reason" id="Reason" value={inputs.Reason || '' } onChange={handleChange} /><br/>
                              
                              <label>Date From-To</label><br/>
                              <input type="text" name="From" id="From" value={inputs.From || '' } onChange={handleChange} /><br/>
                              <input type="text" name="To" id="To" value={inputs.To || '' } onChange={handleChange} /><br/>
                              
                              
                              
                              <button onClick={submitForm}>SAVE</button>
                            </form>
                    
                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default UpdateLeaveApplicationO;