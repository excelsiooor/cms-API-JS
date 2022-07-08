import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../MyButton/MyButton";

const Navbar = () => {

    return (
        <div>
            <div className="navbar">
                <MyButton>
                    Log Out
                </MyButton>
                <div className="navbar-links">
                <Link to='/login'>LogIn</Link>
                <Link to='/main'>Main</Link>    
                </div>
            </div>
        </div>
    );
};

export default Navbar;