import React,{Component} from 'react';
import {Menu } from 'antd';
const { SubMenu } = Menu;
class Submenu extends Component {
render(){
    return (
        <SubMenu title="子菜单">
      <Menu.Item>商品一览</Menu.Item>
     <Menu.Item>添加商品</Menu.Item>
       </SubMenu>
    )

}
}
export default Submenu
