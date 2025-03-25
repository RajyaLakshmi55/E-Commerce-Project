import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/admin/adminLogin.css";

const AdminLogin = () => {
    let navigate = useNavigate();

    let email = useRef();
    let password = useRef();

    let admin = {
        email: "admin@gmail.com",
        password: "12345"  // Changed from number to string
    };

    let adminSubmit = (e) => {
        e.preventDefault(); // Prevent form default behavior

        if (email.current.value === admin.email && password.current.value === admin.password) {
            // Navigate to admin portal
            navigate("/adminPortal");
        } else {
            alert("Invalid Admin Credentials");
        }
    };

    return (
        <div className="adminlogin">
            <h1>Admin Login</h1>
            <div className="adminForm">
                <form onSubmit={adminSubmit}>
                    <div className="adminEmail">
                        <input ref={email} type="email" placeholder="Enter your email address" required />
                    </div>
                    <div className="adminPassword">
                        <input ref={password} type="password" placeholder="Enter your password" required />
                    </div>
                    <div className="loginButton">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
