export{useEffect}from"react";

export const Message = () => {

    useEffect(() => {
      const mouseMove=({x,y})=>{
        console.log(x,y);
      }

      window.addEventListener("mousemove", mouseMove);
    
      return () => {
       window.removeEventListener("mousemove",mouseMove)
      }
    }, [])
    

  return (
    <>
        <h3>Ya existe</h3>
    </>
  )
}
