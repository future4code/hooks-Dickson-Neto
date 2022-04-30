import React from "react";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    

`

export const TelaPrincipal = styled.div`
    width:100% ;
    height: 100vh;
    background-color: black;
`

export const TelaConversa = styled.div`
    
    background-color: black;
    color: white;
    
`


export const TextoLi = styled.li`
    list-style: none;
   
`

export const DivInput = styled.div`
   
`

export const BarraUsuario = styled.input `
 

 
`

export const BarraMensagem = styled.input `
 
`

export const Button = styled.button`
 
 `

 export default GlobalStyle