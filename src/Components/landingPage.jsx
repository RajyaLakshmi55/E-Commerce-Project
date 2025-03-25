import { Link } from "react-router-dom";
import "../Styles/landingpage.css"
const LandingPage = () => {
    return ( 
        <div className="main">
            {/* <h1>Library Management System</h1> */}
        <div className="landingPage">
            
            <h1>Book Hub</h1>
            <div className="loginOptions">
                <div className="admin">
                    <Link to="/adminLogin">Admin Login</Link>
                </div>
                <div className="user">
                    <Link to="/userLogin">User Login</Link>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default LandingPage;