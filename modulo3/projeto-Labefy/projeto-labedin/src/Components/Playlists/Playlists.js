import React from "react";
import axios from "axios";
import Tracks from "../Tracks/Tracks";
import { Container ,Card ,  CardPlaylist, PlayH1 , InputsPlay,PlayInput , Imagem, Button, Button1 } from './PlayStyled'
import GlobalStyle from "../../GlobalStyle";
import Vinil from '../../Imagens/vinil.png'





const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const urlDelete = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistIds"
const headers = {
  headers : {
    Authorization : "dickson-freitas-hooks"
  }
}
class Playlists extends React.Component {
    state ={
        playlistName : [],
        tracks : [],
        inputCreatPlaylist : "",
        idAtual : "",
        mudarPagina : "playlist"
      }
      changeTela = (id) =>{
        switch ( this.state.mudarPagina){
          case "playlist" :
          return   <Container>
            <GlobalStyle/>
           
            <PlayH1>Playlists</PlayH1>
          
               <InputsPlay>
               

                <PlayInput 
                  value={this.state.inputCreatPlaylist}
                  onChange={this.creatPlaylistInput}
                  placeholder="Criar Playlist"
                />
              <Button onClick={this.creatPlaylist}>
                Criar
              </Button>
              <Button1 onClick={this.props.mudarParaLabefy}>Home</Button1>
              </InputsPlay>
               
             
           
              
          
          {this.state.playlistName.map((playlist)=>{
        return <Card key={playlist.id}>
          <CardPlaylist>
              {playlist.name}
              <Imagem src={Vinil}/>

            <Button onClick={()=>this.deletePlaylist(playlist.id)}>Deletar</Button>

            <Button onClick={()=>this.verMusicas(playlist.id)}> Ver musicas</Button>
          </CardPlaylist>
         
          </Card>
          
    })}
         
            </Container>
           case "tracks" :
             return <Tracks id={this.state.idAtual}/>
           default : 
           return <p>Pagina não encontrada</p>
        }
      }

      creatPlaylist = ()=>{
        const body = {
          name : this.state.inputCreatPlaylist
        }
        axios.post(urlPlaylist, body , headers).then((res)=>{
          alert(` A Playlist ${this.state.inputCreatPlaylist} foi criada com sucesso`)
          this.setState({playlistName : ''})
        })
        .catch((err)=>{
          alert("Playlist nao foi criada, tente novamente")
          this.setState({inputCreatPlaylist : ""})
        })
    
      }
   
      deletePlaylist =(playlistId)=>{
        axios.delete (`${urlPlaylist}/${playlistId}` , headers).then((res)=>{
            
            alert(`Playlist deletada com Sucesso`)
            this.getAllPlaylist()
        })
        .catch((err)=>{
            alert("Algo deu errado,tente novamente")
        })
      }
      getAllPlaylist = () =>{
        axios.get(urlPlaylist,headers)
        .then((res)=>{
         
          this.setState({playlistName : res.data.result.list})
         
         
        })
        .catch((err)=>{
          alert("Algo deu errado, tente novamente")

          
        })
      }
      
      creatPlaylistInput = (event)=>{
        this.setState({inputCreatPlaylist : event.target.value})
      }

      verMusicas = (id) =>{
        this.setState({idAtual : id , mudarPagina : "tracks"})
      }
    componentDidMount(){
      this.getAllPlaylist()
      
    }

    componentDidUpdate(){
      this.getAllPlaylist()
    }
    
  
    render(){

     

       
        
        return(
        <div>
        
      {this.changeTela(this.state.idAtual)}
      
        </div>
        )
    }
}

export default Playlists