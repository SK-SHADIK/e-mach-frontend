import "../../Admin/CSS/AdminStyle2.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import Topbar from "../Bars/Topbar";

const ProductFish=()=>{
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
            <Topbar />
            <section id="main-content">
                <div class="main-content-info container">


                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Product List</h2>
                                </div>
                                <div class="see-all">
                                    <button><a href={"/Fisherman/CreateProductFish"}>ADD</a></button>
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
                                        // pro.UName===localStorage.getItem("User_Name")&&
                                        <tr>
                                            <td>{pro.PName}</td>
                                            <td>{pro.Id}</td>
                                            <td>{pro.Desc}</td>
                                            <td>{pro.Price}</td>
                                            <td>{pro.Qty}</td>
                                            <td><div class="btn"><a href={`/Fisherman/UpdateProductFish/${pro.Id}`}>Edit</a></div></td>
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
export default ProductFish;