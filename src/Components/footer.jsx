import React from 'react';
import './styles.css'; // Ajustado para caminho relativo padrão do React

function Footer() {
  const ano = new Date().getFullYear(); 

  return ( 
    <footer id="footer" className="bg-dark text-white-50 py-5 border-top border-secondary border-opacity-25">    
      <div className="container text-center">
        <div className="row justify-content-center align-items-center g-4">
          
          {/* Ícones de Redes Sociais com Efeito Hover */}
          <div className="col-12">
            <ul className="list-unstyled d-flex justify-content-center align-items-center gap-4 mb-0">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61590770284347" target="_blank" rel="noopener noreferrer" className="text-white-100 hover-text-primary transition-all">
                  <i className="fa-brands fa-facebook fs-3"></i>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white-100 hover-text-danger transition-all">
                  <i className="fa-brands fa-youtube fs-3"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mdoacao?igsh=MTcyOGtqcTl2bW5qMQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white-100 hover-text-instagram transition-all">
                  <i className="fa-brands fa-instagram fs-3"></i>
                </a>
              </li>						
              <li>
                <a href="https://wa.me/5521980906884" target="_blank" rel="noopener noreferrer" className="text-white-100 hover-text-success transition-all">
                  <i className="fa-brands fa-whatsapp fs-3"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Divisor Sutil */}
          <div className="col-md-6">
            <hr className="text-secondary my-2 opacity-25" />
          </div>

          {/* Contato de E-mail */}
          <div className="col-12">
            <a href="mailto:bolaomegadoacao@gmail.com" className="text-decoration-none text-white fw-medium hover-underline d-inline-flex align-items-center gap-2">
              <i className="fa-regular fa-envelope"></i> bolaomegadoacao@gmail.com
            </a>
          </div>

          {/* Direitos Autorais */}
          <div className="col-12">
            <p className="mb-0 small text-muted">
              &copy; {ano} <span className="text-white-50 fw-semibold">Bolão Mega Doação</span>. Todos os direitos reservados.
            </p>
            <p className="mb-0 x-small text-muted mt-1">
              Desenvolvido com carinho e foco em performance.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
