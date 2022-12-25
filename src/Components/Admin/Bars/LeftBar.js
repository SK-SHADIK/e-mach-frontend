import "../CSS/AdminStyle.css";

const LeftBar=()=>{
    return(
        <div>
            <section id="sidebar">
                <div class="sidebar-brand">
                    <h2><i class="fa fa-fan"></i> <span>E-MACH</span></h2>
                </div>
                <div class="sidebar-menu">
                    <ul>
                        <li><a href={"/AdminDashboard"}><span>Dashboard</span></a></li>
                        <li><a href={"/Admin/Statements"}><span>Statement</span></a></li>
                        <li><a href={"/Admin/Orders"}><span>Orders</span></a></li> 
                        <li><a href={"/Admin/LeaveStatus"}><span>Leave Status</span></a></li> 
                        <li><a href={"/Admin/Officer"}><span>Officer</span></a></li>
                        <li><a href={"/Admin/Fisherman"}><span>Fisherman</span></a></li>
                        <li><a href={"/Admin/QuestionAnswer"}><span>Question And Answers</span></a></li>
                        <li><a href={"/Admin/Suggestions"}><span>Suggestions</span></a></li>
                        <li><a href={"/Admin/Product"}><span>Products</span></a></li>
                        <li><a href={"/Admin/UpdateProfile"}><span>Update Profile Info</span></a></li>
                        <li><a href={"/Login"}><span>Logout</span></a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default LeftBar;