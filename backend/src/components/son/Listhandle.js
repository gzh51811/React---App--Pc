import React from 'react'
import { Layout, Menu, Icon, Avatar, } from 'antd';
const { Header, Content, Footer, Sider, } = Layout;
class Listhandle extends React.Component{
    state={
        nav:[
            {
            text:"订单处理",
            name:'listhandle'
            },{
                text:"删除订单",
                name:'listdel'
                }
        ]}
        
    render(){
return <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
{
    this.state.nav.map(item=><Menu.Item key={item.name}>
    <Icon type='list' />
    <span>{item.text}</span>
    </Menu.Item>)
}
</Menu>
    }
}
export default Listhandle