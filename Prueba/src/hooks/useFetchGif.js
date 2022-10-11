import { useEffect, useState } from "react"
import {GetGifs} from "../helpers/getGifs"

export const useFetchGif=(categoria)=>{
    
    const [imagenes,setImagenes] = useState([]);
    const [isLoading,setIsLoading]=useState(true);

    const getImages=async()=>{
        const newImagenes=await GetGifs(categoria);
        setImagenes(newImagenes);
        setIsLoading(false);
    }
    
    useEffect(()=>{
        getImages();
    },[])

    return {
        imagenes,
        isLoading
    }
}