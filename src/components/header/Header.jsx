import React from 'react'
import "../header/header.css"
import logo from "../../assest/logo.png"


const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="logo" />
    </div>

  )
}

export default Header