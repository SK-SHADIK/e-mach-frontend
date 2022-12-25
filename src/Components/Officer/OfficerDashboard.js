import Bars from "../Officer/Bars/Bars";
import "./CSS/OfficerStyle.css";
import Dashboard from "./Files/DashBoard";  


const OfficerDashboard=()=>{
    return(
        <>
       
            <Bars/>
            <section id="main-content">
                <div class="main-content-info container">
                    
                        <Dashboard/>
                    
                </div>
            </section>
            
           

        </>

    )
}
export default OfficerDashboard;