
import { useEffect, useState } from "react"
import api from '../API/config'







const useCustomRecomendation = (url) =>{
    const [similarMovie , setSimilarMovie] = useState([])

   
    useEffect(()=>{
        api.get(`${url}?api_key=076c3e59377b1bf8519f952c169dcb0f&language=pt-BR`).then((res)=>{
            setSimilarMovie(res.data.results)
        }).catch((err)=>{
            console.log(err.response)
        })
    } , [url])
   
   
    return [similarMovie]
    
}

export default useCustomRecomendation