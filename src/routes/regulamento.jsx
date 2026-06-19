import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/footer.jsx';

function Regulamento() {
  
  
  return (
	<>
	<Navbar/>
	<br/><br/><br/><br/>
    <div className="container my-4">
      {/* Cartão Principal do Regulamento */}
      <div className="card shadow-sm border-0">
        <div className="card-header bg-dark text-white p-4 text-center rounded-top">
          <h1 className="h3 mb-0 fw-bold">Regulamento Bolão Mega Doação</h1>
        </div>
        
        <div className="card-body p-4 p-md-5">
          <p className="lead text-muted mb-4 text-justify">
            Esta é uma iniciativa que visa promover a descontração e a competição sadia entre os participantes. 
            O dinheiro arrecadado será convertido em prêmio(s) ao(s) ganhador(es). 
            Exceção feita ao percentual destinado a administração do Bolão Mega Doação.
          </p>

          <hr className="my-4 text-secondary" />

          {/* Seção: Como Participar */}
          <section className="mb-4">
            <h5 className="text-primary fw-bold mb-3">Como Participar?</h5>
            <p className="text-secondary text-justify">
              Para participar basta clicar no botão "Enviar seus Números" na página inicial,escolher suas dezenas e enviar
              pelo whatsapp!
            </p>
          </section>

          <hr className="my-4 text-secondary" />

          {/* Seção: Escolhendo as Dezenas */}
          <section className="mb-4">
            <h5 className="text-primary fw-bold mb-3">Escolhendo as Dezenas</h5>
            <p className="text-secondary text-justify">
              Escolha 10 dezenas entre 00 e 99. Você pode também escolher dezenas repetidas, mas lembrando que você só irá computar, caso a dezena repetida escolhida saia mais de 1 vez em qualquer resultado! 
              Aguarde a apuração e torça para estar nas primeiras colocações.
            </p>
          </section>

          <hr className="my-4 text-secondary" />

          {/* Seção: Apuração */}
          <section className="mb-4">
            <h5 className="text-primary fw-bold mb-3">Apuração</h5>
            <p className="text-secondary text-justify">
              Nossos concursos se iniciam toda segunda-feira a partir das 14:20 (Horário de Brasília), por esse motivo você tem até às 14:00 para fazer suas apostas.
            </p>
            <p className="text-secondary text-justify">
              Nossos resultados são extraídos 6 vezes por dia direto do site{' '}
              <a href="https://www.ojogodobicho.com/deu_no_poste.htm" target="_blank" rel="noopener noreferrer" className="fw-semibold text-decoration-none text-info">
                Deu no Poste (PT-RIO).
              </a>{' '}
              (9:30 – 11:30 - 14:30 - 16:30 - 18:30 e 21:30, exceto segunda-feira, pois iniciamos a partir do resultado de 14:20). Porém, só é válida a DEZENA DO MEIO (última da Milhar), e resultados do primeiro ao sétimo prêmio.
            </p>
            <p className="text-secondary text-justify">
              Esses resultados são postados em nosso Grupo e após isso as dezenas são inseridas no site para apuração e envio do resultado no GRUPO do ZAP.
            </p>
            <p className="text-secondary text-justify">
              Assim que algum participante acertar as 10 dezenas escolhidas o concurso acaba e o 1º PRÊMIO é pago para aquele participante que atingiu os 10 acertos primeiro e o restante da premiação para os segundos e terceiros colocados de acordo com o Ranking (quando disponível).
            </p>
            <p className="text-secondary text-justify">
              Caso ninguém atinja os dez acertos até o último resultado de sexta-feira às 21:20, os prêmios são distribuídos para os participantes com mais acertos (9/8/7 e etc…) de acordo com a colocação no Ranking.
            </p>
            <p className="text-secondary text-justify fw-medium text-dark">
              Nossos concursos NÃO ACUMULAM, entre em contato conosco caso tenha mais alguma dúvida!<br/> 
              Caso haja mais de 1 ganhador, os prêmios serão divididos em partes iguais.
            </p>
          </section>

          <hr className="my-4 text-secondary" />

         

          {/* Seção: Saques */}
          <section className="mb-4">
            <h5 className="text-primary fw-bold mb-3">Sobre os Saques</h5>
            <p className="text-secondary text-justify">
              Os saques são processados em até 24 horas após o pedido, de domingo à domingo, 24 horas por dia.
            </p>
            <p className="text-secondary text-justify">
              Os valores serão enviados diretamente para a conta indicada pelo participante via PIX, não tendo responsabilidade o Bolão Mega Doação por valores e chaves PIX incorretas indicadas pelo requerente, portanto verifique sua chave antes de pedir seus valores a receber.
            </p>
          </section>

          <hr className="my-4 text-secondary" />

          {/* Seção: Provas de Pagamento */}
          <section className="mb-4">
            <h5 className="text-primary fw-bold mb-3">Provas de Pagamento</h5>
            <p className="text-secondary text-justify">
              Para manter a transparência e a comodidade de todos, os vencedores de algum valor nos concursos deverão deixar seu depoimento público para a visualização de todos os demais participantes.
            (Opcional)
            </p>
          </section>

          <hr className="my-4 text-secondary" />

          {/* Seção: Divulgação */}
          <section className="mb-4">
            <h5 className="text-primary fw-bold mb-3">Divulgação em Mídias Sociais</h5>
            <p className="text-secondary text-justify">
              Pode ser que eventualmente a prova de pagamento seja compartilhada nas Mídias Sociais Oficiais da plataforma, para visualização e consulta pública, aumentando assim o número de participantes, transparência e confiabilidade em nosso Bolão.
            </p>
          </section>

          <hr className="my-5 text-secondary" />

          {/* Alerta Final */}
          <div className="alert alert-warning border-0 p-3 text-center mb-0" role="alert">
            <h6 className="fw-bold mb-0 text-dark">
              O Bolão Mega Doação se reserva no direito de alterar, modificar e editar essas normas descritas a qualquer momento mediante aviso prévio.
            </h6>
          </div>

        </div>
      </div>
    </div>
	<Footer/>
	</>
  );
}

export default Regulamento;
