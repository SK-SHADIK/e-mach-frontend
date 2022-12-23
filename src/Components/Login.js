import "./Admin/CSS/Login.css"

const Login=()=>{
    
    return(
        <div>
            <div class="wrapperf">
                <div class="titlef">
                   Login Form
                </div>
                <form action="#" class="Form">
                   <div class="fieldf">
                      <input type="text" placeholder="Enter Your Email"/>
                      <label>Email Address</label>
                   </div>
                   <div class="fieldf">
                      <input type="password" placeholder="Enter Your Password"/>
                      <label>Password</label>
                   </div>
                   <div class="content">
                      <div class="checkbox">
                         <input type="checkbox" id="remember-me" />
                         <label for="remember-me">Remember me</label>
                      </div>
                      <div class="pass-link">
                         <a href="#">Forgot password?</a>
                      </div>
                   </div>
                   <div class="fieldf">
                      <input type="submit" value="Login" />
                   </div>
                   <div class="signup-link">
                      I Don't Have Any Account <a href={"/Regestration"}>Regestration Now</a>
                   </div>
                </form>
            </div>
        </div>
    )
}
export default Login;