import React from "react";
import axios from "axios";
import { URL_BASE ,headers } from "../services/links";
import styled from './styledGetMatches'
import { RootContainer, SideContainer ,  DivHeader , ThirdContainer,Imagens, ImgPerfil,PerfilP } from "./styledGetMatches";
import Beijo from '../../imagens/beijo.png'
import DeleteMatches from "../DeleteMatches/DeleteMatches";
import GlobalStyle from '../../GlobalStyle'


export default class GetMatches extends React.Component {

  state = {
    matches : []
  }

  componentDidMount(){
    this.getMatches()
  }

  componentDidUpdate(){
    this.getMatches()
  }
 
  getMatches = () =>{
    axios.get(`${URL_BASE}/matches`).then((res)=>this.setState({matches : res.data.matches}))
    .catch((err)=>console.log(err.response))
  }

  render (){
 
    const mapMatches = this.state.matches.map((item)=>{
      return <ThirdContainer>
        <ImgPerfil src={item.photo} alt={item.photo_alt}/>
        
        <PerfilP>
            {item.name}-{item.age}
        </PerfilP>
  
      
      </ThirdContainer>
    })
    
    return(
    <RootContainer>

        <GlobalStyle/>

          <SideContainer>
            <DivHeader>
              <DeleteMatches/>
            <Imagens
              src={Beijo}
              onClick={this.props. goToDoMatch}
            />
            </DivHeader>
          {mapMatches}
        </SideContainer>
    </RootContainer>
    )
  }
}