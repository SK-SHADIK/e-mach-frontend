import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout =()=>{
    const navigate = useNavigate();
    const token = localStorage.getItem("_authToken");
    var data = {token:token}
    useEffect(()=>{
        axios.post(`https://localhost:44326/api/Logout/${token}`)
        .then((rsp)=>{
            localStorage.clear();
            navigate('/');
        });
    },[])   
}

export default Logout;