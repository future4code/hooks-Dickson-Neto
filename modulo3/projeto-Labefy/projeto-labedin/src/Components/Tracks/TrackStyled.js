import styled from "styled-components";


export const Container = styled.div`
    background-color:black;
    height: 100vh;
    color: white;
`

export const TrackH1 = styled.h1`
       font-size: 4em;
  display: flex;
  justify-content: center;
    padding: 5px;
    text-shadow: 3px 3px  #3c67e3 ;
`

export const DivInpt = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
`
export const CardMusicas = styled.div`
    border: 1px solid #3c67e3;
    display: inline-block;
    margin-top: 1em;
    margin-left: 50vh;
    
`

export const Input = styled.input`
    font-size:1em;
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
export const DivCard = styled.div`
    font-size: 1.5em;
`

export const Button = styled.div`
    display: inline-block;
    background-color: black ;
    color: white;
    text-decoration: none;
    padding: 5px 5px;
    border: 3px solid #3c67e3;
    border-radius:10px;
    outline: none;
    margin-top: 1em ;
    cursor: pointer;
`