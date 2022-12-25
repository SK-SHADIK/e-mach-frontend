import Bars from "../Bars/Bars";
import "../CSS/AdminStyle.css";
import "../CSS/AdminStyle2.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import {Pie, PieChart, Cell} from 'recharts';


const Statements = () => {
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
    const ab = [
        {
            "name":"Fisherman",
            value:fisherman.length,
        },
        {
            "name":"Officer",
            value:officer.length,
        }
    ]
    const cd = [
        {
            "name":"Q&A",
            value:questionAnswer.length,
        },
        {
            "name":"Suggestions",
            value:suggestion.length,
        }
    ]
    const colors = ['#FF8042', '#00C49F'];
    return (
        <div>
            <Bars />
            <section id="main-content">
                <div class="main-content-info container">
                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                            <h3>Total Users Ratio</h3>
                            <PieChart width={1030} height={350}>
                            <Pie data={ab} cx="50%" cy="50%" outerRadius={80} label>
                              {
                                ab.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={colors[index]}/>
                                ))
                              }
                            </Pie>
                            </PieChart>
                            <p>FISHERMAN: {fisherman.length}  ||| OFFICER: {officer.length} </p>
                            
                         </div>
                         <div class="pro-table">
                            <div class="recent-project">
                            <h3>Total Q&A AND SUGGESTIONS Ratio</h3>
                            <PieChart width={1030} height={350}>
                            <Pie data={cd} cx="50%" cy="50%" outerRadius={80} label>
                              {
                                cd.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={colors[index]}/>
                                ))
                              }
                            </Pie>
                            </PieChart>
                            <p>Q&A: {questionAnswer.length}  ||| SUGGESTIONS: {suggestion.length} </p>
                            
                         </div>
                         </div>
                         </div>
                  </div>
                </div>
            </section>
        </div>
    )
}
export default Statements;