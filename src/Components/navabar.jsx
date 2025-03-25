import { Link } from "react-router-dom";
import "../Styles/navbar.css"
import { useLocation } from "react-router-dom";


const Navbar = () => {
    let location=useLocation()
    let path=location.pathname.startsWith('/adminPortal')  
    let userpath=location.pathname.startsWith('/userPortal')
    // instead of startWith() we also use includes() method
    // console.log(location)
    return (
        <div className="navbar">
            <div className="book">
                <img src="https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/icons/main-logo-green.svg" alt="" />
            </div>
            <div className="logo">
                <h1>Book Hub</h1>
            </div>
            <div className="links"> 
                {path ? <Link to="/adminPortal/" >Home</Link> : <Link to="/userPortal/" >Home</Link>}
                {path ? <Link to="/adminPortal/books" >Books</Link>  : <Link to="/userPortal/books" >Books</Link>}
                {path && <Link to="/adminPortal/users" >Users</Link> } 
                {path &&  <Link to="/adminPortal/addBooks" >Add Books</Link>} 
                {path && <Link to="/adminPortal/addUsers" >Add Users</Link>}
                {userpath && <Link to="/userPortal/favourite">Favourite</Link>}
                {path ? <Link to="/adminLogin">Logout</Link> : <Link to="/userLogin">Logout</Link>}  
                
                
                 {/*  startWith() also working
                    path?
                    <div>
                        <Link to="/adminPortal/" >Home</Link> 
                        <Link to="/adminPortal/" >Books</Link>
                        <Link to="/adminPortal/" >Home</Link>
                        <Link to="/adminPortal/" >Home</Link>
                        <var></var>
                    </div>
                    :
                    <div>

                    </div>
                       }*/}

                

            </div>
        </div>
      );
}
 
export default Navbar;
