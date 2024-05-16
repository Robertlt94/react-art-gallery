import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

const Header = ({ message }) => {

    return (
        <div className='header'>
            <div className='logo-container'>
                <h1>ArtI</h1>
            </div>
            <div className='message-container'>
                <h2>{message}</h2>
            </div>
            <div className='nav-container'>
                <Nav />
            </div>
        </div>
    );
}

export default Header;