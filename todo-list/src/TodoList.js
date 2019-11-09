import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, List, Button } from 'antd';

const list = [1, 2, 3, 4, 5, 6];

class TodoList extends Component {
    render() {
        return (
            <div>
    		  <div>
    		    <Input placeholder="Please type your item" style={{ width: "300px", marginRight: "10px"}}/>
    		     <Button type = "primary" >Add</Button>
    		  </div>
    		  <List
    		  style = {{ width: "300px" }}
    		  bordered
    		  dataSource = {list}
    		  renderItem={item => <List.Item>{item}</List.Item>}
    		  />
    		</div>
        )
    }
}

export default TodoList;