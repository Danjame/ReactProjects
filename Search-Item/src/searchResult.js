import React, { Component } from 'react';
import './searchResult.css';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
        		<ul className='searchUl'>
        		{this.props.searchList.map((item,index)=>(
        			<li className='searchLi'
        			    key={index}
        			    onClick={this.select.bind(this, item)}
        			>
        			<div>
        				<span>{item.album_title}</span>
        			    <span className='authorInfo'>{item.author}</span>
        			</div>
        			    
        			</li>
        			    )
        		    )
        	    }
                </ul>
        	</div>
        )
    }

    select(item) {
        this.props.selectSearchItem(item);
    }
}

export default SearchResult;