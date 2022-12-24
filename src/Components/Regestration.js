import "./Admin/CSS/Login.css"

const Regestration=()=>{
    return(
        <div>
            <div class="wrapperf">
                <div class="titlef">
                   Regestration Form
                </div>
                <form action="#" class="Form">
                <div class="fieldf">
                      <input type="text" placeholder="Enter Your Address"/>
                      <label>Address</label>
                   </div>
                <div class="fieldf">
                      <input type="text" placeholder="Enter Your Name"/>
                      <label>Name</label>
                   </div>
                   <div class="fieldf">
                      <input type="text" placeholder="Enter Your Email"/>
                      <label>Email Address</label>
                   </div>
                   <div class="fieldf">
                      <input type="text" placeholder="Enter Your Address"/>
                      <label>Address</label>
                   </div>
                   <div class="fieldf">
                      <input type="password" placeholder="Enter Your Password"/>
                      <label>Password</label>
                   </div>
                   <div class="fieldf">
                      <input type="password" placeholder="Enter Your Password Again"/>
                      <label>Confirm Password</label>
                   </div>
                   <label>Regestration As:</label>
                   <div class="fieldf">
                      <select>
                      <option value="Fisherman">Fisherman</option>
                      <option value="Officer">Officer</option>
                      </select>
                      
                   </div>
                   <div class="fieldf">
                      <input type="submit" value="Regestration" />
                   </div>
                   <div class="signup-link">
                      I Already Have An Account <a href={"/Login"}>Login</a>
                   </div>
                </form>
            </div>
        </div>
    )
}
export default Regestration;