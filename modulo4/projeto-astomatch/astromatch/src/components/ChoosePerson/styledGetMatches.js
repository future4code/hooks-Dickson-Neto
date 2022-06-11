import styled from "styled-components";


export const RootContainer = styled.div `
    width: 100vw;
    height:  100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: 	#FF00FF;
`
export const SideContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: auto;
    margin-top: 20px;
    border: 3px solid #ADD8E6 
    
`
export const DivHeader = styled.div `
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ThirdContainer = styled.div `
   display: flex;
   flex-direction: column;
    margin: 10px ;
    align-items: center;
    border: 3px solid #ADD8E6; 
    padding: 10px;
    width:90%;
    
   
   
`
export const Imagens = styled.img `
    width: 4em;
    height: 4em;
`

export const ImgPerfil = styled.img`
    width: 4em;
    height: 4em;
    border-radius:50%;
    
`

export const PerfilP = styled.p`
    font-size: 17px;
    color: black;
    text-align: center;
    font-family: 'Kanit', sans-serif;
    font-weight: italic  ;
`