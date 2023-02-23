import React, { useEffect, useState } from 'react'
import api from '../../API/config'
import { useNavigate} from 'react-router-dom';
import { Buttons, CardFilmes, Container, ContainerButton, GridCards, ImageButton, ImgCard, PageChange, Text} from '../InitialPage/InitialPageStyled'
import direita from '../../imagens/seta-direita.png'
import esquerda from '../../imagens/seta-esquerda.png'


const InitialPage = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [genres, setGenres] = useState([])
    const [selectedCategory , setSelectedCategory] = useState([])
    const [filmsFiltred , setFilmsFiltred] = useState([])
    const navigate = useNavigate()

    const increase = () => {
        setPage(page + 1)
    }

    const decrease = () => {
        setPage(page - 1)

        if (page <= 1) {
            setPage(1)
        }
    }

    //PEGAR A LISTA DE FILMES
    const mappingMovies = (page) => {
        api.get(`/movie/popular?api_key=076c3e59377b1bf8519f952c169dcb0f&language=pt-BR&page=${page}`,)
            .then((res) => {
                setData(res.data.results)  
            }).catch((error) => {
                console.log(error.message)
            })
    }
    
   
    //DEIXANDO A FUNÇÃO RODANDO 
    useEffect(() => {
        {mappingMovies(page)}
    }, [page])

    //FORMATANDO DATA
    const formatString = ((data)=>{
        const dia  = data.split("-")[2];
        const mes  = data.split("-")[1];
        const ano  = data.split("-")[0];
    
         return (`${dia}-${mes}-${ano}`);
      // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
        })
    //RENDERIZANDO LISTA DE FILMES
    const printMovies = data && data.map((item) => {
        return (
        <CardFilmes onClick={() => navigate(`/detalhes/${item.id}`)}>
            <ImgCard src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`} />
            <p> {item.title}</p>
            <p>{formatString(item.release_date)}</p>
        </CardFilmes>
        )
    })

    

    
      
    useEffect(()=>{
        const films = data && data.map((filmes)=>{
           return (filmes)
        }).filter((filmes)=>{
         return (filmes.genre_ids.includes(selectedCategory))     
        })
        setFilmsFiltred(films)
        
    }, [selectedCategory])
  
    const filtroFilmes = filmsFiltred && filmsFiltred.map((item) =>{
        return (
        <div onClick={() => navigate(`/detalhes/${item.id}`)}>
            <ImgCard src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`} />
            <p> {item.title}</p>
           
        </div>
        )
    })
    
    //PEGAR GENEROS DOS FILMES
    const genreFilmes = () => {
        api.get(`/genre/movie/list?api_key=076c3e59377b1bf8519f952c169dcb0f&language=pt-BR&`,)
            .then((res) => {
                setGenres(res.data.genres)
            }).catch((error) => {
                console.log(error.message)
            })
    }

    //DEIXANDO A FUNÇÃO RODANDO A TODO MOMENTO
    useEffect(() => {
        {genreFilmes()}
    }, [])

    //RENDERIZANDO LISTA DE GENEROS
    const newGenres = genres && genres.map((item) => {
        return (
                <Buttons onClick={()=>getCategory(item.id)} >{item.name}</Buttons>
        )
    })
    // PEGANDO A CATEGORIA PARA O FILTRO
    const getCategory = (paramCategory) =>{
        if(paramCategory === selectedCategory){
            setSelectedCategory("")
        }else{
            setSelectedCategory(paramCategory)
        }
    }
    
    return (
        <Container>
            <Text>
                <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já</h2>
                <p>Filtre por:</p>
                <ContainerButton>
                {newGenres}
                </ContainerButton>
            </Text>
            <br/>
            <br/>
          
            <GridCards>
             {selectedCategory.length <= 0 ? printMovies : (selectedCategory ? filtroFilmes : "Não existe filme no momento") }
            </GridCards>
          <PageChange>
        
          <img src={esquerda} alt="Seta para a esquerda" onClick={() => decrease()}/>
            {page}
            <img src={direita} alt="Seta para a direita" onClick={() => increase()}/>
          
          </PageChange>
        </Container>
    )
}


export default InitialPage