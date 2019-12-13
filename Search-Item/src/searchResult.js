import React, { Component } from 'react';
import './searchResult.css';

const SearchResult = (props) => {
    const { searchList, selectSearchItem } = props;
    return (
        <div>
        <ul className='searchUl'>
            {searchList.map((item,index)=>
                <li className='searchLi'
                    key={index}
                    onClick={()=>selectSearchItem(item)}
                 >
                     <div>
                        <span>{item.album_title}</span>
                        <span className='authorInfo'>{item.author}</span>
                    </div>
                </li>
                )
            }
        </ul>
    </div>
    )
}

export default SearchResult;