import React from 'react';
import './ImageLinkForm.css';

function ImageLinkForm({onInputChange, onButtonClick}) {
    return (
        <div>
            <p className='f3 center ta-c'>
                {'This magic brain will detect faces. Git it a try!'}
            </p>
            <div className='center pr3 pl3'>
                <div className='pa4 br3 shadow-5 center form'>
                    <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
                    <button className='f4 w-30 link grow ph3 pv2 dib white bg-light-purple' onClick={onButtonClick} >Try Now!!!</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;