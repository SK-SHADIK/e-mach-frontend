import Bars from "../Bars/Bars";
import "../CSS/AdminStyle2.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import { CSVLink } from "react-csv";


const Product=()=>{
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44355/api/product")
        .then((rsp)=>{
            setProduct(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    const deleteOfficer = (e, Id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.get(`https://localhost:44355/api/product/delete/${Id}`).then((rsp)=>{
            thisClicked.closest("tr").remove();
        });
    }
    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="main-content-info container">
                    <div class="card">
                        <h2 class="cus-num cus-pro">{product.length}</h2>
                        <p>Total Product</p>
                    </div>


                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Product List</h2>
                                </div>
                                <div class="see-all">
                                   <div class="btn2"><CSVLink data={product} filename="Product Details">Export Product Details</CSVLink></div>
                                    <button><a href={"/Admin/CreateProduct"}>ADD</a></button>
                                </div>

                            </div>
                            <table>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product ID</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th colspan="2">Options</th>
                                </tr>
                                {
                                     product.map((pro)=>(
                                        <tr>
                                            <td>{pro.PName}</td>
                                            <td>{pro.Id}</td>
                                            <td>{pro.Desc}</td>
                                            <td>{pro.Price}</td>
                                            <td>{pro.Qty}</td>
                                            <td><div class="btn"><a href={`/Admin/UpdateProduct/${pro.Id}`}>Edit</a></div></td>
                                            <td><button class="btn" onClick={ (e) => deleteOfficer(e, pro.Id) }>Delete</button></td>
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
export default Product;