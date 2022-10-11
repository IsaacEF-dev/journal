import { useContext } from "react"
import { UserContext } from "./userContext"


export const HomePage = () => {

  const {user,setUser}=useContext(UserContext);

  return (
   <>
     <h1>HomePage</h1>

     <pre>
        {JSON.stringify(user,null,3)}
     </pre>

     <button 
      className="btn btn-primary"
      onClick={()=>setUser({id:123,name:"Juan Pablo",email:"juanpa12@gmail.com"})}>
      Agregar Usuario
     </button>
   </>
    
  )
}
