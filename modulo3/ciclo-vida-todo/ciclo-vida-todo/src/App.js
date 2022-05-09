import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
  list-style: none;
`

const Tarefa = styled.li`
  display: flex;
  text-align: left;
  text-decoration: ${({completa}) => (completa ?  'line-through' :'none' )};
`
const ContainerPrincipal = styled.div `
 border: 1px solid black;
 
`
const InputsContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
  
  
`




class App extends React.Component {
    state = {
      tarefas: [
        {
        id: Date.now(),
        texto: "Comprar Pão",
        completa: true
        },
      ],
      inputValue: '',
      filtro: '',
     
    }

  componentDidUpdate() {

  };

  componentDidMount() {
   
  };

  enviarDidMount(){
    localStorage.setItem('tarefas' , JSON.stringify(this.state.tarefas))
  }
  onChangeInput = (event) => {
  
    this.setState({inputValue : event.target.value})
    console.log(this.state.inputValue )
    
  
  }

 
  
  criaTarefa = () => {
    const novaTarefa = {
      id : Date.now(),
      texto : this.state.inputValue,
      completa : false,
    }
     const copiarTarefas = [...this.state.tarefas]
     copiarTarefas.push(novaTarefa)
     this.setState({tarefas : copiarTarefas})
     this.setState({inputValue : ""}) 
   
  }

  
  selectTarefa = (id) => {
    const novasTarefas = this.state.tarefas.map((tarefas)=>{
      if(id === tarefas.id){
        const copiarTarefas = {
          ...tarefas , 
          completa : !tarefas.completa
        }
        return copiarTarefas
      }else{
        return tarefas
      }
      })
      
      this.setState({tarefas : novasTarefas})
    }
    
    apagarTarefa = (id) =>{
      const novaListaDeTarefas = this.state.tarefas.filter((tarefas) => {
        return id !== tarefas.id
      })

      this.setState({tarefas : novaListaDeTarefas})
    }
    
    onChangeFilter = (event) => {
    this.setState({filtro : event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
      
    })

    return (
      <ContainerPrincipal className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
       
          <label></label>
          <div>

          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
            
          </select>
          </div>
        
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
             
              <Tarefa
              completa={tarefa.completa}
              >
              {tarefa.texto}

             
              <button onClick={()=>this.apagarTarefa(tarefa.id)}> Apagar </button>
              <button onClick={() => this.selectTarefa(tarefa.id)}>Completa</button>
              </Tarefa>
            )
          })}
        </TarefaList>
         
      </ContainerPrincipal>
    )
  }
}

export default App
