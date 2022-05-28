import styled from "styled-components";


export const Container = styled.div `
    background-color:black;
    height: 100%;
    color: white;
`
export const Card = styled.div `
    display: inline-block;
    padding: 30px;
    border: 2px solid #3c67e3;
    margin: 10px;
`
export const CardPlaylist = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: 'Norican', cursive;
    font-size: 2em;
`

export const Imagem = styled.img `
 width: 7em;
 height: 7em;
`

export const PlayH1 = styled.h1 `
   font-size: 4em;
  display: flex;
  justify-content: center;
    padding: 5px;
    text-shadow: 3px 3px  #3c67e3 ;

`

export const InputsPlay = styled.div `
    display: flex;
    flex-direction: row;
    padding: 1em;
   gap: 5px;


`
export const PlayInput = styled.input`
    width: 20%;
    padding: 3px;
    border: none;
    border-radius: 10px 10px 10px;
    background-color: bisque;
    outline: none;
    background-color: black;
    color: white;
    border-bottom: 2px solid white;
`

export const Button = styled.button`
    display: inline-block;
    background-color: black ;
    color: white;
    text-decoration: none;
    padding: 5px 30px;
    border: 3px solid #3c67e3;
    border-radius:10px;
    outline: none;
    cursor: pointer;

    &:hover{
        animation: pulsate 1s ease-in-out;
    }
    
    @keyframes pulsate  {
        0% {
            box-shadow: 
            0 0 30px #FC03A6;
           
        }
    }
`

export const Button1 = styled.button`
    text-decoration: none;
    padding: 5px 30px;
    border: 3px solid #3c67e3;
    border-radius:10px;
    outline: none;
    background-color: black;
    color: white;
    bottom: 0;
    left: 60%;
    height: 40px;
    position: relative;
    align-items: center;
    width: 10%;
    cursor: pointer;
  
`