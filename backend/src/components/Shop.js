import React from 'react';
import {Breadcrumb,Table, Badge, Menu, Dropdown, Icon, } from 'antd';
                
           
import 'antd/dist/antd.css';

class List extends React.Component {
    render() {
        const menu = (
  <Menu>
    <Menu.Item>
      Action 1
    </Menu.Item>
    <Menu.Item>
      Action 2
    </Menu.Item>
  </Menu>
);
       
        return <div>
             <Breadcrumb>
    <Breadcrumb.Item>商品管理</Breadcrumb.Item>
             </Breadcrumb>
            
            
        </div>
    }
}
export default List