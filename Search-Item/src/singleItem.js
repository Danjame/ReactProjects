import React from 'react';
import './singleItem.css';

const SingleItem = (props) => {
    const { showItemImg, displayImg } = props;
    return (
        <div className='singleItemWrapper'
             onClick = {showItemImg}
        >
            <div className='imgWrapper'>
                <img src={displayImg} alt=""/>
            </div>
        </div>
    )
}

export default SingleItem;