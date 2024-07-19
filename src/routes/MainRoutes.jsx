import Home from "../components/Home.jsx"
import User from "../components/User.jsx"
import About from "../components/About.jsx"
import NotFound from "../components/NotFound.jsx"
import Details from "../components/Details.jsx";

import { Route, Routes } from "react-router-dom";




function MainRoutes() {

  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<User />} >
        <Route path='/user/:id' element={<Details />} />
      </Route>

        <Route path='/About' element={<Details />} />
      <Route path='*' element={<NotFound />} />
    </Routes>


  )
}

export default MainRoutes
