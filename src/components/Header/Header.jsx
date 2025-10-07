import React,{useState} from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {

  const[menu,setMenu] = useState("home");

  return (
    <div className='header'>
      <div className="header-content">
        <h2>Order your FAVORITE food here! fOOdie</h2>
        <p>Order the best delicious item from here in just minutes of hunger.
            Don't worry we are here for kill your hunger! fOOdie
        </p>
        <Link to="/explore-menu"><button>View Menu</button></Link> 
      </div>
    </div>
  )
}

export default Header
