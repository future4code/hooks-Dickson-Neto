import React, {useState , useEffect} from 'react'
import axios from 'axios'



const Pokedex = () =>{
  const [pokeList , setPokeList] = useState()
  const [pokeName , setPokeName] = useState("")

  useEffect(()=> {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      // função que está setando no estado os 151 pokemons
      setPokeList(response.data.results)
    })
    .catch(err => {
      console.log(err);
    });

  } , [])
  
  changePokeName = (event) => {
   setPokeName(event.target.value)
  };
   return(
    <div className="App">
    {/* evento onChange chama função toda vez que o usuário 
    escolhe um novo pokemon no dropdown */}
    <select onChange={changePokeName}>
      <option value={""}>Nenhum</option>
      {/* renderizando a lista de pokemons como opções do select */}
      {this.state.pokeList.map(pokemon => {
        return (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        );
      })}
    </select>
    {/* expressão booleana que renderiza o componente PokeCard,
    caso o valor de pokeName, no estado, seja true */}
    {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
  </div>
  )

}

export default Pokedex