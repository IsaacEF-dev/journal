import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPages } from '../auth'
import { HeroeRoutes } from '../Heroes/routes/HeroeRoutes'
import { Navbar } from '../iu'

export const RouterApp = () => {
  return (
    <>
    
        <Routes>
            <Route path="login" element={<LoginPages />} />

            <Route path="/*" element={<HeroeRoutes/>} />

        </Routes>
    </>
  )
}
