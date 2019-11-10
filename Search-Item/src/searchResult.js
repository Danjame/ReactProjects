import React, { Component } from 'react';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
        		<ul style= {{positon: 'absolute', padding: '0 12px 0 12px'}}>
        		{this.props.searchList.map((item,index)=>(
        			<li style ={{lineHeight: '100%', color: 'white', listStyle: 'none'}}
        			    key = {index}
        			    onClick = {this.select.bind(this, item)}
        			>
        			<span>{item.album_title}</span>
        			<span style ={{marginLeft: 15 }}>{item.author}</span>
        			</li>
        			    )
        		    )
        	    }
                </ul>
        	</div>
        )
    }

    select(item){
    	this.props.selectSearchItem(item);
    }
}

export default SearchResult;