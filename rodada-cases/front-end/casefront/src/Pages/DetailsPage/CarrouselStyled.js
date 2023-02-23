import styled from "styled-components";


export const Container = styled.div`
  max-width: 100vh ;
  margin-top: 12vw;
 
   
    h4{
    margin-left: 30px;
    color: black;
    font-family: 'Baloo 2', cursive;
    font-size:  1.5em;
    }
`

export const ContainerRecom = styled.div`
   
    h4{
     margin-left: 30px;
    color: black;
    font-family: 'Baloo 2', cursive;
    font-size:  1.5em;
    }
`
export const Carrousel = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-left: 30px;
    width: 95vw;
    height: 17em;
`
export const CarrouselItem = styled.div`
    background-color: #FFFFFF;
    margin: 2px;
    padding: 20px;
    border-radius: 16px;
`
export const CarrouselImage = styled.img`
   width: 100px;
height: 100x;
border-radius: 4px;
flex: none;
order: 0;
flex-grow: 0;
`
export const CarrouselInfo = styled.div`
height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const CarrouselName = styled.span`
  font-size: 0.7rem;
   font-weight: bold;
   /* margin: 4px; */
`
export const CarrouselDepartament = styled.span`
  margin-top: 20%;
  height: 100px;
  font-size: 0.8em;
  align-items: center;
`
