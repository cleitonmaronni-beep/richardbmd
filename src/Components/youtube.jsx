import React from 'react';

function Youtube() {
  return (
    <section id="youtube" className="py-5 bg-none text-white position-relative overflow-hidden">
      {/* Detalhes de luz de fundo para destacar a área do vídeo */}
      <div className="position-absolute top-50 start-50 translate-middle w-75 h-75 bg-danger opacity-10 blur-4 rounded-circle pointer-events-none"></div>

      <div className="container position-relative z-1">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            {/* Cabeçalho com hierarquia limpa */}
            <span className="badge bg-danger text-uppercase fw-bold px-3 py-2 rounded-pill mb-3 tracking-wider shadow-sm">
              Passo a Passo
            </span>
            <h2 className="display-5 fw-black text-white mb-2">Como Participar?</h2>
            <h3 className="h5 fw-normal text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
              Veja como é fácil! Aproveite para se inscrever em nosso canal e não perder nenhuma novidade.
            </h3>
          </div>
        </div>

        {/* Container do Vídeo com Moldura Elegante */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-9 col-xl-8">
            <div className="ratio ratio-16x9 rounded-4 shadow-2xl border border-secondary border-opacity-25 overflow-hidden bg-black">
              <iframe 
                src="https://www.youtube.com/embed/WQ-Qu1cTgXc?si=b5ldGJs-ZlEJQWC0" 
                title="YouTube video" 
                allowFullScreen
                className="w-100 h-100"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Botão de Chamada para Ação */}
        <div className="row justify-content-center text-center">
          <div className="col-md-6 col-lg-5">
            <a 
              href="https://www.youtube.com/@10Dezenasbr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-danger btn-lg w-100 py-3 rounded-4 fw-bold shadow-lg hover-pulse d-inline-flex align-items-center justify-content-center gap-2"
            >
              <i className="fa-brands fa-youtube fs-4"></i> Canal no YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Youtube;
