import React from 'react';

import styled from 'styled-components';

export const BigCard =styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px 10px 10px 10px;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
` 
export const BigCard1 = styled.img`
    width: 100px;
` 

function CardGrande(props) {
    return (
        <BigCard >
            <BigCard1 src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigCard>
    )
}

export default CardGrande;