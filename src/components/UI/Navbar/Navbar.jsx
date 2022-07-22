import React from 'react';
import {Link} from "react-router-dom";
import cl from './Navbar.module.css';

const Navbar = () => {

    // const logo = '/src/Img/logo.png'

    return (
            <div className={cl.content}>
                <Link to='/main'>
                <div className={cl.logo}></div>
                </Link>
                <div className={cl.items}>
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