import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    Post : [
      { 
       nomeUsuario :"paulinha" ,
       fotoUsuario :"bla",
       fotoPost :"bla"
       },
       {
          nomeUsuario :"Dickson" ,
          fotoUsuario :"bla",
          fotoPost :"bla"
       },
  
       {
         
         nomeUsuario :"Vivian",
         fotoUsuario :"bla",
         fotoPost :"bla",
       },

     
    ],
    inputUsuario :"",
    inputFoto:"",
    inputPost:"",

  };
  adicionarNovoPost = () => {
    const adicionandoPost = {
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario : this.state.inputFoto,
      fotoPost : this.state.inputPost,
    };
    const NovoPost = [...this.state.Post , adicionandoPost ]
    this.setState({Post : NovoPost})
   
  };

  
  onChangeInputUsuario = (event)=>{
    this.setState({inputUsuario : event.target.value});
  }
  onChangeInputFoto = (event)=>{
    this.setState({inputFoto : event.target.value});
  }
  onChangeInputPost = (event)=>{
    this.setState({inputPost : event.target.value});
  }
  render() {
    const novoPost = this.state.Post.map((card )=>{
      return(
        <p>
          {card.nomeUsuario} - {card.fotoUsuario} - {card.fotoPost}
        </p>
      )
    })

    return (
      <MainContainer>
        <div>
          <input
          value = {this.state.inputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"Nome"}
          />
          <br/>
           <input
          value = {this.state.inputFoto}
          onChange={this.onChangeInputFoto}
          placeholder={"Foto"}
          />
          <br/>
           <input
          value = {this.state.inputPost}
          onChange={this.onChangeInputPost}
          placeholder={"Post"}
          />
          <br/>
          <button onClick={this.adicionarNovoPost}>Adicionar</button>
        </div>
        <div>
          {novoPost}
        </div>

      </MainContainer>
  
      
    );
  }
}

export default App;
