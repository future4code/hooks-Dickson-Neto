import styled from "styled-components";


//==========Container Trips========
export const ContainerListTrip = styled.div`
    width: auto;
    height: 100vh;
    max-height: auto;
    background-color:#ffac33;
`

//=======Container Trips Div 1 ======
export const DivTrips = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
//=========Trip Paragrafo=======
export const TextTrip = styled.p`
    text-align: center;
    font-family: 'Fjalla One', sans-serif;
    font-size: 2.5em;
    color: #1e8d99;
    margin: 30px 20px;
    letter-spacing: 10px;
`


export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const BotaoHome= styled.button `
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
   
    &:hover{
        background:linear-gradient(to bottom, #4cffb6 5%, #4c94ff 100%);
        background-color: #4cffb6;
        border: 1px solid #7f6d52;
        color: azure;
    }

    &:active{
        position:relative;
	    top:1px;
    }
`