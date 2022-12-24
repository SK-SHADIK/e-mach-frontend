import "./CSS/Dashboard.css"
import Topbar from "./Bars/Topbar";
import { useState, useEffect } from 'react';
import axios from "axios";
import Footer from "./Bars/Footer";
import { useNavigate } from "react-router-dom";

const FishermanDashboard = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("https://localhost:44355/api/product")
            .then((rsp) => {
                setProduct(rsp.data);
                console.log(rsp);
            }, (err) => {

            })
    }, []);
    function Addtocart(x) {
        const data={PId:x.Id, PQty:1, Tprice:x.Price, UName:localStorage.getItem("User_Name"), PName:x.PName}
        axios.post("https://localhost:44355/api/addToCart/add", data).then((rsp)=>{
            navigate('/Fisherman/AddToCart');
            console.log(rsp)
        }); 
        console.log(data)
    }
    return (
        <div>
            <Topbar />
            <div class="wrapperFish">
                <div class="cardsFish">
                    <h2 class="headerFish">Products</h2>
                    <div class="servicesFish">

                        {
                            product.map((pro) => (
                                <div class="contentFish contentFish-1">
                                    <h2>Name: {pro.PName}</h2>
                                    <p>Discreption: {pro.Desc}</p>
                                    <p>PRICE: {pro.Price}Tk/Kg</p>
                                    <p>Quantity: {pro.Qty}Pices</p>
                                    <a onClick={() => Addtocart(pro)}>ADD TO CART</a>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default FishermanDashboard;