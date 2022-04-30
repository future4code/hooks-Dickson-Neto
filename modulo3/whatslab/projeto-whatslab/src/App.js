import React from "react";
import styled from "styled-components";
import { GlobalStyle , TelaPrincipal , TelaConversa , TextoLi , BarraUsuario , BarraMensagem , Button ,DivInput, } from "./globalStyle";




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
        <div>
          <TextoLi>
          <strong>{conversa.nomeDoUsuario}</strong> {conversa.conteudoMensagem}
          </TextoLi>
        </div>
        
        )
      })
    return(
    <TelaPrincipal> 
      <TelaConversa>
        {conversaWhats}
        </TelaConversa>
      <DivInput>

        <BarraUsuario
          value ={this.state.inputUsuario} onChange={this.onChangeUsuario} placeholder={"Usuario"}
          />
        <BarraMensagem
          value= {this.state.inputMensagem}    onChange={this.onChangeMensagem}   placeholder={'mensagem'}
          />
        <Button onClick={this.adicionandoMensagem}>
          Enviar
        </Button>
           
         </DivInput>

    </TelaPrincipal>
     
    )
  }
}
export default App;
