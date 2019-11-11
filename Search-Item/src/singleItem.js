import React, { Component } from 'react';
import './singleItem.css';

class SingleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.touchmove = this.touchmove.bind(this);
    }

    render() {
        return (
            <div className='singleItemWrapper'
            style = {{
				
			}} onClick = {this.props.showItemImg}
			   onTouchMove={this.touchmove}
			>
				<div className='imgWrapper'>
					<img src={this.props.displayImg} alt=""/>
				</div>
			</div>
        )
    }

    touchmove(event) {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }
}

export default SingleItem;