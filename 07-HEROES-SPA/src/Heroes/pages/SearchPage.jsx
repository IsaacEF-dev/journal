import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import queryString from 'query-string';
import {HeroCard} from "../components/HeroCard"
import { getHeroesByName } from '../helpers/getHeroesByName';

export const Search = () => {

  const navigate=useNavigate();
  const location=useLocation();
 
  const {q = ""}=queryString.parse(location.search);
  const heroes=getHeroesByName(q);

  const showSearch=(q==="");
  const showError=(heroes.length===0 && q.length>0);

  const {searchText,onInputChange} =useForm({
    searchText:q,
  })

  const handleSearch=(event)=>{
    event.preventDefault();

    // if(searchText.trim().length<=2)return;

    navigate(`?q=${searchText}`)
  }

  

  return (
   <>
     <h1>Search</h1>
     <hr />

     <div className="row container">
        <div className="col-5">
        <h5>Searching</h5>
        <hr />

          <form action="">
            <input 
            type="text"
            placeholder='Search a hero'
            className='form-control' 
            autoComplete='off'
            name='searchText'
            value={searchText}
            onChange={onInputChange}
            />

            <button className='btn btn-outline-primary mt-2'
            onClick={handleSearch}>Search</button>

          </form>
        </div>

        <div className="col-7">
          <h5>Result</h5>
          <hr />


          {/* {
            (q==="")? 
            <div className="alert alert-primary">Search a hero</div>
            : (heroes.length===0) && <div className="alert alert-danger">No hero with <b>{q}</b></div>

          } */}

          <div className="alert alert-primary" style={{display:showSearch?"":"none"}}>Search a hero</div>
          
          <div className="alert alert-danger" style={{display:showError?"":"none"}}>No hero with <b>{q}</b></div>
          

          {
            heroes.map(hero=>(
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
          

        </div>

     </div>
   </>
  )
}
