import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Etapa4';
import React from 'react';


class Formulario extends React.Component {
  state = {
    etapa  : 1,
    proximaPagina : ""
    
  }
 

  renderizaPaginaAtual = () => {
    switch(this.state.etapa){
      case 1 :
        return <Etapa1/> 
      case 2 :
        return <Etapa2/>
      case 3 :
        return <Etapa3/>
      case 4 :
        return <Etapa4/>
    }
  }

  mudarPaginaAtual = () =>{
    this.setState({etapa : this.state.etapa +1})
    
    }

  
  
  render(){
       
    return (
      <div className="App">
        <div>
          {this.renderizaPaginaAtual()}
        <br/>
        <button onClick={this.mudarPaginaAtual}>Proxima Etapa</button>
        </div>
  
      </div>
    );

  }

}
export default Formulario;
