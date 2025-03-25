import { Route, Routes } from "react-router-dom";
import Home from "../home";
import Books from "../books";
import Navbar from "../navabar";
import ReadBook from "../readBook";
import Favourite from "./favourite";
import { useState } from "react";

const UserPortal = () => {
    let [cart,setCart]= useState([])
    return ( 
        <div className="userPortal">
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/"/>
                <Route element ={<Books />} path="/books"/>
                <Route element={<ReadBook cart={cart} setCart={setCart}/>} path="/books/:id"/>
                <Route element={<Favourite cart={cart} setCart={setCart}/>} path="/favourite"  />
           </Routes>
        </div>
     );
}
 
export default UserPortal;