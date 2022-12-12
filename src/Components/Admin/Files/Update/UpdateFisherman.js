import Bars from "../../Bars/Bars";
import "../../CSS/AdminStyle3.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateFisherman=(props)=>{
    const [inputs,setInputs] = useState({});
    const {Id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://localhost:44355/api/fisherman/${Id}`).then((res)=>{
            setInputs({
                Id:res.data.Id,
                Name:res.data.Name,
                Email:res.data.Email,
                Add:res.data.Add,
                Pass:res.data.Pass,
                
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
        axios.post(`https://localhost:44355/api/fisherman/update`, inputs).then((rsp)=>{
            navigate('/Admin/Fisherman');
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
                            <h1>Update A Fisherman Details</h1>
                                 
                            <form>
                              <label>FISHERMAN ID</label><br />
                              <input readOnly name="Id" id="Id" value={inputs.Id || '' } onChange={handleChange} /><br/>
                              
                              <label>FISHERMAN NAME</label><br/>
                              <input type="text" name="Name" id="Name" value={inputs.Name || '' } onChange={handleChange} /><br/>
                              
                              <label>Email</label><br/>
                              <input type="text" name="Email" id="Email" value={inputs.Email || '' } onChange={handleChange} /><br/>
                              
                              <label>ADDRESS</label><br/>
                              <input type="text" name="Add" id="Add" value={inputs.Add || '' } onChange={handleChange} /><br/>
        
                              <label>PASSWORD</label><br/>
                              <input type="password" name="Pass" id="Pass" value={inputs.Pass || '' } onChange={handleChange} /><br/>
        
                                                        
                              {/* <label>IMAGE</label><br/>
                              <input type="file" name="p_img" id="p_img" /><br/> */}
                              
                              
                              <button onClick={submitForm}>SAVE</button>
                            </form>
                    
                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default UpdateFisherman;