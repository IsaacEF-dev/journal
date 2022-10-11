import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    
    const hereos=useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    
  return (
        <div className='row row-cols-1 row-cols-md-3 g-3'>
            {
                hereos.map(heroe=>(
                    <HeroCard key={heroe.id} {...heroe}/>
                ))
            }
        </div>
  )
}
