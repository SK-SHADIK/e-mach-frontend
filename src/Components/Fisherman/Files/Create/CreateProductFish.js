import "../../../Admin/CSS/AdminStyle3.css";
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Topbar from "../../Bars/Topbar";

const CreateProductFish=()=>{
    const[PName,setPName] = useState("");
    const[Desc,setDesc] = useState("");
    const[Price,setPrice] = useState("");
    const[Qty,setQty] = useState("");
    const[UserId,setUserId] = useState("");
    const navigate = useNavigate();

    const handleForm = (event) =>{
        event.preventDefault();
        setPName('');
        setDesc('');
        setPrice('');
        setQty('');
        setUserId('');
        var data = {PName:PName, Desc:Desc, Price:Price, Qty:Qty, UserId:UserId};
        axios.post("https://localhost:44355/api/product/add", data).then((rsp)=>{
            navigate('/Fisherman/ProductFish');
        });
    }
    return(
        <div>
            <Topbar />
            <section id="main-content">
                <div class="containerf">
                    <div class="contentf">
                        <div class="contentf-3">
                            <h1>Add A New Product</h1>
                                 
                            <form action="" method="POST" onSubmit={handleForm}>
                              
                              <label>Product Name</label><br/>
                              <input type="text" name="PName" id="PName" value={PName} onChange={(e)=>{setPName(e.target.value)}} /><br/>
                              
                              <label>Description</label><br/>
                              <input type="text" name="Desc" id="Desc" value={Desc} onChange={(e)=>{setDesc(e.target.value)}} /><br/>
                              
                              <label>Price</label><br/>
                              <input type="text" name="Price" id="Price" value={Price} onChange={(e)=>{setPrice(e.target.value)}} /><br/>
        
                              <label>Quantity</label><br/>
                              <input type="text" name="Qty" id="Qty"value={Qty} onChange={(e)=>{setQty(e.target.value)}} /><br/>
        
                              <label>User ID</label><br/>
                              <input type="text" name="UserId" id="UserId"value={UserId} onChange={(e)=>{setUserId(e.target.value)}} /><br/>
                                  
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
export default CreateProductFish;