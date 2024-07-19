import axios from "../Helper/axios";
import React, { useState } from "react";
import { Link,Outlet, useLocation, useNavigate } from "react-router-dom";

const Users = () => {
  const {pathname} = useLocation()
 const navigate = useNavigate()
const  [users, setusers] = useState(null)

 const getUser = async ()=>{
    try {
        // console.log("hey");
      const {data} =await axios.get("/users")  
      setusers(data)
    //   console.log(users);
    } catch (error) {
        // console.log("hello");
      console.log(error);  
    }
 }



    return <div>
        
        Users
 <hr />

 <button onClick={getUser} className="bg-pink-400 px-[2vw] py-[1vw]" >get Users</button>
 <ul className="list-disc mt-5">
    <li className="list-item" >
        <Link className="list-item"  to={"/User/1"}>Item 1</Link>
    </li>
    <li className="list-item" >
        <Link className="list-item" to={"/User/2"} >Item 2</Link>
    </li>
    <li className="list-item" >
        <Link className="list-item" to={"/User/3"} >Item 3</Link>
    </li>
  
 </ul>
<Outlet/>

    
{users ? ( users.map((user)=>{
 
return(
    
<h1 className="text-black text-2xl font-[400] ">{user.name}</h1>

)
}
)
):(
<>
<h1>loading...</h1>
</>
) 
}


    </div>;
};

export default Users;
