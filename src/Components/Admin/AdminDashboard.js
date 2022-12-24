import Bars from "./Bars/Bars";
import "./CSS/AdminStyle.css";
import "./CSS/AdminStyle2.css";
import { useState, useEffect } from 'react';
import axios from "axios";


const AdminDashboard = () => {
    const [officer, setOfficer] = useState([]);
    const [fisherman, setFisherman] = useState([]);
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState([]);
    const [suggestion, setSuggestions] = useState([]);
    const [questionAnswer, setQuestionAnswer] = useState([]);
    let x = 0;

    useEffect(() => {
        axios.get("https://localhost:44355/api/adminDashboard")
            .then((rsp) => {
                setFisherman(rsp.data[0].fishermans);
                setOfficer(rsp.data[0].officers);
                setProduct(rsp.data[0].products);
                setOrder(rsp.data[0].orders);
                setSuggestions(rsp.data[0].suggestions);
                setQuestionAnswer(rsp.data[0].questionanswers);
                
            }, (err) => {

            })
    }, []);
    order.forEach(element => {
        x += parseInt(element.Tprice);        
    });
    return (
        <div>
            <Bars />
            <section id="main-content">
                <div class="main-content-info container">
                    <div class="card">
                        <h2 class="cus-num cus-pro">{officer.length}</h2>
                        <p>Total Officer</p>
                    </div>
                    <div class="card">
                        <h2 class="cus-num cus-pro">{fisherman.length}</h2>
                        <p>Total Fisherman</p>
                    </div>
                    <div class="card">
                        <h2 class="cus-num cus-pro">{order.length}</h2>
                        <p>Total Orders</p>
                    </div>
                    <div class="card">
                        <h2 class="cus-num cus-pro">{x}</h2>
                        <p>Total Earns</p>
                    </div>
                    <div class="card">
                        <h2 class="cus-num cus-pro">{product.length}</h2>
                        <p>Total Products</p>
                    </div>
                    <div class="card">
                        <h2 class="cus-num cus-pro">{suggestion.length}</h2>
                        <p>Total Suggestions</p>
                    </div>
                    <div class="card">
                        <h2 class="cus-num cus-pro">{questionAnswer.length}</h2>
                        <p>Total Question Answer</p>
                    </div>
                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Product List</h2>
                                </div>
                                <div class="see-all">
                                    For Details Click SEE ALL
                                   <button><a href={"/Admin/Product"}>SEE All</a></button>
                                </div>

                            </div>
                            <table>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product ID</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                                {
                                     product.map((pro)=>(
                                        <tr>
                                            <td>{pro.PName}</td>
                                            <td>{pro.Id}</td>
                                            <td>{pro.Desc}</td>
                                            <td>{pro.Price}</td>
                                            <td>{pro.Qty}</td>
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
export default AdminDashboard;