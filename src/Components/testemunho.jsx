import React from 'react';
import cliente1 from './images/cliente1.jpg';
import cliente2 from './images/cliente2.png';

function Testemunho() {
  return (
    <section id="youtube" className="py-5 bg-none text-dark">
      <div className="container">
        {/* Título da Seção */}
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold tracking-wider small">Depoimentos</span>
          <h2 className="display-6 fw-bold mt-1">Quem usa, aprova!</h2>
          <div className="mx-auto bg-primary rounded" style={{ width: '50px', height: '4px' }}></div>
        </div>

        {/* Estrutura do Carrossel */}
        <div 
          id="testimonialCarousel" 
          className="carousel carousel-dark slide carousel-fade max-w-750 mx-auto text-center" 
          data-bs-ride="carousel"
        >
          {/* Indicadores inferiores para melhor navegação */}
          <div className="carousel-indicators mb-n4">
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>

          <div className="carousel-inner px-5 py-3">
            {/* Depoimento 1 */}
            <div className="carousel-item active" data-bs-interval="5000">
              <div className="card border-0 bg-transparent">
                <div className="card-body">
                  {/* Ícone de Aspas Elegante */}
                  <i className="fa-solid fa-quote-left text-primary opacity-25 display-4 mb-3 d-block"></i>
                  <h3 className="fs-4 fw-normal lh-base text-secondary mb-4 italic-quote">
                    "Excelente plataforma para aumentar seus ganhos diários sem esforço, e ideal para você que já faz suas apostas online."
                  </h3>
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <img 
                      src={cliente1} 
                      className="rounded-circle shadow-sm border border-2 border-white" 
                      style={{ width: '65px', height: '65px', objectFit: 'cover' }} 
                      alt="Foto de Marcio Martins" 
                    />
                    <div className="text-start">
                      <h5 className="mb-0 fw-bold text-dark fs-6">Marcio Martins</h5>
                      <small className="text-muted">São Paulo - SP</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>      

            {/* Depoimento 2 */}
            <div className="carousel-item" data-bs-interval="5000">
              <div className="card border-0 bg-transparent">
                <div className="card-body">
                  {/* Ícone de Aspas Elegante */}
                  <i className="fa-solid fa-quote-left text-primary opacity-25 display-4 mb-3 d-block"></i>
                  <h3 className="fs-4 fw-normal lh-base text-secondary mb-4 italic-quote">
                    "Resultados oficiais, e resultados de fácil conferência a qualquer pessoa na internet ou não."
                  </h3>
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <img 
					  src={cliente2} 
                      className="rounded-circle shadow-sm border border-2 border-white" 
                      style={{ width: '65px', height: '65px', objectFit: 'cover' }} 
                      alt="Foto de João Silva" 
                    />
                    <div className="text-start">
                      <h5 className="mb-0 fw-bold text-dark fs-6">João Silva</h5>
                      <small className="text-muted">Rio de Janeiro - RJ</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>      
          </div>

          {/* Botões de Navegação Corrigidos (Fora da div carousel-inner) */}
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-white p-3 rounded-circle shadow-sm" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-white p-3 rounded-circle shadow-sm" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
        
      </div>
    </section>
  );
}

export default Testemunho;
