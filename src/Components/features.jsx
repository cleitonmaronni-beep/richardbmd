import React from 'react';
import conferir from './images/conferir.png';
import convidar from './images/convidar.png';
import ganhar from './images/ganhar.png';
import dinheiro from './images/dinheiro1.png';

function Features() {
  return (
    <section id="features" className="py-5 bg-none">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold tracking-wider small">Inédito!!</span>
          <h2 className="display-6 fw-bold mt-1 text-dark">O Bolão onde todos ganham!</h2>
          <div className="mx-auto bg-primary rounded" style={{ width: '60px', height: '4px' }}></div>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Recurso 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm hover-translate rounded-4 p-3 bg-white text-center">
              <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                <img src={conferir} className="img-fluid" style={{ maxHeight: '45px' }} alt="Ícone de conferência" />
              </div>
              <div className="card-body d-flex flex-column p-2">
                <h5 className="card-title fw-bold text-dark mb-3">Fácil de Conferir!</h5>
                <p className="card-text text-muted small flex-grow-1">
                  Nossos resultados são Oficiais e retirados diretamente do site
                  <a href="https://www.ojogodobicho.com/deu_no_poste.htm" target="_blank" rel="noopener noreferrer" className="text-primary fw-semibold text-decoration-none">
                    Deu no poste (PT-Rio)
                  </a>
                  para qualquer participante conferir de qualquer dispositivo.
                </p>
                <a href="https://www.ojogodobicho.com/deu_no_poste.htm" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100 rounded-pill mt-3 fw-semibold shadow-sm">
                  Ver Resultados
                </a>
              </div>
            </div>
          </div>

          {/* Recurso 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm hover-translate rounded-4 p-3 bg-white text-center">
              <div className="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                <img src={convidar} className="img-fluid" style={{ maxHeight: '45px' }} alt="Ícone do grupo" />
              </div>
              <div className="card-body d-flex flex-column p-2">
                <h5 className="card-title fw-bold text-dark mb-3">Grupo Atualizado!</h5>
                <p className="card-text text-muted small flex-grow-1">
                  Em nosso grupo oficial você fica sabendo tudo sobre nossos resultados que são postados na hora! Entre no grupo e acompanhe as novidades.
                </p>
                <a href="https://chat.whatsapp.com/HxNSKBnToAkLVSBM0WDb5b" target="_blank" rel="noopener noreferrer" className="btn btn-success w-100 rounded-pill mt-3 fw-semibold shadow-sm">
                  Entrar no Grupo
                </a>
              </div>
            </div>
          </div>

          {/* Recurso 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm hover-translate rounded-4 p-3 bg-white text-center">
              <div className="d-flex align-items-center justify-content-center bg-warning bg-opacity-15 rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                <img src={ganhar} className="img-fluid" style={{ maxHeight: '45px' }} alt="Ícone de prêmio" />
              </div>
              <div className="card-body d-flex flex-column p-2">
                <h5 className="card-title fw-bold text-dark mb-3">Todos ganham!</h5>
                <p className="card-text text-muted small flex-grow-1">
                  Ganhe com qualquer quantidade de acertos,e melhor quanto mais participantes maior é o Prêmio!Uma maneira inédita de ser um vencedor.
                </p>
                <a href="https://10dezenas.top/login" className="btn btn-primary w-100 rounded-pill mt-3 fw-semibold shadow-sm">
                  Comece Grátis
                </a>
              </div>
            </div>
          </div>

          {/* Recurso 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm hover-translate rounded-4 p-3 bg-white text-center">
              <div className="d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                <img src={dinheiro} className="img-fluid" style={{ maxHeight: '45px' }} alt="Ícone de pagamento" />
              </div>
              <div className="card-body d-flex flex-column p-2">
                <h5 className="card-title fw-bold text-dark mb-3">Fácil de Receber!</h5>
                <p className="card-text text-muted small flex-grow-1">
                  Pagamos seu prêmio em até 24 hours ou menos via PIX, além de suas comissões por convites. Faça parte da nossa comunidade agora mesmo.
                </p>
                <a href="https://10dezenas.top/login" className="btn btn-danger w-100 rounded-pill mt-3 fw-semibold shadow-sm">
                  Fazer Cadastro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
