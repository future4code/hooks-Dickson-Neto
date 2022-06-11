import styled from "styled-components";


export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: 	#FF00FF;
`
export const ContainerDiv = styled.div`
    
    display: flex;
    flex-direction:column;
  align-items: center;
    width: 60vw;
    height: 100vh;
    padding: 20px;
    font-family: 'Petit Formal Script', cursive;

`

export const CardPerfil = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
  
     padding: 15px;
     border: 3px solid #ADD8E6  ;
      
`

export const DivButton = styled.div`
   width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 29px;
   

`
export const PerfilH5 = styled.h5`
    font-size: 20px;
    padding: 3vw;
    color: black;
    text-align: center;
    font-family: 'Kanit', sans-serif;
    font-weight: 200;
`


export const PerfilP = styled.p`
    font-size: 1em;
    color: black;
    text-align: center;
    font-family: 'Kanit', sans-serif;
    font-weight: italic  ;
`

export const ImgPerfil = styled.img `
    max-width: 100%;
    height: 300px;
    width: 300px;
    padding: 10px;
    display: inline-block;
`


export const ImagensLike = styled.img `
    width: 3em;
    height: 3em;
    border: 1px solid #ADD8E6;
 
    padding: 10px;
    
    &:hover{
        width: 4em;
        height: 4em;
        cursor: pointer;
        background-color: #00FF7F;
        border-radius:50%;
        
       
}
`

export const ImagensDislike = styled.img `
   width: 3em;
    height: 3em;
    border: 1px solid #ADD8E6;
    
    padding: 1px;
    &:hover{
        width: 4em;
        height: 4em;
        border-radius:50%; 
        cursor: pointer;
        background-color:  #FF0000;
       
       
}
`







