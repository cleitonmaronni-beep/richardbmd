import React from 'react';
import './styles.css'; 
import banner3 from '../assets/banner3.png';
import tabela from '../assets/tabela.png';
import tabela2 from '../assets/tabela2.png';




export default function Carrossel() {
  return (
    <section id="carrossel" className="py-5 bg-none">
      <div className="container">
        <div 
          id="customCarousel" 
          className="carousel slide carousel-fade shadow-lg rounded-4 overflow-hidden" 
          data-bs-ride="carousel"
        >
          {/* Indicadores Inferiores */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Conteúdo do Carrossel */}
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active" data-bs-interval="5000">
              <div className="position-relative">
                <img src={banner3} className="d-block w-100"  alt="Destaque principal" style={{ objectFit: 'cover' }} />;{/*style={{ height: '450px', objectFit: 'cover' }}*/}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-none opacity-0"></div>
              </div>
              
            </div>

            {/* Slide 2 */}
            <div className="carousel-item" data-bs-interval="5000">
              <div className="position-relative">
                <img src={tabela} className="d-block w-100"  alt="Segunda novidade" style={{ objectFit: 'cover' }}/>{/*style={{ height: '450px', objectFit: 'cover' }}*/}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-none opacity-0"></div>
              </div>
              
            </div>

            {/* Slide 3 */}
            <div className="carousel-item" data-bs-interval="5000">
              <div className="position-relative">
                <img src={tabela2} className="d-block w-100"  alt="Terceiro destaque" style={{ objectFit: 'cover' }} />{/*style={{ height: '450px', objectFit: 'cover' }}*/}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-none opacity-0"></div>
              </div>
              
            </div>
          </div>

          {/* Botões de Navegação */}
          <button className="carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon p-3 bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon p-3 bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>
    </section>
  );
}

