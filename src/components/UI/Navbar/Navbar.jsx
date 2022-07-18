import React from 'react';
import {Link} from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = () => {

    // const logo = '/src/Img/logo.png'

    return (
            <div className={classes.navbar}>
                <Link to='/main'>
                <div className={classes.logo}></div>
                </Link>
                <div className={classes.navbarLinks}>
                    <Link to='/registration'>Reg</Link>
                    <Link to='/logIn'>LogIn</Link>
                    <Link to='/main'>Main</Link>
                    <Link to='/admin'>Admin</Link>
                    <Link to='/profile'>User</Link>    
                </div>
            </div>
    );
};

export default Navbar;