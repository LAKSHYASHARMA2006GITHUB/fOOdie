import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import{Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const[menu,setMenu] = useState("home");

  const{getTotalCartAmount} = useContext(StoreContext);


  return (
    <div className="navbar">
      { <Link to ='/'><img src={assets.logo1} alt="" className='logo' /></Link>}      {/*page navigation kea liyea link ka use*/}
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href='#footer' onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="search" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0 ? "":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
