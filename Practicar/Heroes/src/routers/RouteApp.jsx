import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroRoutes } from '../Heroes/routes/HeroRoutes'

export const RouteApp = () => {
  return (
    <>
        <Routes>
          <Route path='login' element={<LoginPage/>}></Route>

          <Route path='/*' element={<HeroRoutes/>}></Route>
        </Routes>
    </>
  )
}
