import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';

const MenuItems = (props) => {
    const { result, getItemDetail } = props;
    return <Menu theme="dark" mode="inline">
	            {result.map((item, index) =>
			        <Menu.Item
				      key={ index } 
				      onClick = {()=>getItemDetail(index)}
				    >
				      <img src={item.bg_pic} alt="" style={{width: 150}}/>
			        </Menu.Item>)}
            </Menu>
}

export default MenuItems;