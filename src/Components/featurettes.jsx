import React from 'react';



export default function Featurettes() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        {/* Título da Seção */}
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold tracking-wider small">Inédito</span>
          <h2 className="display-6 fw-bold mt-1 text-dark">O Bolão que não Acumula!</h2>
          <div className="mx-auto bg-primary rounded" style={{ width: '60px', height: '4px' }}></div>
        </div>

        {/* Grid de Cards de Recursos */}
        <div className="row g-4 justify-content-center">
          
          {/* Recurso 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm hover-translate rounded-4 p-3 bg-white text-center">
              <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
				  {/*<img src="public/Images/conferir.png" className="img-fluid" style={{ maxHeight: '45px' }} alt="Ícone de conferência" />*/}
              </div>
              <div className="card-body d-flex flex-column p-2">
                <h5 className="card-title fw-bold text-dark mb-3">Fácil de Conferir!</h5>
                <p className="card-text text-muted small flex-grow-1">
                  Nossos resultados são Oficiais e retirados diretamente do site{' '}
                  <a href="https://www.ojogodobicho.com/deu_no_poste.htm" target="_blank" rel="noopener noreferrer" className="text-primary fw-semibold text-decoration-none">
                    Deu no Poste (PT-Rio)
                  </a>{' '}
                  para qualquer participante conferir de qualquer dispositivo.
                </p>
                <a href="https://www.ojogodobicho.com/deu_no_poste.htm" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 rounded-pill mt-3 fw-semibold shadow-sm">
                  Ver Resultados
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
           <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm hover-translate rounded-4 p-3 bg-white text-center">
              <div className="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                
              </div>
              <div className="card-body d-flex flex-column p-2">
                <h5 className="card-title fw-bold text-dark mb-3">Grupo Atualizado!</h5>
                <p className="card-text text-muted small flex-grow-1">
                  Em nosso grupo oficial você fica sabendo tudo sobre nossos resultados que são postados na hora! Entre no grupo e acompanhe as novidades.
                </p>
                <a href="https://chat.whatsapp.com/CGRVuzlYtD0JcKJHmv9ZyM?s=sh&p=a&mlu=2&amv=0" target="_blank" rel="noopener noreferrer" className="btn btn-success w-100 rounded-pill mt-3 fw-semibold shadow-sm">
                  Entrar no Grupo
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
           <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm hover-translate rounded-4 p-3 bg-white text-center">
              <div className="d-flex align-items-center justify-content-center bg-warning bg-opacity-15 rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                
              </div>
              <div className="card-body d-flex flex-column p-2">
                <h5 className="card-title fw-bold text-dark mb-3">Receba No PIX!</h5>
                <p className="card-text text-muted small flex-grow-1">
                  Receba seu prêmio no final da apuração e melhor no PIX sem burocracia ou taxas,e lembrando que nossos prêmios não acumula!
                </p>
                <a href="https://wa.me/5521980906884" className="btn btn-warning w-100 rounded-pill mt-3 fw-semibold shadow-sm">
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
