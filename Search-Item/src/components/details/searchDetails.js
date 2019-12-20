import React from 'react';
import './detail.css';

const SearchDetails = props => {
    const { searchedItem, showItemImg } = props;
    return (
        <div>
	      <div className="detailsInfo" >
	         <img src={searchedItem.pic_big} alt="" 
	              onClick = {()=>showItemImg(searchedItem)}
	         />
	      </div>
	      <div className="detailsInfo">Title:</div>
	      <div className="detailsInfo">{searchedItem.album_title}</div>
	      <div className="detailsInfo">Author:</div>
	      <div className="detailsInfo">{searchedItem.author}</div>
        </div>
    )
}

export default SearchDetails;