import {useFetchGif} from "../hooks/useFetchGif"
import {GifComponent} from "../components/GifComponent"

export const GifGrid=({categoria})=>{
    
    const {imagenes,isLoading}= useFetchGif(categoria);

    return(
        <>
            <h3>{categoria}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    imagenes.map(images=>(
                        <GifComponent
                            key={images.id}
                            {...images}
                        />
                    ))
                }
            </div>
        </>
    )
}