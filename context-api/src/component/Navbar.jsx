import React from 'react'

import "./navbar.css";
import { Outlet, Link } from 'react-router-dom';

export const Navbar = () => {
  return (
<>
    <div className='navbar'>
    <h2>
      <Link to="/Home" id="home">Home</Link>
      <Link to="/About" id="About">About</Link>
      <Link to="/Todo" id="todo">Todo</Link>
      </h2>
    </div>
    <Outlet/>
    </>
  )
}
