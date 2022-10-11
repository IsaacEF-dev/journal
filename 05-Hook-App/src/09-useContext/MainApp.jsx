import { Navigate, Route, Routes } from "react-router-dom"
import { UserProvider } from "./UserProvider"
import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"



export const MainApp = () => {
  return (
    <UserProvider>
        {/* <h1>MainApp</h1> */}
        <NavBar/>
        <hr />

        <Routes>
            <Route path="login" element={<LoginPage/>}></Route>
            <Route path="about" element={<AboutPage/>}></Route>
            <Route path="/" element={<HomePage/>}></Route>

            {/**si no existe una ruta redirige a una que expesifiquemos */}
            <Route path="/*" element={<Navigate to={"/"}/>}></Route>
        </Routes>

    </UserProvider>
  )
}
