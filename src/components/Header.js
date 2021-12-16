import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <div className='header text-center text-primary bg-black'>
          <h1 className='heading'>Welcome to TODO App.</h1>
          <nav className='nav'>
            <Link 
                to="/" 
                style={{
                    textDecoration: 'none', 
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: '22px'}}>
            Home</Link>
            <Link 
                to="/about"
                style={{
                    textDecoration: 'none',
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: '22px' }}>
            About</Link>
            <Link 
                to="/contact"
                style={{
                    textDecoration: 'none',
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: '22px' }}>
            Contact</Link>
          </nav>
        </div>
    )
}

export default Header
