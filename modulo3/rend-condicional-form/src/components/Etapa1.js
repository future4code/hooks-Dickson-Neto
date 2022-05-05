import React from "react";


class Etapa1 extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <h1>Etapa1 - Dados Gerais</h1>
                    <main>
                        <div>
                            <p>1. Qual o seu nome?</p>
                            <input></input>
                        </div>
                        <div>
                            <p>2. Qual a sua idade?</p>
                            <input></input>
                        </div>
                        <div>
                            <p>3. Qual o seu email?</p>
                            <input></input>
                        </div>
                        <div>
                            <p>4. Qual a sua escolaridade?</p>
                             <select name="select">
                                <option value="valor1">Ensino Mediio Incompleto</option>
                                <option value="valor2" selected>Ensino Medio Completo</option>
                                <option value="valor3">Ensino Superior Incompleto</option>
                                <option value="valor4">Ensino Superior Completo</option>
                             </select>
                        </div>
                       

                    </main>
                </div>
            </div>
        )
    }
}

export default Etapa1