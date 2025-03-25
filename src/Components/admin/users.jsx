import { useEffect, useState } from "react";
import "../../Styles/admin/users.css"
import { useNavigate } from "react-router-dom";

const Users = () => {
    let navigate=useNavigate()
    
    let [user,setUser]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let response = await fetch("http://localhost:4500/users")
            let data = await response.json()
            setUser(data)
            }
            fetchData()
    },[user])

    let readMore =(id)=>{
        navigate(`/adminPortal/users/${id}`)
    }

    let handleDelete =(id,firstName,lastName)=>{
        fetch(`http://localhost:4500/users/${id}`,{
            method:"DELETE"
        })
        alert(`${firstName}${lastName} got deleted`)
    }

    return ( 
        <div className="users">
            <h1>Users Details</h1>
            <div className="details_1">
            {
                user.map((info)=>{
                    return <div className="details">
                                
                                    <div className="pic">
                                        <img src={info.image} alt="" />
                                    </div>

                                    <div className="inform">
                                        <h1>{info.firstName}  {info.lastName}</h1>
                                        <h2>{info.email}</h2>
                                        <h2>{info.mobile}</h2>
                                        <button onClick={()=>readMore(info.id)}>Read More</button>
                                        <button onClick={()=>handleDelete(info.id,info.firstName,info.lastName)}>Delete</button>
                                    </div>
                            </div>
                

                           
                })
            }
            </div>
        </div>
     );
}
 
export default Users;