import React from 'react';

function How() {
  return (
    <section id="preco" className="py-5 bg-none text-dark">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold tracking-wider small">FAQ</span>
          <h2 className="display-6 fw-bold mt-1 text-dark">Como Funciona?</h2>
          <p className="text-muted lead fs-6 mx-auto" style={{ maxWidth: '600px' }}>
            Retire aqui algumas dúvidas sobre o funcionamento de nosso Bolão!
          </p>
          <div className="mx-auto bg-primary rounded" style={{ width: '50px', height: '4px' }}></div>
        </div>

        {/* Bloco do Accordion Centralizado e Modernizado */}
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="accordion custom-accordion d-flex flex-column gap-3" id="accordionFAQ">
              
              {/* Item 1 */}
              <div className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-light">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold text-dark bg-light py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    1. O que é o Bolão Mega Doação?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body bg-white text-muted lh-base">
                    É um grupo de amigos disputando entre si um belo prêmio toda semana, de maneira honesta e confiável, e o melhor: não acumula!
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-light">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold text-dark bg-light py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    2. Posso me cadastrar e ganhar?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body bg-white text-muted lh-base">
                    É fácil! Basta se cadastrar gratuitamente, compartilhar seu link de afiliado e ganhar 10% de comissão em cada aposta que seus indicados fizerem. O melhor é que você não precisa participar de jogo nenhum.
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-light">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold text-dark bg-light py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    3. Como Participar?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body bg-white text-muted lh-base">
                    Após criar seu cadastro, escolha o jogo aberto de sua preferência, selecione 10 dezenas de 01 à 25 de sua preferência, acompanhe os resultados e torça para ser um dos contemplados.
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-light">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold text-dark bg-light py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    4. De onde e como são retirados os resultados oficiais?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body bg-white text-muted lh-base">
                    Os resultados são retirados do site Oficial da Caixa{' '}
                    <a href="https://loterias.caixa.gov.br/Paginas/Lotofacil.aspx" target="_blank" rel="noopener noreferrer" className="text-primary fw-semibold text-decoration-none">
                      Resultado da Lotofácil
                    </a>{' '}
                    de segunda à sexta às 20:00, até alguém alcançar os 10 acertos.
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-light">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold text-dark bg-light py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    5. Posso repetir as dezenas?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body bg-white text-muted lh-base">
                    Não,nossos sorteios são únicos e ainda a LotoFácil não sorteia o mesmo número duas vezes;
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-light">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold text-dark bg-light py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    6. Quando iniciam os sorteios?
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body bg-white text-muted lh-base">
                    Nosso Bolão inicia às 21:00 de segunda à sábado (Horário de Brasília) e você tem até às 20:50 para escolher suas dezenas.
                  </div>
                </div>
              </div>

              {/* Item 7 */}
              <div className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-light">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold text-dark bg-light py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    7. E se o Bolão tiver mais de 1 ganhador?
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body bg-white text-muted lh-base">
                    Caso haja mais de 1 ganhador, os prêmios serão divididos em partes iguais entre os acertadores.
                  </div>
                </div>
              </div>

              {/* Item 8 */}
              <div className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-light">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold text-dark bg-light py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    8. Como é feita a distribuição dos Prêmios?
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body bg-white text-muted lh-base">
                    Toda arrecadação é distribuída entre os participantes: 75% para quem fizer mais acertos e 15% para aqueles que ficaram em 2º e 10% para aqueles
					que ficaram em 3º, já deduzida a taxa de administração.Isso se o Bolão vigente tiver premiação até o 3º lugar,caso contrário somente o 1º Lugar ganha o montante do rateio!
                  </div>
                </div>
              </div>

              {/* Item 9 */}
              <div className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-light">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold text-dark bg-light py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                    9. Como é feita a conferência dos resultados?
                  </button>
                </h2>
                <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body bg-white text-muted lh-base">
                    Nossos resultados são extraídos 5 vezes por semana direto do site{' '}
                    <a href="https://loterias.caixa.gov.br/Paginas/Lotofacil.aspx" target="_blank" rel="noopener noreferrer" className="text-primary fw-semibold text-decoration-none">
                      Resultado Lotofácil
                    </a>
                    . Esses resultados são postados em nosso Grupo Oficial do WhatsApp a partir do sorteio de segunda-feira às 20:00.
                  </div>
                </div>
              </div>

              {/* Item 10 */}
              <div className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-light">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold text-dark bg-light py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                    10. Posso receber e pagar via PIX?
                  </button>
                </h2>
                <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body bg-white text-muted lh-base">
                    Para a conveniência de todos, nós só aceitamos pagamentos e recebimentos via PIX. Você gerencia as transferências e os saques diretamente através do seu painel interno.
                  </div>
                </div>
              </div>

              {/* Item 11 (Completado e Corrigido) */}
              <div className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-light">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold text-dark bg-light py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                    11. Posso entrar no grupo para acompanhar?
                  </button>
                </h2>
                <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body bg-white text-muted lh-base">
                    Sim! Nosso grupo é totalmente aberto para novos participantes entrarem, acompanharem as movimentações, checarem as provas de pagamento e tirarem dúvidas em tempo real.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default How;
