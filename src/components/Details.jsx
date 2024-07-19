import { NavLink, useParams } from "react-router-dom"

const Details = ()=>{
    const {id} =useParams()
    return(
    <>
    <div>
        <div> Details </div>
            <h1>{id}</h1>
                <NavLink/>
               
    </div>
    
    </>
    )
}

export default Details