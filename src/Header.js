// Header.js

import React from 'react';
import logo from './website-logo.png';

function Header(){
    return (
        <header>
            <img src={logo} alt='Premier Off Licence' />
            { /* Header Content */}
        </header>
    );
}

export default Header;