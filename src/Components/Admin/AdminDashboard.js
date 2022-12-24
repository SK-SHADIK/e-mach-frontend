import Bars from "./Bars/Bars";
import "./CSS/AdminStyle.css";
import "./CSS/AdminStyle2.css";
import { useState, useEffect } from 'react';
import axios from "axios";


const AdminDashboard = () => {
    const [officer, setOfficer] = useState([]);
    const [fisherman, setFisherman] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:44355/api/adminDashboard")
            .then((rsp) => {
                setFisherman(rsp.data[0].fishermans);
                setOfficer(rsp.data[0].officers);
            }, (err) => {

            })
    }, []);
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
                </div>
            </section>
        </div>
    )
}
export default AdminDashboard;