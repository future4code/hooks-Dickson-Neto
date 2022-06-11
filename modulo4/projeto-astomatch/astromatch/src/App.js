import React from "react";
import axios from "axios";
import GetMatches from "./components/ChoosePerson/GetMatches";
import GetProfile from "./components/GetProfile/GetProfile";




export default class App extends React.Component {

    state = {
      chooseScreen : "match",
      saveId : ""
    }

    goToDoList = (id) =>{
      this.setState({chooseScreen : "listMatch" , saveId : id })
    }
    goToDoMatch = () =>{
      this.setState({chooseScreen : "match"})
    }
    selectPage = () =>{
      switch(this.state.chooseScreen){
        case "match" : 
        return <GetProfile goToDoList={this.goToDoList}/>
        case "listMatch" : 
        return <GetMatches goToDoMatch={this.goToDoMatch} saveId={this.state.saveId}/>
        default : 
        return <GetProfile/>
      }
    }
  render (){
    return(
      <div>
       
       {this.selectPage()} 
    
        
      </div>
    )
  }
}