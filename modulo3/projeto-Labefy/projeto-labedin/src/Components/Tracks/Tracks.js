import React from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import GlobalStyle from "../../GlobalStyle";
import { Container,TrackH1 , CardMusicas , DivCard ,DivInpt , Input , Button } from "./TrackStyled";


const headers = {
  headers : {
    Authorization : "dickson-freitas-hooks"
  }
}

const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

class Tracks extends React.Component{
    state = {
        tracksName : "",
        tracksArtist : "",
        tracksUrl : "",
        tracks : []

    }

    getTracksPlay = (playlistId) =>{
        axios.get (`${urlPlaylist}/${playlistId}/tracks`,headers ).then((res)=>{
          this.setState({tracks : res.data.result.tracks})
          
        })
        .catch((err)=>{
          alert("Algo deu errado")
        })
      }

    addTrackPlaylist =(playlistId)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        const body = {
            name:this.state.tracksName,
            artist : this.state.tracksArtist,
            url : this.state.tracksUrl

        }
        axios.post(url,body, headers).then((res)=>{
            alert(` ${this.state.tracksName} adicionada com sucesso` ) 
            this.getTracksPlay(this.props.id)
            
            this.setState({tracksName : "" , tracksArtist: "" ,  tracksUrl : ""})
        })
        .catch((err)=>{
            alert("Algo deu errado tente novamente")
            console.log(err)
        })
    }

    deleteTracksFromPlaylist = (playlistId , trackId )=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}` 
        axios.delete(url,headers).then((res)=>{
            alert("Musica deletada com sucesso")
            this.getTracksPlay(this.props.id)
        })
        .catch((err)=>{
            alert("Tente Novamente")
        })
    }

    tracksNameInput = (event) =>{
        this.setState({tracksName : event.target.value})
    }
    tracksArtistInput = (event) =>{
        this.setState({tracksArtist : event.target.value})
    }
    tracksUrlInput = (event) =>{
        this.setState({tracksUrl : event.target.value})
    }
    componentDidMount = ()=>{
        this.getTracksPlay(this.props.id)
    }
  
    render(){
        const mapearMusicas = this.state.tracks.map((musicas)=>{
            return <CardMusicas key={musicas.id}>
            <ReactPlayer 
           
            url={musicas.url}
            />
            <DivCard>{musicas.name} - {musicas.artist} 
            
            </DivCard>
            <Button onClick={()=>this.deleteTracksFromPlaylist(this.props.id , musicas.id)}>Deletar</Button>

            </CardMusicas>
          })

        return(
         <Container>
            <GlobalStyle/>
            <div>

            <TrackH1>Musicas</TrackH1>
                 < DivInpt> 
                    <Input 
                    value={this.state.tracksName}
                    onChange={this.tracksNameInput}
                    placeholder="Nome da Musica"/>
                    <Input 
                    value={this.state.tracksArtist}
                    onChange={this.tracksArtistInput}
                    placeholder="Artista"/>
                    <Input
                    value={this.state.tracksUrl}
                    onChange={this.tracksUrlInput}
                    placeholder="Url"/>
                    <Button onClick={()=>this.addTrackPlaylist(this.props.id)}>
                        Adicionar
                    </Button>
                </ DivInpt>

            </div>
                {mapearMusicas}
         </Container>
        )
    }
}

export default Tracks