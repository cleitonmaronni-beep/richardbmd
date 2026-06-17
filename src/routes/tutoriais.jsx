import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/footer.jsx';
import ModalApostaWhatsApp from '../Components/createbet.jsx'

function Tutoriais() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Menu Superior */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main className="flex-grow-1 container py-5">
        
        {/* Cabeçalho da Página */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-dark mb-2">Vídeos Tutoriais</h1>
          <p className="text-muted fs-5">Aprenda a utilizar nossa plataforma em poucos minutos</p>
          <div className="mx-auto bg-primary rounded" style={{ width: '60px', height: '4px' }}></div>
        </div>

        {/* Grade de Tutoriais */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            
            {/* Card do Vídeo */}
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
              
              {/* Container Responsivo do YouTube (Proporção 16:9) */}
              <div className="ratio ratio-16x9 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/4mjELj6Cf7s?si=Lv9Zucc47JEWar7P"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Corpo do Card */}
              <div className="card-body p-4 text-center">
                <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-2 rounded-pill fw-semibold">
                  Passo 1
                </span>
                <h3 className="h5 card-title fw-bold text-dark mb-2">
                  Enviando Suas Dezenas
                </h3>
                <p className="card-text text-muted small mb-0">
                  Siga as instruções do vídeo para criar sua aposta de forma rápida e segura.
                </p>
                <ModalApostaWhatsApp/>
              </div>

            </div>

          </div>
        </div>

      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default Tutoriais;
