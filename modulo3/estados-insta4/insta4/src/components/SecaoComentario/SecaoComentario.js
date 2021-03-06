import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px; 
`

export class SecaoComentario extends Component {
	state = {
		valorComentario :'',
		valorFinal : "",
		
		
	}

	onChangeComentario=(event) =>{
		this.setState({valorComentario: event.target.value})
		this.setState({valorFinal : this.state.valorComentario })
		console.log(this.state.valorFinal)
		
	}
	
	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.valorComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
