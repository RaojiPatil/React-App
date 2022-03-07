import React from 'react'

import {NavLink} from "react-router-dom";

const links = [{
    title: "Home",
    to: "/"
},
{
    title: "About",
    to: "/about"
},
{
    title: "Product",
    to: "/product"
},
{
    title: "Login",
    to: "/login"
}]

export const Navbar = () => {
  return (
    <div>
        {links.map((title, to, index) => {
            return <NavLink  Key= {index} to = {to}>{links.title}</NavLink>
        })}
    </div>
  )
}
