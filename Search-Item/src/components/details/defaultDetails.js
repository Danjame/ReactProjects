import React from 'react';
import './detail.css';

const DefaultDetails = props => {
    const { current, showItemImg } = props;
    return (
        current.map((item, index) =>
            <div className="floatWrappers"
             key={ index } 
            >
	           <div className="detailsInfo">
	              <img src={item.pic_small} alt="" 
	                   onClick = {()=>showItemImg(item)}/>
	           </div>
	           <div className="detailsInfo">Title:</div>
	           <div className="detailsInfo">{item.album_title}</div>
	           <div className="detailsInfo">Author:</div>
	           <div className="detailsInfo">{item.author}</div>
	        </div>
        )
    )
}

export default DefaultDetails;