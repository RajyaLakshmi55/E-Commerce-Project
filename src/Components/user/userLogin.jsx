import { useNavigate } from "react-router-dom";
import "../../Styles/admin/adminLogin.css"

const USerLogin = () => {

    let navigate = useNavigate()
    let loginSubmit=()=>{
         navigate("/userPortal")
    }
    return ( 
        <div className="userLogin">
            <h1>User Login</h1>
            <div className="userForm">
            <form onSubmit={loginSubmit} >

                <div className="userEmail">
                     <input type="email" placeholder="Enter your email address"/>
                </div>

                <div className="userPassword">
                    <input type="password" placeholder="Enter your password" />
                </div>

                <div className="loginButton">
                    <button>Login</button>
                </div>

                </form>
            </div>
        </div>
     );
}
 
export default USerLogin;