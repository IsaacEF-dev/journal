import {useState} from "react"
import {AddCategorie} from "./components/AddCategorieApp"
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp=()=>{

    const [Categories, setaCategorie] = useState(["One Punch"])

    const addCategorie=(value)=>{
        setaCategorie([value,...Categories]);
    };

    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategorie newAddCategorie={addCategorie}/>

            
            {
                Categories.map(catego=>(
                    
                   <GifGrid
                    key={catego}
                    categoria={catego}
                   />
                ))
            }
           
        </>

        
    )
}