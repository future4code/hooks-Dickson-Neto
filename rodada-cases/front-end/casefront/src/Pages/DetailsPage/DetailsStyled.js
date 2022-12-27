import styled from "styled-components"

export const ContainerPrincipal = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 40%);
    height: auto;


`

export const Grid1 = styled.div`
display: grid;
grid-template-columns: 40% 50%;
position: absolute;
width: 100vw;
height: 400px;
background: #2D0C5E;



`
export const PostFilme = styled.img`
position: relative;
 width: 350px;
height: auto;
left: 100px;
top: 30px;
border-radius: 8px;
`
export const SinopseDiv = styled.div`
display: flex;
flex-direction: column;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;

line-height: 38px;

 h1{
    color: white;
    margin-top: 30px;
    font-size: 2em;
    font-family: 'Zilla Slab', serif;
 }
 h3{
    color: white;
    font-family: 'Baloo 2', cursive;

}
 p{
     color: white;
     font-size: 1em;
     font-family: 'Baloo 2', cursive;

 }
`
export const Elipse1 = styled.div`
position: absolute;
width: 40px;
height: 40px;
left: 540px;
top: 80px;
`

export const Elipse2 = styled.div`
width: 40px;
height: 40px;
left: 529.42px;
top: 80px;

background: rgba(255, 255, 255, 0.1);
border-radius: 100px;
transform: rotate(-91.35deg);

`

export const Information = styled.div`
display: flex;
align-items: center;
justify-content: center;
letter-spacing: -0.005em;
transform: rotate(91.35deg);
color: black;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 0.9em;
line-height: 18px;
color: white;
margin-left: 10px;
}
`

export const Grid3 = styled.div`
margin-top: 30vw;
width: 100vw;
height: 600px;

`


export const Trailer = styled.div`
 display: grid;
 grid-template-rows : 2 2fr;
  width: 100vw;
 height: 100vh;
`

export const Trailer2 = styled.div`
padding: 60px;
margin-bottom: 20px;
h4{
    color: black;
    font-family: 'Baloo 2', cursive;
    font-size:  1.5em;
}
`
//COMPONENTS

export const CategoryPri = styled.div`
display: flex;
flex-direction: row;
p{
    border-bottom: 1px solid black;
    letter-spacing: 0.08px;
    margin-left: 6px;
    font-size: 0.8em;
}


`
