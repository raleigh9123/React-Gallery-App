import React from 'react';
import {NavLink} from 'react-router-dom';

const NavMenu = () => {
    return (
        <nav className="main-nav">
            <ul>
            <li><NavLink to='/beach'>Beach</NavLink></li>
            <li><NavLink to='/mountain'>Mountain</NavLink></li>
            <li><NavLink to='/desert'>Desert</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavMenu;