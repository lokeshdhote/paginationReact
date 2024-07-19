import { NavLink } from "react-router-dom"


const Nav= ()=>{
    

    return(  
        <nav className="justify-center flex gap-x-10">
            <NavLink className={(e)=>(e.isActive ? "text-pink-400": "")}  to='/'  >Home</NavLink>
            <NavLink className={(e)=>(e.isActive ? "text-pink-400": "")}  to='/User'  >User</NavLink>
            <NavLink className={(e)=>(e.isActive ? "text-pink-400": "")}  to='/About'  >About</NavLink>
        </nav>
      )
}
export default Nav
