import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../iu/components'
import { MarvelPage,DcPage,HeroPage,SearchPage } from '../pages'

export const HeroRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="marvel" element={<MarvelPage/>} />
            <Route path="dc" element={<DcPage/>} />
            <Route path="search" element={<SearchPage/>} />
            <Route path="hero/:id" element={<HeroPage/>} />
            
            <Route path="/*" element={<Navigate to={"/marvel"}/>} />

        </Routes>
    </>
  )
}
