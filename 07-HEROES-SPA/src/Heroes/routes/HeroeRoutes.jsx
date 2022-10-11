import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../iu"
import { DcPages, MarvelPage, Search, Hero} from "../pages"


export const HeroeRoutes = () => {
  return (
   <>
     <Navbar/>
        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPages />} />
            <Route path="search" element={<Search />} />
            <Route path="hero/:id" element={<Hero />} />
            

            <Route path="/*" element={<Navigate to="/marvel"/>} />

        </Routes>
   </>
  )
}
