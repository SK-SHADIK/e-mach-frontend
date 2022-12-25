import {useState, useEffect} from 'react';
import axios from "axios";
import "../CSS/AdminStyle3.css";
import { useParams, useNavigate } from "react-router-dom";
import Bars from '../Bars/Bars';



const UpdateProfile=()=>{
    document.title = "Edit Profile";
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://localhost:44355/api/admins/${localStorage.getItem("User_Name")}`).then((res)=>{
            setInputs({
                Id:res.data.Id,
                Name:res.data.Name,
                Email:res.data.Email,
                Pass:res.data.Pass,
                Add:res.data.Add,
                
            });
        });
    },[id]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    const submitForm = (e) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";

        const fData = new FormData();
        fData.append("Id", inputs.Id);
        fData.append("Name", inputs.Name);
        fData.append("Email", inputs.Email);
        fData.append("Pass", inputs.Pass);
        fData.append("Add", inputs.Add);

       
        
        axios.post("https://localhost:44355/api/admin/update", fData)
        .then((rsp)=>{
                console.log(rsp.data)
                                   
                navigate('/FishermanDashboard');          
                thisClicked.innerText = "Updating";
            }
        )};
                  
    

    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="containerf">
                    <div class="contentf">
                        <div class="contentf-3">
                        <h1>Change Your Informations</h1>
                                 
                                 <form>
                                     <label>ID: </label> 
                                     <input readOnly name="Id" value={inputs.Id || ''} onChange={handleChange} /> <br />        
                                     <label>NAME: </label> 
                                     <input type="text" name="Name" value={inputs.Name ||'' } onChange={handleChange} /><br />
                                     <label>EMAIL: </label>
                                     <input type="text" name="Email" value={inputs.Email ||'' } onChange={handleChange} /><br />
                                     <label>ADDRESS: </label>
                                     <input type="text" name="Add" value={inputs.Add ||'' } onChange={handleChange} /><br />
                                     <label>PASSWORD: </label>
                                     <input type="text" name="Pass" value={inputs.Pass ||'' } onChange={handleChange} /><br />
                                     <button class="btn" onClick={submitForm}>Save</button>
                                </form>
                            </div>
                        </div>

                
                    </div>

                 </section>
            
        </div>

    )
}
export default UpdateProfile;