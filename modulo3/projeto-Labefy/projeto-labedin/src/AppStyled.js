import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";
import Kombi from './Imagens/Kombi.webp'


export const Background = styled.div `
    background-image: url(${Kombi});
    height:700px;
    background-repeat: no-repeat;
`
export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 700px;
    gap: 20px;
    
`
export const Title = styled.h1`
    color:white;
    font-size: 10em;
    text-shadow: 10px 10px  #935220;

`

export const Paragrafo = styled.p `
    color: white;
    text-shadow: 2px 2px  #935220;
    
    font-size: 1em;
`

export const Button = styled.button`
    display: inline-block;
    background-color: black ;
    color: white;
    text-decoration: none;
    padding: 10px 30px;
    border: 3px solid #3c67e3;
    border-radius:10px;

    &:hover{
        animation: pulsate 1s ease-in-out;
    }
    
    @keyframes pulsate  {
        0% {
            box-shadow: 
            0 0 30px #5ddcff;
           
        }
    }

`
