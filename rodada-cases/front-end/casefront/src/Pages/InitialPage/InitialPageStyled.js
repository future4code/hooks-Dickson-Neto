import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;

    height: auto;
   

background-color: #E5E5E5  ;
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: blue;

h2{
    width: 700px;
    height: 70px;
font-family: 'Roboto';
font-weight: 400;
font-size: 40px;
line-height: 50px;

text-align: center;
letter-spacing: -0.005em;

color: #FFFFFF;
}

p{
width: 79px;
height: 20px;
font-family: 'Roboto';
font-weight: 600;
font-size: 1em;
line-height: 25px;
}
`

export const GridCards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25vw);
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 50px;
    margin-left: 100px;
`

export const ImgCard = styled.img`
width: 176px;
height: 264px;
`

export const ContainerButton = styled.div`
width: 700px;
height: 50px;
`

export const Buttons = styled.button`
 
    padding: 5px;
    margin:3px;
     border-radius: 5px;
     border-style: black;
    &:focus{
        background-color: #D18000;
        margin: none;
        border-radius: 5px;
        border-style: none;
    }   
`

export const CardFilmes = styled.div`
word-break: break-all;
width: 55%;
p{
    font-size: 0.8em;
    font-family: 'Baloo 2', cursive;
}
`


export const PageChange = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
`

