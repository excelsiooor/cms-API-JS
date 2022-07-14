import React from 'react';
import {Link} from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = () => {

    // const logo = '/src/Img/logo.png'

    return (
            <div className={classes.navbar}>
                <a href='/main'>
                <div className={classes.logo}></div>
                {/* <img src={logo} alt='woops' /> */}
                </a>
                <div className={classes.navbarLinks}>
                    <Link to='/registration'>Reg</Link>
                    <Link to='/logIn'>LogIn</Link>
                    <Link to='/main'>Main</Link>
                    <Link to='/admin'>Admin</Link>    
                </div>
            </div>
    );
};

export default Navbar;