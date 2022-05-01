import React from "react";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    

`
export const Button = styled.div `
    color: white;
    background-color: black;
    padding: 5px;
    margin: 2px;
    border: none;
    background-color: #627870;
`
export const TelaPrincipal = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: aliceblue;
   display: grid;
   grid-template-columns: repeat(3,500px);
   
   
`

export const Conversa = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 6%;

  
`
export const CardBalao = styled.div`
   background-color: azure;
   padding: 10px;
   margin-top: 0%;
   margin-bottom: 4px;
   border:none
`
export const TextoLi = styled.li`
   list-style: none;
  
`

export const DivInput = styled.div`
  grid-column-start: 2; 
  border: 1px solid black;
  background-image: url(https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80);
  
 
   `

export const BarraUsuario = styled.input `
   width: 3.5em;
   padding: 6px;
   margin-right:5px;
   border: none;
   background-color: #627870;
   
`

export const BarraMensagem = styled.input `
   width: 27em;
   margin-right:5px;
   border: none;
   background-color: #627870;
`

export const SeiLa = styled.button`
   display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0%;
    
   
 `

 export default GlobalStyle