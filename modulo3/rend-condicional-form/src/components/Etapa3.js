import React from "react";

class Etapa3 extends React.Component{
    render(){
        return(
            <div>
                <h1>Etapa 3 - INFORMAÇÕES GERAIS DE Ensino</h1>  
                <main>
                    <div>
                        <p>5.Por que você não terminou um curso de graduação?</p>
                        <input></input>
                    </div>
                    <div>
                        <p>6. Você fez algum curso complementar?</p>
                        <select>
                            <option value="nenhum">Nenhum</option>
                            <option value="ingles">Curso de Inglês</option>
                            <option value="tecnico">Curso Técnico</option>
                        </select>
                    </div>

                </main>
            </div>
        )
    }
}

export default Etapa3