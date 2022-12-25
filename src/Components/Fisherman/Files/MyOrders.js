import "../../Admin/CSS/AdminStyle2.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import Topbar from "../Bars/Topbar";

const MyOrders=()=>{
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44355/api/myOrder")
        .then((rsp)=>{
            setProduct(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    return(
        <div>
            <Topbar />
            <section id="main-content">
                <div class="main-content-info container">


                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Product List</h2>
                                </div>
                                

                            </div>
                            <table>
                                <tr>
                                    <th>User Name</th>
                                    <th>Price</th>
                                    <th>Payment Type</th>
                                    <th>Order Status</th>
                                    <th>Order Id</th>
                                </tr>
                                {
                                     product.map((pro)=>(
                                        pro.UName===localStorage.getItem("User_Name")&&                                        
                                        <tr>
                                            <td>{pro.UName}</td>
                                            <td>{pro.TPrice}</td>
                                            <td>{pro.PayType}</td>
                                            <td>{pro.OStatus}</td>
                                            <td>{pro.OId}</td>
                                        </tr>
                                    ))
                                }
                                
                            </table>
                         </div>
                         </div>
                 </div>
    
            </section>
        </div>
    )
}
export default MyOrders;