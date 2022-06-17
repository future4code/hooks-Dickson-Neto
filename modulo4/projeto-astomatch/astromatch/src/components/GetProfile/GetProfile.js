import React from "react";
import axios from "axios";
import styledComponents from "styled-components";
import GlobalStyle from "../../GlobalStyle";
import { URL_BASE} from "../services/links";
import Coracao from '../../imagens/coracao.png'
import Cruz from '../../imagens/cruz.png'
import { ContainerCard, CardPerfil ,ContainerDiv, DivButton  ,ImagensLike, ImagensDislike, ImgPerfil, PerfilH5 , PerfilP } from "./StyleGetProfile.js";
import Header from "../Header/Header";


export default class GetProfile extends React.Component{
  state = {
    profile : []
  }

  componentDidMount(){
    this.choosePerson()
  }


  choosePerson = () =>{
    axios.get(`${URL_BASE}/person`)
    .then((res)=>this.setState({profile : res.data.profile}))
    .catch((err)=>console.log(err.response.data))
  }


  chooseLiked = (id) =>{
    const body = {
      id : this.state.profile.id,
      choice : "true"
    }
    axios.post(`${URL_BASE}/choose-person`, body).then((res)=>this.choosePerson(id)).catch((err)=> console.log(err.response))
  }

  chooseDislike = (id) =>{
    const body = {
      id : this.state.profile.id,
      choice : "false"
    }
    axios.post(`${URL_BASE}/choose-person`, body).then((res)=>this.choosePerson(id)).catch((err)=> console.log(err.response))
  }
  render(){
  

    return(
    
    <ContainerCard>
      <GlobalStyle/>
        <ContainerDiv>
        

        <Header goToDoList = {this.props.goToDoList}/>
          <CardPerfil>

            <ImgPerfil src={this.state.profile.photo} alt={this.state.profile.photo_alt}/>
            <br/>
              <PerfilH5>

               <strong>
                  {this.state.profile.name} - {this.state.profile.age}
                </strong>
              <br/>
              </PerfilH5>

            <PerfilP>
                {this.state.profile.bio}
            </PerfilP> 
            
            <br/>
              
              <DivButton>
                  <ImagensDislike
                    src={Cruz}
                    onClick={()=>this.chooseDislike(this.state.profile.id)}
                  />

                  <ImagensLike
                    src={Coracao}
                    onClick={()=>this.chooseLiked(this.state.profile.id)}
                  />
              </DivButton>

          </CardPerfil>
  
      </ContainerDiv>

    </ContainerCard>
    
    )
   } 
} 