import "../../Admin/CSS/AdminStyle2.css";
import Topbar from "../Bars/Topbar";

const Contact=()=>{
    
    return(
        <div>
            <Topbar />
            <section id="main-content">
                <div class="main-content-info container">


                    <div class="content-pro-par container">
                        <div class="pro-table">
                        {/* <!--ALERT MESSAGE START

                             <div class = "alert-success">
                                 <span>MESSAGE SENT MINI WORLD! THANKS FOR CONTRACTING US.</span>
                             </div>

                             <div class = "alert-error">
                                 <span>SOMETHING WENT WORNG!!! PLEASE TRY AGAIN</span>
                             </div>

                             ALERT MESSAGE START-->

                             <!--CONTRACT START--> */}
                             <div class = "contract-sec">
                                 <div class = "contract-info">
                                     <div>BOGURA, BANGLADESH</div>
                                     <div>emach@gmail.com</div>
                                     <div>emach@yahoo.com</div>
                                     <div>01799404026</div>
                                     <div>ANYDAY - 10AM TO 10PM</div>
                                 </div>
                                 <div class = "contract-form">
                                     <h2>CONTACT US</h2>
                                     <form class = "contract"  action = "" method = "post">
                                         <input type = "text" name = "" class = "text-box" placeholder = "NAME" required />
                                         <input type="email" name="" class="text-box" placeholder="E-MAIL abc@mail.com" required />
                                         <textarea name="" rows="5" placeholder="PLEASE ENTER YOUR MESSAGE HERE" required></textarea>
                                         <input type="submit" name="submit" class="send-btn" value="Send" />
                                     </form>
                                 </div>
                             </div>
                        </div>
                         </div>
                 </div>
    
            </section>
        </div>
    )
}
export default Contact;