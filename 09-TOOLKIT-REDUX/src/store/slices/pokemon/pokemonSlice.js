import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: {
        isLoading:false,
        page:0,
        pokemon:[],
    },
    reducers: {
        startLoadingPokemons:(state)=>{
            state.isLoading=true;
        },
        setPokemons:(state,action)=>{
           state.isLoading=false,

           state.page=action.payload.page;
           state.pokemon=action.payload.pekemons
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons,setPokemons } = pokemonSlice.actions;