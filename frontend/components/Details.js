import React from 'react';


function Details(props) {

    const {title, description} = props;
    return(
        <div>
            <h2 className='photo-title'>{ title }</h2>
            <p className='photo-description'>{ description }</p>
        </div>
    )
}

export default Details