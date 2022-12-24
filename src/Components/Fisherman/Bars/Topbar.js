import "../CSS/Dashboard.css";

const Topbar=()=>{
    return(
        <div>
             <div class="wrapperFish">
			 <nav class="navbarFish">
				
				<ul>
                    <li class="li-Fi"><h3 class="logoF">E-MACH</h3></li>
					<li class="li-Fi"><a class="a" href={"/FishermanDashboard"}>Home</a></li>
					<li class="li-Fi"><a class="a" href="#">About</a></li>
					<li class="li-Fi"><a class="a" href="#">Contact</a></li>
					<li class="li-Fi"><a class="a" href={"/Fisherman/ProductFish"}>Post Product</a></li>
					<li class="li-Fi"><a class="a" href={"/Fisherman/QuestionAndAnswerFish"}>Question And Answer</a></li>
					<li class="li-Fi"><a class="a" href={"/Fisherman/SuggestionsFish"}>Suggestions</a></li>
					<li class="li-Fi"><a class="a" href={"/Fisherman/CreateQuestions"}>Have Questions</a></li>
					<li class="li-Fi"><a class="a" href={"/Fisherman/AddToCart"}>Cart</a></li>
					<li class="li-Fi"><a class="a" href="#">Update Profile</a></li>
					<li class="li-Fi"><a class="a" href={"/Login"}>Log Out</a></li>

					<h3>Profile <br />{localStorage.getItem("User_Name")}</h3>

					
				</ul>
			</nav>
            </div>
        </div>
    )
}
export default Topbar;