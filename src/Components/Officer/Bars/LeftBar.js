import "../CSS/OfficerStyle.css";

const LeftBar=()=>{
    return(
        <div>
            <section id="sidebar">
                <div class="sidebar-brand">
                    <h2><i class="fa fa-fan"></i> <span>E-MACH</span></h2>
                </div>
                <div class="sidebar-menu">
                    <ul>
                        <li><a href={"/OfficerDashboard"}><span>Dashboard</span></a></li>
                        <li><a href="#"><span>Statement</span></a></li>
                        <li><a href={"/Officer/AddFisherman"}><span>Add Fisherman</span></a></li>
                        <li><a href={"/Officer/QuestionAnswer"}><span>Question And Answers</span></a></li>
                        <li><a href={"/Officer/Suggestions"}><span>Suggestions</span></a></li>
                        <li><a href={"/Officer/LeaveApplication"}><span>Leave Application</span></a></li>
                        <li><a href={"/Officer/UpdateProfileO"}><span>Account</span></a></li>
                        <li><a href={"/Login"}><span>Logout</span></a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default LeftBar;