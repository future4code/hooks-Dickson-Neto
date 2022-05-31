import React from "react";
import axios from "axios";


const urlLaben = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
    Authorization: 'dickson-freitas-hooks'
  }
};

class LabenUsers extends React.Component{
  state = {
    novosUsuarios :[],
    usuariosInputNome : "",
    usuariosInputEmail : "",
  }

 
  componentDidMount(){
    this.getAllUser()
  }
  getAllUser = () => {
    axios.get(urlLaben , headers)
    .then((res)=>{
      this.setState({novosUsuarios : res.data});
    })
    .catch((err)=>{
      console.log("Algo deu errado")
    })
  }
  creatUser =()=>{
    const body = {
      name : this.state.usuariosInputNome,
      email: this.state.usuariosInputEmail,
    }

    axios.post(urlLaben , body , headers)
    .then((res)=>{
      alert(`Usario ${this.state.usuariosInputNome} criado com sucesso`)
      this.setState({usuariosInputNome : ""})
      this.setState({usuariosInputEmail : ""})
      this.getAllUser()
    })
    .catch((err)=>{
      console.log("Nada foi criado")
      this.setState({usuariosInputNome : ""})
      this.setState({usuariosInputEmail : ""})
    })

  }

  deleteUser = (id)=>{
    axios.delete (`${urlLaben}/${id}` , headers ).then((res)=>{
      this.getAllUser()
      alert("Usuario Deletado")
    })
    .catch((err)=>{
      alert("Algo deu errado")
    })
    
  }
  onCreatUser = (event)=>{
    this.setState({usuariosInputNome : event.target.value})
  }
  onCreatUserEmail = (event)=>{
    this.setState({usuariosInputEmail : event.target.value})
  }

 
  render(){
    const mapeandoUser = this.state.novosUsuarios.map((users)=>{
      return(
        <div>
          <li key={users.id}>{users.name}</li>
          <button onClick={()=>this.deleteUser(users.id)}>X</button>
        </div>
      )
    })
    return(
      <div>
        <input onChange={this.onCreatUser} value={this.state.usuariosInputNome} placeholder="Nome"/>
        <input onChange={this.onCreatUserEmail} value={this.state.usuariosInputEmail}placeholder="Email"/>
        <button onClick={this.creatUser}>Enviar</button>
          {mapeandoUser}
      </div>
    )
  }
}

export default LabenUsers
