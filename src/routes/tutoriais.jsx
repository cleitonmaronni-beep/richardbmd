import React from 'react';


function Tutoriais(){
    return(
        <section>
            <div className="container">
                <div>
                    <h2>Vídeos Tutoriais</h2>
                </div>
                <hr/>

                  <div>
                    <h3>Criando Cadastro</h3><br/>

                    <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/4mjELj6Cf7s?si=Lv9Zucc47JEWar7P" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>

                    </iframe>			        
                  </div>
                 <hr/>
		
            </div>
		</section>
  );

}


export default Tutoriais;
