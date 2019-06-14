import React from 'react';
import { NavLink } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper darken-2">
            <div className="container">
                <NavLink to="/" className="brand-logo">Gitlab</NavLink>
                <SignInLinks />
                <SignOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;