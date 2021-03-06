import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Projects</NavLink></li>
            <li><NavLink to="/">Sign Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">IY</NavLink></li>
        </ul>
    )
}

export default SignInLinks;