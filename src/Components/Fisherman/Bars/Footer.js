import "../CSS/Footer.css"
const Footer=()=>{
    return(
        <div>
            <footer>
                   <div class="container-footer">
                       <div class="sec about-us">
                           <h2><i class="fas fa-address-card"></i> ABOUT-US</h2>
                           <p>WE ARE TRYING TO SOLVE OUR ALL PROBLEM ABOUT FISH CULTIVATING AND FISH RELATED PROBLEMS...
                               ALSO WE GIVE SUGGESTIONS HOW TO GROW A FISH AND ANSWER YOUR QUESTIONS... 
                               IF YOU FEEL ANY PROBLEM IN YOUR FISH SECTOR TRY TO COMMUNICATE US WE ARE ALWAYS WUTH YOU...
                               ALSO YOU CAN BUY OR SELL YOUR FISHES...
                               THANK YOU & PLEASE STAY WITH US...
                           </p>                   
                       </div>
                       <div class="sec quick-links">
                           <h2><i class="fab fa-searchengin"></i> QUICK LINKS</h2>
                           <ul>
                                <li class="li-Fi"><h3 class="logoF">E-MACH</h3></li>
				            	<li class="li-Fi"><a class="a" href={"/FishermanDashboard"}>Home</a></li>
				            	<li class="li-Fi"><a class="a" href="#">About</a></li>
				            	<li class="li-Fi"><a class="a" href="#">Contact</a></li>
				            	<li class="li-Fi"><a class="a" href={"/Fisherman/ProductFish"}>Post Product</a></li>
				            	<li class="li-Fi"><a class="a" href={"/Fisherman/QuestionAndAnswerFish"}>Question And Answer</a></li>
				            	<li class="li-Fi"><a class="a" href={"/Fisherman/SuggestionsFish"}>Suggestions</a></li>
				            	<li class="li-Fi"><a class="a" href="#">Have Questions</a></li>
				            	<li class="li-Fi"><a class="a" href="#">Log Out</a></li>
				            </ul>
                       </div>
                       <div class="sec footer-contract">
                           <h2><i class="fas fa-address-book"></i> CONTRACT-US</h2>
                           <ul class="info">
                               <li>
                                   <span><i class="fas fa-map-marker-alt"></i>BOGURA, BANGLADESH </span>
                               <br/><br/>
                                   <span><i class="fas fa-envelope-square"></i></span>
                                   <p><a href="mailto:emach123@gmail.com">emach123@gmail.com</a></p> 
                               <br />
                                   <span><i class="fas fa-phone-square-alt"></i></span>
                                   <p><a href="tel:01799404026">01799404026</a></p> 
                               <br />
                                   <span><i class="fas fa-clock"></i>ANYDAY - 10AM TO 10PM</span> 
                               <br />
                               </li>
                           </ul>
                       </div>
                   </div>
               </footer>
            <div class="footer-txt">
                <p>@...THANKS EVERYONE FOR VISITING OUR WEBSITE...@</p>
            </div>
        </div>
    )
}
export default Footer;