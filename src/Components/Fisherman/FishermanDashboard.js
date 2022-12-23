import "./CSS/Dashboard.css"
import Topbar from "./Bars/Topbar";
import {useState, useEffect} from 'react';
import axios from "axios";
import Footer from "./Bars/Footer";

const FishermanDashboard=()=>{
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44355/api/product")
        .then((rsp)=>{
            setProduct(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    return(
        <div>
            <Topbar />
            <div class="wrapperFish">
            <div class="cardsFish">
                <h2 class="headerFish">Products</h2>
                <div class="servicesFish">
                   
                   {
                        product.map((pro)=>(
                            <div class="contentFish contentFish-1">
                            <h2>Name: {pro.PName}</h2>
                            <p>Discreption: {pro.Desc}</p>
                            <p>PRICE: {pro.Price}Tk/Kg</p>
                            <p>Quantity: {pro.Qty}Pices</p>
                            <a href="#">BUY NOW</a>
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