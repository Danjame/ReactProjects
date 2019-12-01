import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, List, Button } from 'antd';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [1, 2]
        }
        this.addValue = this.addValue.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    render() {
        return (
            <div>
    		  <div>
    		    <Input 
    		    placeholder="Please type your item"
    		    style={{ width: "300px", marginRight: "10px"}}
    		    value = {this.state.inputValue}
    		    onChange={this.getInputValue}
    		    />
    		     <Button type = "primary" onClick = {this.addValue}>Add</Button>
    		  </div>
    		  <List
    		  style = {{ width: "300px" }}
    		  bordered
    		  dataSource = {this.state.list}
    		  renderItem={(item, index) => <List.Item onClick = {this.deleteItem}>{item}</List.Item>}
    		  />
    		</div>
        )
    }

    getInputValue(e) {
        const value = e.target.value;
        this.setState({
            inputValue: value
        });
    }

    addValue() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: '',
        });
        console.log(this.state)
    }

    deleteItem(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        })
    }
}

export default TodoList;