import styled from "styled-components";

export const ContainerApplication = styled.div`
   display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const NameForm = styled.div`
    display: flex;
    padding: 10px;
`
export const ImgForms = styled.img`
    width: 50vw;
    height: 50vh;
    
`

export const BotaoForms = styled.button`
    width: 10em;
    padding: 6px;
    text-align: center;
    font-size: 0.8em;
    font-family: 'Fjalla One', sans-serif;
    color:#565656;
    background-color: #6fa9ff;
    text-decoration: none;
    border-style: none;
    border: 1px solid grey;
    border-radius: 10px;

    &:active{
        position:relative;
	    top:1px;
        
    }
`

export const PNAME = styled.p`
     text-align: center;
    font-family: 'Fjalla One', sans-serif;
    font-size: 1.3em;
    color: #1e8d99;
    margin-right:10px;
`

export const Select = styled.select`
    margin-bottom: 10px;
    padding: 2px;
    width: 70%;
    background-color: #e5e5e5;
`