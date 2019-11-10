import React, { Component } from 'react';

class SingleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.touchmove = this.touchmove.bind(this);
    }

    render() {
        return (
            <div style = {{
				position: 'fixed',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				zIndex: 1,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				backgroundColor: 'rgba(222,222,240, 0.9)'
			}} onClick = {this.props.showSingleItem}
			   onTouchMove={this.touchmove}
			>
				<div style = {{margin: '0 auto'}}>
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