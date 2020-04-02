import React from 'react';
import Logo from '../Logo/Logo';

function Navigation() {
    return (
        <nav style = {{display: 'flex', justifyContent: 'flex-end',  paddingRight: '20px'}}>
            <div style={{marginRight: 'auto', marginTop: '20px'}} >
                <Logo />    
            </div>
            <p className = 'f3 link dim underline black pointer' >Sign Out</p>
        </nav>
    );
}

export default Navigation;