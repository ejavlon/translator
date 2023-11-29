import React, { memo } from 'react'
import logo from "../assets/images/kril-lotin.png";
import "../css/Header.css"
import { NavLink } from 'react-router-dom'

const Header = ()=> {
  return (
    <div id="main-header" className="main-header">
        <div className="container">
            <div className="wrapper">        
                <NavLink to="/">
                  <img className="logo" src={logo}/>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
export default memo(Header);