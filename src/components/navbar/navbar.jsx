import React from 'react'
import './navbar.css'

const Navbar = ({items})=>{
    return <>
        <nav className='navbar'>
            <h1>useReducer</h1>
            <h1>CartSize:{items}</h1>
        </nav>
    </>;
}

export default Navbar;