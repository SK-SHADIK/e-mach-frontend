import Bars from "../Bars/Bars";
import "../CSS/AdminStyle2.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import { CSVLink } from "react-csv";


const Orders=()=>{
    const [order,setOrder] = useState([]);
    let x=0;

    useEffect(()=>{
        axios.get("https://localhost:44355/api/OrderDetails")
        .then((rsp)=>{
            setOrder(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    order.forEach(element => {
        x += parseInt(element.Tprice);        
    });
    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="main-content-info container">
                    <div class="card">
                        <h2 class="cus-num cus-pro">{order.length}</h2>
                        <p>Total Order</p>
                    </div>
                    <div class="card">
                        <h2 class="cus-num cus-pro">{x}</h2>
                        <p>Total Earn</p>
                    </div>


                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Order Lists</h2>
                                </div>
                                <div class="see-all">
                                   <div class="btn2"><CSVLink data={order} filename="Order Details">Export Order Details</CSVLink></div>
                                </div>

                            </div>
                            <table>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Ordered By</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th>Status</th>
                                </tr>
                                {
                                     order.map((ord)=>(
                                        <tr>
                                            <td>{ord.PName}</td>
                                            <td>{ord.UName}</td>
                                            <td>{ord.PQty}</td>
                                            <td>{ord.Tprice}</td>
                                            <td>{ord.Status}</td>
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
export default Orders;