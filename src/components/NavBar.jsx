import React from "react";
import CartWidget from "./CartWidget.jsx"

const NavBar = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
            
            <div>
              <img className="nav-logo" src="/logo_fondo.png" alt="logo" />
            </div>

            <div className="nav-items">
                <div><a className="nav-item" href="productos">PRODUCTOS</a></div>
                <div><a className="nav-item" href="historia">HISTORIA</a></div>
                <div><a className="nav-item" href="galeria">GALERIA</a></div>
            </div>
            
            <CartWidget/>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
