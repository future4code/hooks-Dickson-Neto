import styled from "styled-components"

//=========Div Principal==================
export const ContainerHome = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    width: 100vw;
    height: 100vh;
`
export const TextH1 = styled.h1`
    text-align: center;
  font-family: 'Staatliches', cursive;
  font-size: 6em;
  letter-spacing: 1em;
  color: #1e8d99;
`
export const TextP = styled.p`
    text-align: center;
    font-family: 'Fjalla One', sans-serif;
    font-size: 1.3em;
    color: #1e8d99;
`

export const PlanetImg = styled.img`
    height: 100vh;
    width: 50vw;
  
    
`
export const ContainerOne = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: azure;
    width: 100%;
    height: 100%;
    max-width: 80%;
    background-color:#ffac33;
`

//===========DIV FORMULARIO ========


export const Div = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ff9800;
    height: 100vh;
    width: 100vw;
    max-width: 20%;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
   
`
//==========BOTÕES=============
export const Botoes = styled.button`
    box-shadow: 0px 0px 0px 0px #efdcfb;
    text-align: center;
    font-family: 'Fjalla One', sans-serif;
    font-size: 1.3em;
	border-radius:11px;
	border:2px solid #4cffb6;
	display:inline-block;
	cursor:pointer;
	color:#565656;
    background-color:#ffb64c;
	font-size:15px;
	padding:9px 76px;
    margin-bottom: 50px;
	text-decoration:none;
	text-shadow:0px 1px 0px #9752cc; 

    &:hover{
    background:linear-gradient(to bottom, #ffb64c 5%, #ffdaa5 100%);
    background-color: #4cffb6;
    border: 1px solid #7f6d52;
    }

    &:active{
        position:relative;
	    top:1px;
    }
	
`
export const BotaoForms = styled.button `
    width: 10em;
    padding: 6px;
    text-align: center;
    font-family: 'Fjalla One', sans-serif;
    color:#565656;
    background-color:#ffb64c;
    text-decoration: none;
    border-radius:11px;
   
    &:hover{
        background:linear-gradient(to bottom, #ffb64c 5%, #ffdaa5 100%);
        background-color: #4cffb6;
        border: 1px solid #7f6d52;
    }

    &:active{
        position:relative;
	    top:1px;
    }
`
//========INPUTS=========
export const Inputs = styled.input `
    width:20em;
    padding: 7px;
    margin: 10px;
    background-color: #e5e5e5;
    border-radius:4px;  
`
