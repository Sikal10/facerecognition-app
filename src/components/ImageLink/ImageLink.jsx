import React from 'react';
import "./ImageLink.css";

const ImageLink = ({onInputChange, value, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3 pa2'>
                {'This Magic Brain will detect faces in your pictures. Give it a try'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input value={value} onChange={onInputChange} className='f4 pa2 w-70 center inputs' type="text"  />
                    <button type={"submit"} onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib black bg-light style'>Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLink;