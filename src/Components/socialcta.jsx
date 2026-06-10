import React from 'react';

function SocialCTA() {
  return (
    <section id="social-cta" className="py-5 bg-none bg-none text-white text-center position-relative overflow-hidden">
      {/* Elementos visuais de fundo abstratos para dar elegância */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-none opacity-10 blur-3"></div>
      
      <div className="container position-relative z-1">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            
            {/* Cabeçalho e Títulos com Hierarquia Visual Correta */}
            <div className="mb-4">
              <span className="badge bg-warning text-dark text-uppercase fw-bold px-3 py-2 rounded-pill mb-3 tracking-wider shadow-sm">
                🔥 Não Acumula!
              </span>
              <h2 className="display-5 fw-extrabold text-dark mb-3">
                Acompanhe nossos Concursos
              </h2>
              <h3 className="h4 fw-normal text-dark mb-3">
                Prêmios toda semana e o melhor: <span className="text-warning fw-bold">GARANTIDOS!</span>
              </h3>
              <p className="text-muted lead fs-6 mx-auto mb-0" style={{ maxWidth: '550px' }}>
                Veja nossas provas de pagamento publicamente em nossas Redes Sociais e jogue com total transparência.
              </p>
            </div>

            {/* Grade de Botões Responsivos e Modernizados */}
            <div className="row g-3 justify-content-center pt-2">
              <div className="col-sm-4 col-11">
                <a 
                  href="https://www.facebook.com/profile.php?id=61589735987375" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-lg w-100 py-3 rounded-4 fw-bold shadow hover-scale d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="fa-brands fa-facebook fs-5"></i> Facebook
                </a>
              </div>
              
              <div className="col-sm-4 col-11">
                <a 
                  href="https://instagram.com/10dezenasbr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-danger btn-lg w-100 py-3 rounded-4 fw-bold shadow hover-scale d-flex align-items-center justify-content-center gap-2"
                  style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', border: 'none' }}
                >
                  <i className="fa-brands fa-instagram fs-5"></i> Instagram
                </a>
              </div>
              
              <div className="col-sm-4 col-11">
                <a 
                  href="https://wa.me/5521983418583" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-success btn-lg w-100 py-3 rounded-4 fw-bold shadow hover-scale d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp fs-5"></i> WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialCTA;
