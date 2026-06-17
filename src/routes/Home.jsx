import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Carrossel from "../Components/carrossel.jsx";
import Featurettes from "../Components/featurettes.jsx";
import How from "../Components/how.jsx";
import Footer from "../Components/footer.jsx";
import SocialCTA from "../Components/socialcta.jsx";
import Youtube from "../Components/youtube.jsx";
import ModalApostaWhatsApp from "../Components/createbet.tsx";
import PrizeTable from "../Components/prizetable.tsx";

function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <hr />
      <Carrossel/> <br />
      <center>
        <h3>Clique no Botão e faça sua Aposta Agora!</h3>
        <ModalApostaWhatsApp />
      </center>
      <Featurettes />
      <SocialCTA />
      <>
        <center>
          <PrizeTable />
        </center>
      </>
      <br />
      <center>
        <h3>Muito fácil participar,basta clicar no botão abaixo!</h3>
        <ModalApostaWhatsApp />
      </center>
      <Youtube />
      <br />
      <center>
        <h3>Não perca tempo envie suas dezenas agora!</h3>
        <ModalApostaWhatsApp />
      </center>
      <How />
      <Footer />
    </div>
  );
}

export default Home;
