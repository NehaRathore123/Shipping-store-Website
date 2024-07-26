import { Link } from 'react-router-dom';
import '../NavComponent/Nav.css';
import { useState , useEffect } from 'react';
import Auth from '../Authcomponent/Auth';
function Nav()
{
    const [navcontent,setNavcontent]=useState();
    useEffect(()=>{
        if(localStorage.getItem("role")=="admin")
        {
            setNavcontent(
                <>
                {/* Navbar Start */}
     <nav class="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
           <a href="index.html" class="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
               <h2 class="mb-2 text-white">ShipMent Hub</h2>
           </a>
           <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
               <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarCollapse">
               <div class="navbar-nav ms-auto p-4 p-lg-0">
                   <a  class="nav-item nav-link active"><Link to="/user">Admin Home</Link></a>
                  <a  class="nav-item nav-link "><Link to="/addcategory">Add Category</Link></a>
                   <a  class="nav-item nav-link "><Link to="/addsubcategory">Add Subcategory</Link></a>
                   <a  class="nav-item nav-link "><Link to="/addshipment">Add Shipment</Link></a>
              <a class="nav-item nav-link"><Link to="/manageusers">Manage Users</Link></a>
              <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">setting</a>
                    <div class="dropdown-menu fade-up m-0">
                        <a  class="dropdown-item"><Link to="/cpadmin">Change Password</Link></a>
                        <a class="dropdown-item"><Link to="/epadmin">Edit Profile</Link></a>
                      
                    </div>
                </div>
                {/*   <a  class="nav-item nav-link"><Link to="/cpadmin">Change Password</Link></a>
                   <a  class="nav-item nav-link"><Link to="/epadmin">Edit Profile</Link></a>*/}
                   <a  class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
             </div>
               <h4 class="m-0 pe-lg-5 d-none d-lg-block"><i class="fa fa-headphones text-primary me-3"></i>xxx xxx xxxx</h4>
           </div>
       </nav>
         {/* Navbar End */}</>
            )
        }
       else if(localStorage.getItem("role")=="user")
       {
        setNavcontent(
            <>
            {/* Navbar Start */}
 <nav class="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
       <a href="index.html" class="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
           <h2 class="mb-2 text-white">ShipMent Hub</h2>
       </a>
       <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
           <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarCollapse">
           <div class="navbar-nav ms-auto p-4 p-lg-0">
               <a  class="nav-item nav-link active"><Link to="/user">User Home</Link></a>
               <a  class="nav-item nav-link "><Link to="/viewshipment">View ShipMent</Link></a>
          <a  class="nav-item nav-link"><Link to="/cpuser">Change Password</Link></a>
                   <a  class="nav-item nav-link"><Link to="/epuser">Edit Profile</Link></a>
               <a class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
         </div>
           <h4 class="m-0 pe-lg-5 d-none d-lg-block"><i class="fa fa-headphones text-primary me-3"></i>xxx xxx xxxx</h4>
       </div>
   </nav>""
     {/* Navbar End */}</>
        )
       }
       else{
        setNavcontent(
            <>
            {/* Navbar Start */}
 <nav class="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
       <a href="index.html" class="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
           <h2 class="mb-2 text-white">ShipMent Hub</h2>
       </a>
       <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
           <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarCollapse">
           <div class="navbar-nav ms-auto p-4 p-lg-0">
               <a  class="nav-item nav-link active"><Link to="/user"> Home</Link></a>
        <a class="nav-item nav-link"><Link to="/about">About</Link></a>
               <a  class="nav-item nav-link"><Link to="/service">Service</Link></a>
               <a  class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
        <a  class="nav-item nav-link"><Link to="/register">Register</Link></a>
               <a  class="nav-item nav-link"><Link to="/login">Login</Link></a>
         </div>
           <h4 class="m-0 pe-lg-5 d-none d-lg-block"><i class="fa fa-headphones text-primary me-3"></i>xxx xxx xxxx</h4>
       </div>
   </nav>
     {/* Navbar End */}</>
        )
       }

    })
    return(

  <>
  <Auth/>
{navcontent}
 </>  

    );
}
export default Nav;