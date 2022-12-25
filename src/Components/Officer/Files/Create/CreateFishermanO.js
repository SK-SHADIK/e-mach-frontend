import Bars from "../../Bars/Bars";
import "../../CSS/OfficerStyle3.css";
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateFishermanO=()=>{
    const[Name,setName] = useState("");
    const[Email,setEmail] = useState("");
    const[Add,setAdd] = useState("");
    const[Pass,setPass] = useState("");
    const navigate = useNavigate();

    const handleForm = (event) =>{
        event.preventDefault();
        setName('');
        setEmail('');
        setAdd('');
        setPass('');
        var data = {Name:Name, Email:Email, Add:Add, Pass:Pass};
        axios.post("https://localhost:44355/api/fisherman/add", data).then((rsp)=>{
            navigate('/Admin/Fisherman');
        });
    }
    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="containerf">
                    <div class="contentf">
                        <div class="contentf-3">
                            <h1>Add A New Fisherman</h1>
                                 
                            <form action="" method="POST" onSubmit={handleForm}>
                              
                              <label>OFFICER NAME</label><br/>
                              <input type="text" name="Name" id="Name" value={Name} onChange={(e)=>{setName(e.target.value)}} /><br/>
                              
                              <label>Email</label><br/>
                              <input type="text" name="Email" id="Email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                              
                              <label>ADDRESS</label><br/>
                              <input type="text" name="Add" id="Add" value={Add} onChange={(e)=>{setAdd(e.target.value)}} /><br/>
        
                              <label>PASSWORD</label><br/>
                              <input type="password" name="Pass" id="Pass"value={Pass} onChange={(e)=>{setPass(e.target.value)}} /><br/>
        
                                                        
                              {/* <label>IMAGE</label><br/>
                              <input type="file" name="p_img" id="p_img" /><br/> */}
                              
                              
                              <button>ADD</button>
                            </form>
                    
                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CreateFishermanO;