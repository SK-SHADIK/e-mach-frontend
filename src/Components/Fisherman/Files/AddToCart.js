import "../../Admin/CSS/AdminStyle2.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import Topbar from "../Bars/Topbar";
import { useNavigate } from "react-router-dom";

const AddToCart=()=>{
    const [cart,setCart] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("https://localhost:44355/api/addToCart")
        .then((rsp)=>{
            setCart(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);


    function checkout()
    {
        axios.get(`https://localhost:44355/api/myOrders/${localStorage.getItem("User_Name")}`)
        .then((rsp)=>{
            navigate("/FishermanDashboard")
        },(err)=>{

        }) 
    }
    return(
        <div>
            <Topbar />
            <section id="main-content">
                <div class="main-content-info container">


                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Your Added List</h2>
                                </div>
                            </div>
                            <table>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product ID</th>
                                    <th>User Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                                {
                                     cart.map((pro)=>(
                                        pro.UName===localStorage.getItem("User_Name")&&
                                        <tr>
                                            <td>{pro.PName}</td>
                                            <td>{pro.PId}</td>
                                            <td>{pro.UName}</td>
                                            <td>{pro.Tprice}</td>
                                            <td>{pro.PQty}</td>
                                        </tr>
                                    ))
                                }
                                
                            </table>
                            
                         </div>
                         <button onClick={checkout}>Check Out</button>
                         </div>
                 </div>
    
            </section>
        </div>
    )
}
export default AddToCart;