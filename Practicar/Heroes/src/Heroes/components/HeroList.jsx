import React from 'react'

import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { CardHero } from './CardHero'



export const HeroList = ({publisher}) => {

    const heroes=getHeroesByPublisher(publisher)

  return (
    <div className='row row-cols-1 row-cols-md-3 g-3 mt-3'>
        {
            heroes.map(hero=>(
               <CardHero key={hero.id} {...hero}/>
            ))
        }
    </div>
  )
}
