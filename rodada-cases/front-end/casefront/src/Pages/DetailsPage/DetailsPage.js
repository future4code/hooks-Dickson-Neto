import React, {useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid1, PostFilme,  SinopseDiv, ContainerPrincipal, Trailer, Trailer2, Grid3 ,CategoryPri} from "./DetailsStyled";
import YouTube from "react-youtube";
import { Carrousel, CarrouselDepartament, CarrouselImage, CarrouselInfo, CarrouselItem, CarrouselName, Container, ContainerRecom } from "./CarrouselStyled";
import useCustomCast from "../../hooks/useCast";
import useCustomDetails from "../../hooks/useDetailsFilmes";
import useCustomTrailer from "../../hooks/useTrailer";
import useCustomRecomendation from "../../hooks/useRecomendationFilms";



const DetailsPage = (props) =>{
    const params = useParams()
    const [cast] = useCustomCast(`movie/${params.id}/credits`)
    const [states] = useCustomDetails(`movie/${params.id}`)
    const {details , category} = states
    const [trailer] = useCustomTrailer(`movie/${params.id}/videos`)
    const [similarMovie] = useCustomRecomendation(`movie/${params.id}/similar`)
    const navigate = useNavigate()


console.log(details)
        const opts = {
            height: '400',
            width: '100%',
        }
        const watch = trailer && trailer.map((video) =>{
            return(
                <div>   
                    <YouTube  
                     videoId={video.key}
                     opts={opts}/>
                </div>
            )
        })
        //PORCENTAGEM DOS VOTOS.
        const data = details.vote_average *10
        const categoryFilms = category && category.map((item) =>{
            return (
                <p>
                    {item.name}
                </p>
                )
        })

        // CONVERÇÃO DO TEMPO DO FILME
        const converter = (minutos) => {
            const horas = Math.floor(minutos/ 60);          
            const min = minutos % 60;
            const textoHoras = (`00${horas}`).slice(-2);
            const textoMinutos = (`00${min}`).slice(-2);
            
            return `${textoHoras }h${textoMinutos}m`;
          };
          //CONVERSAO DA DATA PARA DD/MM/AA
          const formatData = ((data)=>{
            const dia  = data.split("-")[2];
            const mes  = data.split("-")[1];
            const ano  = data.split("-")[0];
        
             return (`${dia}- ${mes} - ${ano}`);
          // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
            })

            console.log(similarMovie)
        
    return(


        <ContainerPrincipal >
        <Grid1  >
            <div>
                <PostFilme src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`}/>
            </div>
            <SinopseDiv>
                              
        <div>
            <h1>{details.title}</h1>
           <p>
            </p>
            <CategoryPri>
            <p>Avaliaçao dos usuarios :  {data.toFixed(1)}%</p>
             <br/>
             {categoryFilms} 
             <p>{converter(details.runtime)}</p>
            </CategoryPri>
            <h3>Sinopse:</h3>
            <p>{details.overview}</p>
           </div>
            </SinopseDiv>
            
           
        </Grid1>
        {/* CARROSEL DE ATORES */}
        <Grid3>
        <Container>
            <h4>Elenco Principal</h4>
            <Carrousel>
            {cast && cast.map((cast)=>{
                const {known_for_department , original_name , profile_path } = cast
                return(
                    <CarrouselItem >
                    <div>
                  <CarrouselImage src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${profile_path}`} alt={original_name}/>
                  </div>
                  <CarrouselInfo>
                    <CarrouselName >{original_name}</CarrouselName>
                    <CarrouselDepartament>{known_for_department}</CarrouselDepartament>
                  </CarrouselInfo>
                 </CarrouselItem>)
            })}
            </Carrousel>
            </Container>
            <Trailer>
            <Trailer2>
            <h4>Trailer Oficial</h4>
            {trailer.length <= 0 ?
            <p><br/>"Nenhum Play no momento"</p>
             : watch}
            </Trailer2> 

               {/*CARROSEL DE FILMES RECOMENDADOS  */}
        <div> 
            <ContainerRecom>
            <h4>Recomendações</h4>
            <Carrousel>
            {similarMovie && similarMovie.map((similar)=>{
                const {backdrop_path , title , release_date , id} = similar
                return(
                    <CarrouselItem onClick={() => navigate(`/detalhes/${id}`)}  >
                    <div >
                  <CarrouselImage src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${backdrop_path}`} alt={title}/>
                  </div>
                  <CarrouselInfo >
                    <CarrouselName >{title}</CarrouselName>
                    <CarrouselDepartament>{formatData(release_date)}</CarrouselDepartament>
                  </CarrouselInfo>
                 </CarrouselItem>)
            })}
            </Carrousel>
            </ContainerRecom>
        </div>
        </Trailer>
        </Grid3>
       </ContainerPrincipal>
    )
}
export default DetailsPage