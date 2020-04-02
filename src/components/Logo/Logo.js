import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png'

function Logo() {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max :65 }} style={{ height: 75, width: 75, padding: '5px' }} >
                <div className="Tilt-inner center-inside-items"> 
                    <img src={brain} alt='logo' style = {{width: '100%'}} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;