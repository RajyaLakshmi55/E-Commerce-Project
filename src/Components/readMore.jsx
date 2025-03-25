import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"


const ReadMore = () => {
    let params=useParams()
    let user_id = params.id
    
    let [users,setUsers]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response= await fetch(`http://localhost:4500/users/${user_id}`)
            let data=await response.json();
            setUsers(data)
        }
        fetchData()
    })
    return ( 
        <div className="readMore">
            <h1>Read More About Actors</h1>
            <div className="user_lists">
                <div className="detail">
                            <div className="pic">
                                <img src={users.image} alt="" />
                            </div>
                            <div className="inform">
                                <h1>{users.firstName}</h1>
                                <h3>{users.about}</h3>
                                <Link to="/adminPortal/users"><button>Back</button></Link>
                            </div>
                </div>
            </div>
        </div>
     );
}
 
export default ReadMore;