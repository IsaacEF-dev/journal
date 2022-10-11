import React from 'react'
import { HeroList } from '../components/HeroList'

export const MarvelPage = () => {
  return (
    <div className='container mt-3'>
        <h1>Marvel Page</h1>

        <HeroList publisher="Marvel Comics"/>
    </div>
  )
}
