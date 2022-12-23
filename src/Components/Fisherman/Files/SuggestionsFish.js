import "../../Admin/CSS/AdminStyle2.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import Topbar from "../Bars/Topbar";

const SuggestionsFish=()=>{
    const [sugg,setSugg] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44355/api/suggestion")
        .then((rsp)=>{
            setSugg(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    return(
        <div>
            <Topbar />
            <section id="main-content">
                <div class="main-content-info container">


                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Suggestions</h2>
                                </div>
                            </div>
                            <table>
                                <tr>
                                    <th>Title</th>
                                    <th>Details</th>
                                </tr>
                                {
                                     sugg.map((sug)=>(
                                        <tr>
                                            <td>{sug.Title}</td>
                                            <td>{sug.Details}</td>
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
export default SuggestionsFish;