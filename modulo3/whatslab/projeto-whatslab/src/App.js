import React from "react";
import styled from "styled-components";
import { GlobalStyle ,Button, TelaPrincipal ,TextoLi , SeiLa , BarraUsuario,BarraMensagem, DivInput, Conversa,BalaoUsuario,BalaoMensagem,CardBalao} from "./globalStyle";
import EstilizarBalao from "./Estilizar.js/Balao";



export class App extends React.Component{

  state={
    Conversa : [
      {
        usuario0 : "",
        mensagem0 : "",
   

      }
    ]
  }
  inputUsuario = ""
  inputMensagem = ""

    adicionandoMensagem = ()=>{
      const mandandoMensagem = {
        nomeDoUsuario : this.state.inputUsuario,
        conteudoMensagem : this.state.inputMensagem
      };
      const novaMensagem = [...this.state.Conversa , mandandoMensagem]
      this.setState({ Conversa : novaMensagem})
    }
  
    onChangeUsuario = (event) =>{
      this.setState({inputUsuario : event.target.value});
    }
    onChangeMensagem = (event) =>{
      this.setState({inputMensagem : event.target.value});
    }
  render(){
      const conversaWhats = this.state.Conversa.map((conversa) =>{
        return(
        <CardBalao>
            <TextoLi>
             <strong>{conversa.nomeDoUsuario}</strong>  
            {conversa.conteudoMensagem}
            </TextoLi>   
        </CardBalao>
        
        )
      })

      

      
    return(
    
    <TelaPrincipal> 
        <DivInput>
            <SeiLa>
              <BarraUsuario
                value ={this.state.inputUsuario} onChange={this.onChangeUsuario} placeholder={"Usuario"}
                />
              <BarraMensagem
                value= {this.state.inputMensagem}    onChange={this.onChangeMensagem}   placeholder={'Mensagem'}
                />
              <Button onClick={this.adicionandoMensagem}>
                Enviar
              </Button>

            </SeiLa>
              
           <Conversa>
              {conversaWhats}
             </Conversa>
        </DivInput>

    </TelaPrincipal>
          
   
     
    )
  }
}
export default App;
