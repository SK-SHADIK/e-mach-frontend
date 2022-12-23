import "../../../Admin/CSS/AdminStyle3.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Topbar from "../../Bars/Topbar";

const UpdateProductFish=(props)=>{
    const [inputs,setInputs] = useState({});
    const {Id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://localhost:44355/api/product/${Id}`).then((res)=>{
            setInputs({
                Id:res.data.Id,
                PName:res.data.PName,
                Desc:res.data.Desc,
                Price:res.data.Price,
                Qty:res.data.Qty,
                UserId:res.data.UserId,
                
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
        axios.post(`https://localhost:44355/api/product/update`, inputs).then((rsp)=>{
            navigate('/Fisherman/ProductFish');
        });
    }
    console.log(inputs);
    
    return(
        <div>
            <Topbar />
            <section id="main-content">
                <div class="containerf">
                    <div class="contentf">
                        <div class="contentf-3">
                            <h1>Update A Product Details</h1>
                                 
                            <form>
                              <label>Product ID</label><br />
                              <input readOnly name="Id" id="Id" value={inputs.Id || '' } onChange={handleChange} /><br/>
                              
                              <label>Product NAME</label><br/>
                              <input type="text" name="PName" id="PName" value={inputs.PName || '' } onChange={handleChange} /><br/>
                              
                              <label>Description</label><br/>
                              <input type="text" name="Desc" id="Desc" value={inputs.Desc || '' } onChange={handleChange} /><br/>
                              
                              <label>Price</label><br/>
                              <input type="text" name="Price" id="Price" value={inputs.Price || '' } onChange={handleChange} /><br/>
        
                              <label>Quantity</label><br/>
                              <input type="text" name="Qty" id="Qty" value={inputs.Qty || '' } onChange={handleChange} /><br/>
        
                              <label>User ID</label><br/>
                              <input type="text" name="UserId" id="UserId" value={inputs.UserId || '' } onChange={handleChange} /><br/>
                                  
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
export default UpdateProductFish;