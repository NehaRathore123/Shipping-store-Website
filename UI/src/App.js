import './App.css';
import React from 'react';
import Nav  from './components/NavComponent/Nav';
import Home from './components/HomeComponent/Home';
import Banner from './components/bannercomponent/banner';
import About from './components/aboutcomponent/about';
import Service from './components/servicecomponent/service';
import Contact from './components/contactcomponent/contact';
import Register from './components/registercomponent/register';
import Login from './components/logincomponent/login';
import Logout from './components/Logoutcomponent/Logout';
import Footer from './components/FooterComponent/Footer';
import Adminhome from './components/Adminhomecomponent/adminhome';
import EPAdmin from './components/EPAdmincomponent/EPAdmin';
import CPAdmin from './components/CPAdmincomponent/CPAdmin';
import Userhome from './components/Userhomecomponent/userhome';
import CPUser from './components/CPUsercomponent/CPUser';
import EPUser from './components/EPUsercomponent/EPUser';
import Manageusers from './components/Manageusercomponent/Manageuser';
import Addcategory from './components/ADDCategorycomponent/Addcategory';
import Managecategory from './components/Managecategorycomponent/Managecategory';
import Addsubcategory from './components/ADDSubcategorycomponent/Addsubcategory';
import Managesubcategory from './components/Managesubcategorycomponent/Managesubcategory';
import Viewshipment from './components/Viewshipmentcomponent/Viewshipment';
import Viewsubcategory from './components/Viewsubcategorycomponent/Viewsubcategory';
import Addshipment from './components/AddShipmentcomponent/Addshipment';
import Manageshipment from './components/Manageshipmentcomponent/Manageshipment';
import Viewshipmenticon from './components/Viewshipmenticoncomponent/Viewshipmenticon';
import { Route, Routes } from 'react-router-dom';
import Viewbid from './components/Viewbidcomponent/Viewbid';
import ManageBid from './components/managebidcomponent/managebid';
import Verifyuser from './components/Verifyusercomponent/Verifyuser';


function App() {
return (
<>

<Nav/>
<Banner/>
<Routes>
  <Route path='' element={<Home />}></Route>
  <Route path='/about' element={<About />}></Route>
  <Route path='/contact' element={<Contact />}></Route>
  <Route path='/service' element={<Service />}></Route>
  <Route path='/register' element={<Register />}></Route>
  <Route path='/login' element={<Login />}></Route>
  <Route path='/logout' element={<Logout />}></Route>
  <Route path='/admin' element={<Adminhome/>}></Route>
  <Route path='/epadmin' element={<EPAdmin/>}></Route>
  <Route path='/cpadmin' element={<CPAdmin/>}></Route>
 <Route path='/manageusers' element={<Manageusers/>}></Route>
  <Route path='/user' element={<Userhome />}></Route>
  <Route path='/CPuser' element={<CPUser />}></Route>
  <Route path='/epuser' element={<EPUser />}></Route>
  <Route path='/viewshipment' element={<Viewshipment />}></Route>
  <Route path='/addcategory' element={<Addcategory />}></Route>
  <Route path='/managecategory' element={<Managecategory />}></Route>
  <Route path='/addsubcategory' element={<Addsubcategory />}></Route>
  <Route path='/managesubcategory' element={<Managesubcategory />}></Route>
  <Route path='/addshipment' element={<Addshipment />}></Route>
  <Route path='/manageshipment' element={<Manageshipment/>}></Route>
  <Route path='/viewsubcategory/:catnm' element={<Viewsubcategory/>}></Route>
  <Route path='/viewshipmenticon/:subcatnm' element={<Viewshipmenticon/>}></Route>
  <Route path='/viewbid/:_id' element={<Viewbid/>}></Route>
  <Route path='/managebid' element={<ManageBid/>}></Route>
  <Route path='/verifyuser/:email' element={<Verifyuser/>}></Route>

  




  





  

</Routes>
<Footer/>
   
    
       
</>
);
}

export default App;
