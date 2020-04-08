import React from 'react';
import Logo from '../Logo/Logo';

function Navigation({onRouteChange, isSignedIn}) {
    return (
        <nav style = {{display: 'flex', justifyContent: 'flex-end',  paddingRight: '20px'}}>
            <div style={{marginRight: 'auto', marginTop: '20px'}} >
                <Logo />    
            </div>
            {
                isSignedIn ? 
                <p className = 'f3 link dim underline black pointer' onClick={() => onRouteChange('signin')} >Sign Out</p> : 
                <div></div>
            }
               
        </nav>
    );
}

export default Navigation;