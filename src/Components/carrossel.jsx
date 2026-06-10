import React from 'react';
import './styles/carousel.css'; 
import banner5 from './images/banner5.png';
import banner12 from './images/banner12.png';


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
                <img src={banner5} className="d-block w-100"  alt="Destaque principal" style={{ objectFit: 'cover' }} />{/*style={{ height: '450px', objectFit: 'cover' }}*/}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0"></div>
              </div>
              <div className="carousel-caption d-none d-md-block text-start start-5 bottom-30 custom-caption opacity-0">
                <span className="badge bg-primary mb-2 px-3 py-2 text-uppercase tracking-wider">Novidade</span>
                <h2 className="display-5 fw-bold text-white mb-2">Receba Comissões</h2>
                <p className="lead text-white-50 mb-4">Em nossa plataforma você recebe comissões vitalícias,em qualquer bilhete comprado por seus indicados.</p>
                <a href="#saiba-mais" className="btn btn-primary btn-lg px-4 rounded-pill shadow">Comece já</a>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item" data-bs-interval="5000">
              <div className="position-relative">
                <img src={banner12} className="d-block w-100"  alt="Segunda novidade" style={{ objectFit: 'cover' }}/>{/*style={{ height: '450px', objectFit: 'cover' }}*/}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0"></div>
              </div>
              <div className="carousel-caption d-none d-md-block text-start start-5 bottom-30 custom-caption opacity-0">
                <span className="badge bg-success mb-2 px-3 py-2 text-uppercase tracking-wider">Não Acumula</span>
                <h2 className="display-5 fw-bold text-white mb-2">Alguém vai ganhar</h2>
                <p className="lead text-white-50 mb-4">Nossos Bolões não acumulam,assim você fica ciente que não retemos saldo de ninguém.</p>
                <a href="#produtos" className="btn btn-success btn-lg px-4 rounded-pill shadow">Fazer cadastro</a>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item" data-bs-interval="5000">
              <div className="position-relative">
                <img src={banner5} className="d-block w-100"  alt="Terceiro destaque" style={{ objectFit: 'cover' }} />{/*style={{ height: '450px', objectFit: 'cover' }}*/}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0"></div>
              </div>
              <div className="carousel-caption d-none d-md-block text-start start-5 bottom-30 custom-caption opacity-0">
                <span className="badge bg-warning text-dark mb-2 px-3 py-2 text-uppercase tracking-wider">Exclusivo</span>
                <h2 className="display-5 fw-bold text-white mb-2">Você nunca viu</h2>
                <p className="lead text-white-50 mb-4">Nosso método de apuração é fácil e rápido,utizando resultados públicos sem manipulação e total transparência.</p>
                <a href="#contato" className="btn btn-warning btn-lg px-4 rounded-pill shadow fw-semibold">Criar conta</a>
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

