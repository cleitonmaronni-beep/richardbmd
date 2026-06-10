import React from 'react';
import Navbar from './Components/Navbar';
import Carrossel from './Components/carrossel.jsx';
import Features from './Components/features.jsx';
import How from './Components/how.jsx';
import Footer from './Components/footer.jsx';
import SocialCTA from './Components/socialcta.jsx';
import Youtube from './Components/youtube.jsx';
import ModalApostaWhatsApp from './Components/createbet.tsx';
import PrizeTable from './Components/prizetable.tsx';


function Home (){
    
    return(

        <div>

            <Navbar/><br/>
    <Carrossel/> <br/>
     <center><ModalApostaWhatsApp/></center>
    
    <Features/>   
    <SocialCTA/>

    <>
    <center>
    <h1> Veja nossa tabela de Premiações e venha participar!</h1>
    <h3>Quanto mais participantes maior é o prêmio!</h3>
    <PrizeTable/>
    </center>
    </>

    <br/>
    <center>
    <ModalApostaWhatsApp/>
    </center>

    <Youtube/>

    <br/>
    <center>
    <ModalApostaWhatsApp/>
    </center>

    <How/>
    <Footer/>

</div>

    )
}


export default Home;
