import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import classes from './Navbar.module.css';

const Navbar = () => {

    return (
        <div>
            <div className={classes.navbar}>
                <MyButton>
                    Log Out
                </MyButton>
                <div className={classes.navbarLinks}>
                <Link to='/logIn'>LogIn</Link>
                <Link to='/main'>Main</Link>
                <Link to='/admin'>Admin</Link>    
                </div>
            </div>
        </div>
    );
};

export default Navbar;