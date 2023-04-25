import React from 'react'
import { Outlet } from 'react-router-dom'
import '../styles/navbar.css';

export const Navbar = () => {
  return (
    <div className="all">
      <div className='header'>
        <div className="optionsR">
          <span className="options">Tours</span>
          <span className="options">Desafios</span>
          <span className="options">Nosotros</span>
        </div>
        <div className="logos">
          <span className="logo">
          </span>
        </div>
        <div className="optionsL">
          <spam className="options">Contacto</spam>
          <spam className="options">Blog</spam>
          <spam className="options">Idioma</spam>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}
