
import { useEffect, useState } from "react"
import api from '../API/config'







const useCustomCast = (url) =>{
    const [cast , setCast] = useState([])

   
    useEffect(()=>{
        api.get(`${url}?api_key=076c3e59377b1bf8519f952c169dcb0f&language=pt-BR`).then((res)=>{
            setCast(res.data.cast)
        }).catch((err)=>{
            console.log(err.response)
        })
    } , [url])
   
   
    return [cast]
    
}

export default useCustomCast