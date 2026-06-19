import React from 'react';
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';

export default function Carousel() {
  // Estilo inline para garantir altura fixa e cortar a imagem sem distorcer
  const imageStyle = {
    height: '100px',       // Altura padrão para telas grandes
    objectFit: 'cover',    // Corta a imagem proporcionalmente sem distorcer
    width: '50%'          // Garante a largura total
  };

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide shadow rounded overflow-hidden" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={foto1} style={imageStyle} className="d-block img-fluid" alt="slide 1"/>
        </div>
        <div className="carousel-item">
          <img src={foto2} style={imageStyle} className="d-block img-fluid" alt="slide 2"/>
        </div>
        <div className="carousel-item">
          <img src={foto1} style={imageStyle} className="d-block img-fluid" alt="slide 3"/>
        </div>
      </div>
      
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
}
