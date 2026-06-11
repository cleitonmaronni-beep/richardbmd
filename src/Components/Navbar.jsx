import React from 'react';
import logo from './images/logo.png';
import './styles.css';

function Navbar(){
    return (
      <section className='navbar'>
     <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container">
            
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" height="90" width="360"/>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#footer">Contato</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/regulamento">Regulamento</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/tutoriais">Como Funciona?</a>
            </li>
          </ul>
        </div>    
      
    </div>
  </nav>
  </section>
    );
  }

export default Navbar;