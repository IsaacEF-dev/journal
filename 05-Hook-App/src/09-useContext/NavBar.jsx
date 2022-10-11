import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
        <nav className="navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link to={"/"} className={"navbar-brand"}>useContext</Link>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                
                    <NavLink to={"/"}
                    className={({isActive})=>`nav-link ${isActive ? 'active fw-bold':''}`}>
                        Home
                    </NavLink>
                    
                    <NavLink to={"/about"}
                    className={({isActive})=>`nav-link ${isActive ? 'active fw-bold':''}`}>
                        About
                    </NavLink>
                    <NavLink to={"/login"}
                    className={({isActive})=>`nav-link ${isActive ? 'active fw-bold':''}`}>
                        Login
                    </NavLink>
                </ul>
                </div>
            </div>
        </nav>
  )
}
