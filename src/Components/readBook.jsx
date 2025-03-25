import { useEffect,useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../Styles/user/books.css"
import { Link } from "react-router-dom";

const ReadBook = ({cart,setCart}) => {

    let location=useLocation()

    let path=location.pathname.startsWith('/adminPortal')
    let userpath=location.pathname.startsWith('/userPortal')

    let params=useParams()
    let book_id = params.id

    // console.log(params)
    let [book,setBook]=useState([])
    
    useEffect(()=>{
        let fetchData=async()=>{
            let response= await fetch(`http://localhost:4500/books/${book_id}`)
            let data=await response.json();
            setBook(data)
        }
        fetchData()
    })
    let favouriteBook=()=>{
        setCart([...cart,book])
        alert("Add favourite books sucessfully....")
    }
    return ( 
        <div className="readbook">
            <h1>Book Description</h1>
            <div className="books_lists">
                <div className="main1">
                            <div className="booking">
                                <img src={book.thumbnailUrl} alt="" />
                            </div>
                            <div className="databook">
                                <h2>{book.title}</h2>
                                <h4>{book.shortDescription}</h4>
                                <h4>{book.longDescription}</h4>
                                {path ?<Link to="/adminPortal/books"><button>Back</button></Link>:<Link to="/userPortal/books"><button>Back</button></Link>}
                                {userpath && <button onClick={favouriteBook}>Favourite</button>}
                                
                                
                            </div>
                </div>
            </div>

            
        </div>
     );
}
 
export default ReadBook;