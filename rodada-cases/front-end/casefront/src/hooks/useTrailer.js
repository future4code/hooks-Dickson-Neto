
import { useEffect, useState } from "react"
import api from '../API/config'







const useCustomTrailer = (url) =>{
    const [trailer , setTrailer] = useState([])
   
    useEffect(()=>{
        api.get(`${url}?api_key=076c3e59377b1bf8519f952c169dcb0f&language=pt-BR&append_to_response=videos`).then((res)=>{
            setTrailer(res.data.results)
        }).catch((err)=>{
            console.log(err.response)
        })
    } , [url])
   
   
    return [trailer]
    
}

export default useCustomTrailer