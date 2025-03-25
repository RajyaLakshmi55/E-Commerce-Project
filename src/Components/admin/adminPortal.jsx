import Books from "../books";
import Home from "../home";
import Navbar from "../navabar";
import AddBooks from "./addBooks";
import AddUsers from "./addusers";
import Users from "./users";
import { Routes,Route } from "react-router-dom";
import ReadBook from "../readBook";
import ReadMore from "../readMore";

const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            {/* <h1>Welcome to Admin Portal</h1> */}
            <Navbar />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Books />} path="/books" />
                    <Route element={<Users />}  path="/users"/>
                    <Route element={<AddUsers />} path="/addUsers"  />
                    <Route element={<AddBooks />}  path="/addBooks" />
                    <Route element={<ReadBook />} path="/books/:id" />
                    <Route element={<ReadMore />} path="/users/:id"/>
                </Routes>
                
        </div>
     );
}
 
export default AdminPortal;