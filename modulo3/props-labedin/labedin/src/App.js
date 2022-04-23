import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Dickson Freitas" 
          descricao="Tenhos 23 anos, apaixonado por tecnologia e em fazer drinks."
        />
        
          <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/32/32195.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
        imagem = "https://as1.ftcdn.net/v2/jpg/01/40/87/88/1000_F_140878889_5q9KGY7b72ATF2uIT8mJ9ISdrxog4Caz.jpg"
        Email="dickfreitas12@gmail.com"

        />

        <CardPequeno
        imagem="https://cdn-icons.flaticon.com/png/512/5576/premium/5576908.png?token=exp=1650673921~hmac=68245b25dd9d60324ccf700d40d7fe83"
          Endereço="Rua Narnia,22"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/2907/2907439.png " 
          nome="Bartender" 
          descricao="Elaboração de drinks e atendimento ao publico" 
        />
        
        <CardGrande 
          imagem="https://cdn-icons.flaticon.com/png/512/3211/premium/3211633.png?token=exp=1650667520~hmac=1ab0a82b011c2f998ce67166daf4daeb" 
          nome="Lear Corporation" 
          descricao="Operador de produção." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
