import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {getHeroeById} from "../helpers/getHeroeById.js"
import { MarvelPage } from './MarvelPage'

export const HeroPage = () => {
  const {id}=useParams()

  let navigate = useNavigate();

  const onReturnNavigate=()=>{
    navigate(-1);
  }
  
  const hero=useMemo(() => getHeroeById(id), [id]);

  
  const imageHero=`../../../assets/${id}.jpg`

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4">
          <img src={imageHero} alt={hero.superhero} className='img-thumbnail'/>
        </div>
        <div className="col-8">
        <h3 className="fw-bold mb-2 text-center fs-2">{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego} </li>
            <li className='list-group-item'><b>Publisher:</b> {hero.publisher} </li>
            <li className='list-group-item'><b>First Appearance:</b> {hero.first_appearance} </li>

            <h5 className="mt-3">Characters</h5>
            <p>{hero.characters}</p>

            <button className="btn btn-outline-success"
            onClick={onReturnNavigate}>Regresar</button>
          </ul>
        </div>
      </div>
    </div>
  )
}
