import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "../CSS/OfficerStyle4.css";
import {CanvasJSChart} from 'canvasjs-react-charts';
import { useNavigate } from 'react-router-dom';

const Dashboard=()=>{

    const [fisherman,setFisherman] = useState([]);
    const [qa,setqa] = useState([]);
    const [suggestion,setsuggestion] = useState([]);
    const [question,setquestion] = useState([]);
    //{fisherman[fisherman.length-1].Name}


    useEffect(()=>{
        //for fisherman
        axios.get("https://localhost:44355/api/fisherman")
        .then((rsp)=>{
            setFisherman(rsp.data);

        },(err)=>{

        }) 
        //for Question and answer
        axios.get("https://localhost:44355/api/qa")
        .then((rsp)=>{
            setqa(rsp.data);
        },(err)=>{

        }) 
        //for suggestions
        axios.get("https://localhost:44355/api/suggestion")
        .then((rsp)=>{
            setsuggestion(rsp.data);
        },(err)=>{

        }) 
        //for Questions
        axios.get("https://localhost:44355/api/question")
        .then((rsp)=>{
            setquestion(rsp.data);
        },(err)=>{

        }) 
        
    },[]);
    const options = {
        title: {
          text: "Preview chart"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "Total Fisherman",  y: fisherman.length },
                      { label: "Q&A", y: qa.length  },
                      { label: "Suggestions", y: suggestion.length },
                      { label: "Fisherman's Que",  y: question.length  }
                     
                  ]
         }]
     }

    return(
        <>
            <div className="card">
                <h1>{fisherman.length}</h1>
                <h2>Fisherman</h2>
            </div>
            <div className="card">
                <h1>{qa.length}</h1>
                <h2>Question/Answer</h2>
            </div>
            <div className="card">
                <h1>{suggestion.length}</h1>
                <h2>Suggestion</h2>
            </div>
            <div className="card">
                <h1>{question.length}</h1>
                <h2>Questions</h2>
            </div>
            <section id="main-content">
                <div className="chart">
                <CanvasJSChart options = {options}/>
                </div>
                
            </section>
            {/* <div className="activities">
                <table className="tableact">
                    <tr><th >Last activities</th></tr>
                    
                    <tr><td><span className="spanAct">{fisherman[fisherman.length-1].Name}</span> - Added as Fisher man Address : <span className="spanAct">{fisherman[fisherman.length-1].Add}</span></td></tr>
                    <tr><td>Latest Suggestions : <span className="spanAct">{suggestion[suggestion.length-1].Details}</span></td></tr>
                    <tr><td>New Question:  <span className="spanAct">{question[question.length-1].Ques}</span></td></tr>
                    <tr><td>last added Answer:<span className="spanAct">{qa[qa.length-1].Answer}</span></td></tr>
                </table>
            </div> */}
           
        </>

    )
}
export default Dashboard;