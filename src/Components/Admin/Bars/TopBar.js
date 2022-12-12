import "../CSS/AdminStyle.css";

const TopBar=()=>{
    return(
        <div>
            <section id="main-content">
                <header>
                   <div class="header-left">
                       <h2 class="toggle-btn">
                           <i class="fa fa-bars"></i> Dashboard
                       </h2>
                   </div>
                   <div class="header-left header-serach">
                       <div class="serach-par">
                           <input class="search" type="text" placeholder="Search Here..." />
                           <i class="fa fa-search"></i>
                       </div>
                   </div>
                   <div class="header-left header-profile">
                       <img src="" class="img-responsive" />
                       <h3>Profile</h3>
                       <p>Admin</p>
                   </div>
                   <div class="clear"></div>
               </header>
            </section>
        </div>
    )
}
export default TopBar;