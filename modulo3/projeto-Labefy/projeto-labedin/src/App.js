import React from "react"
import styled from "styled-components"
import Playlists from "./Components/Playlists/Playlists"
import GlobalStyle from "./GlobalStyle"
import AppStyled from './AppStyled'
import {Background , Container , Title , Paragrafo, Button} from './AppStyled'





class Labefy extends React.Component{
  state = {
    changePage : "labefy"
  }

  changeTela = ()=>{
    switch ( this.state.changePage){
      case "labefy" :
      return <div>
       <GlobalStyle/>
      <Background>
      <Container >

      <Title>Labefy</Title>
      <Paragrafo>Sua biblioteca de vinil</Paragrafo>
      <Button onClick={this.mudarParaPlaylist}>Acessar</Button>
       

      </Container>
      </Background>
      </div>

      case "playlist" : 
      return <Playlists mudarParaLabefy = {this.mudarParaLabefy}/>

      case 'playlist' : 
      return
    }
  }
  mudarParaPlaylist= () =>{
    this.setState({changePage : "playlist"})
  }

  mudarParaLabefy = ()=>{
    this.setState({changePage : "labefy"})
  }

  render (){
  
    return(
      <div>
          {this.changeTela()}
      </div>
    )
  }
}

export default Labefy