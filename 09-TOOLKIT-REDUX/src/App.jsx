import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement, bycrement} from './store/slices/counter/counterSlice';
import { useEffect } from 'react';
import { getPokemons } from './store/slices/pokemon/thunks';

function App() {

  
  
  // const {counter}=useSelector(state=>state.counter);
  // const [inputs, setinputs] = useState("")
  // const onInput=(e)=>{
  //   setinputs(e.target.value);
  // }
  const dispatch=useDispatch();
  const {isLoading,page,pokemon}=useSelector(state=>state.pokemons);

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <div >
      <h1>PokemonApp</h1>
      <hr />

      <span>Loading: {isLoading ? "true":"false"}</span>

      <ul>
        {
          pokemon.map(pokemon=>(
            <li key={pokemon.name}>{pokemon.name}</li>
          ))
        }
      </ul>

      <button onClick={()=>dispatch(getPokemons(page))} disabled={isLoading}>
        Next
      </button>
    </div>
  )
}

export default App
