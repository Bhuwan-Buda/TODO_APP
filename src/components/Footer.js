import React from 'react'

const Footer = () => {

    const divStyle = {
        position: 'fixed',
        bottom: '0px',
        width: '100%'
    }

    const pStyle = {
        fontSize: '16px',
        margin: 'auto',
        padding: '8px'
    }

    return (
        <div style={divStyle} className='footer bg-black text-white text-center'>
            <p style={pStyle}>All Rights Reserved. &copy; TODO App</p>
        </div>
    )
}

export default Footer
