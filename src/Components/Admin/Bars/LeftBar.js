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
                        <li><a href="#"><span>Statement</span></a></li>
                        <li><a href="#"><span>Orders</span></a></li>
                        <li><a href="#"><span>Income</span></a></li>
                        <li><a href={"/Admin/Officer"}><span>Officer</span></a></li>
                        <li><a href={"/Admin/Fisherman"}><span>Fisherman</span></a></li>
                        <li><a href={"/Admin/QuestionAnswer"}><span>Question And Answers</span></a></li>
                        <li><a href="#"><span>Suggestions</span></a></li>
                        <li><a href="#"><span>Products</span></a></li>
                        <li><a href="#"><span>Account</span></a></li>
                        <li><a href="#"><span>Logout</span></a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default LeftBar;