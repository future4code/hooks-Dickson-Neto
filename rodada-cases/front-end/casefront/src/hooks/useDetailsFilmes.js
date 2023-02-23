
import { useEffect, useState } from "react"
import api from '../API/config'







const useCustomDetails = (url) =>{
    const [details , setDetails] = useState([])
    const [category , setCategory] = useState([])
    const states = {details , category}
    useEffect(()=>{
        api.get(`${url}?api_key=076c3e59377b1bf8519f952c169dcb0f&language=pt-BR`).then((res)=>{
            setDetails(res.data)
            setCategory(res.data.genres)
        }).catch((err)=>{
            console.log(err.response)
        })
    } , [url])
   
   
    return [states]
    
}

export default useCustomDetails