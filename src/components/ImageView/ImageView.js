import React from 'react';
import './ImageView.css';

function ImageView({imageUrl, box}) {
    return(
        <div className = 'center ma'>
            <div className='absolute mt2'>
                <img id='imageCheck' src={imageUrl} alt='' width='600px' height='auto' />
                <div className='boundingBox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} ></div>
            </div>
        </div>
    );
}

export default ImageView;