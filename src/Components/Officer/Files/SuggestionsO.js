import Bars from "../Bars/Bars";
import "../CSS/OfficerStyle2.css";
import {useState, useEffect} from 'react';
import axios from "axios";

const SuggestionsO=()=>{
    const [sugg,setSugg] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44355/api/suggestion")
        .then((rsp)=>{
            setSugg(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    const deleteSugg = (e, Id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.get(`https://localhost:44355/api/suggestion/delete/${Id}`).then((rsp)=>{
            thisClicked.closest("tr").remove();
        });
    }
    return(
        <div>
            <Bars />
            <section id="main-content">
                <div class="main-content-info container">
                    <div class="card">
                        <h2 class="cus-num cus-pro">{sugg.length}</h2>
                        <p>Total Suggestions</p>
                    </div>


                    <div class="content-pro-par container">
                        <div class="pro-table">
                            <div class="recent-project">
                                <div class="rec-pro-h">
                                    <h2>Suggestions List</h2>
                                </div>
                                <div class="see-all">
                                    <button><a href={"/Admin/CreateSuggestion"}>ADD</a></button>
                                </div>

                            </div>
                            <table>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Details</th>
                                    <th colspan="2">Options</th>
                                </tr>
                                {
                                     sugg.map((sug)=>(
                                        <tr>
                                            <td>{sug.Id}</td>
                                            <td>{sug.Title}</td>
                                            <td>{sug.Details}</td>
                                            <td><div class="btn"><a href={`/Officer/UpdateSuggestions/${sug.Id}`}>Edit</a></div></td>
                                            <td><button class="btn" onClick={ (e) => deleteSugg(e, sug.Id) }>Delete</button></td>
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
export default SuggestionsO;