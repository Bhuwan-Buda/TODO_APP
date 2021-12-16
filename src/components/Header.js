import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const divStyle = {
        position: 'relative',
        top: '0px',
        width: '100%'
    }
    const hstyle = {
        fontSize: '3.4rem',
        padding: '10px',
    }

    const linkStyle = {
        display: 'flex',
        justifyContent: 'space-around'
    }

    return (
        <div style={divStyle} className='header text-center text-primary bg-black'>
          <h1 style={hstyle}>Welcome to TODO App.</h1>
          <nav style={linkStyle}>
            <Link 
                to="/" 
                style={{
                    textDecoration: 'none', 
                    color: 'red',
                    fontSize: '22px'}}>
            Home</Link>
            <Link 
                to="/about"
                style={{
                    textDecoration: 'none',
                    color: 'red',
                    fontSize: '22px' }}>
            About</Link>
            <Link 
                to="/contact"
                style={{
                    textDecoration: 'none',
                    color: 'red',
                    fontSize: '22px' }}>
            Contact</Link>
          </nav>
        </div>
    )
}

export default Header
