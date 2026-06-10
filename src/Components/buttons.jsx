import React from 'react';
import { Link } from 'react-router-dom';
import './styles/buttons.css'; // Importe o arquivo CSS que está logo abaixo

function Buttons() {
  return (
    <section id="banner" className="py-5 text-center">
      <div className="d-flex flex-wrap justify-content-center gap-3">
        <Link to="/regulamento" className="custom-btn btn-regulamento">
          <i className="fa-solid fa-list button-icon"></i> Regulamento
        </Link>
        <Link to="/login" className="custom-btn btn-cadastrar">
          <i className="fa-solid fa-right-to-bracket button-icon"></i> Cadastrar
        </Link>
        <Link to="/login" className="custom-btn btn-login">
          <i className="fa-solid fa-house button-icon"></i> Login/Painel
        </Link>
        <Link to="/tutoriais" className="custom-btn btn-videos">
          <i className="fa-solid fa-play button-icon"></i> Vídeos
        </Link>
      </div>
    </section>
  );
}

export default Buttons;
