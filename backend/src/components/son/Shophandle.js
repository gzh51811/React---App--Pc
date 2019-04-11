import React from 'react'
import EditableTable from './See'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar, } from 'antd';
const { Header, Content, Footer, Sider, } = Layout; 

class Shophandle extends React.Component{
    state={
        nav:[
            {
            text:"商品一览",
            name:'shopsee'
            },{
                text:"添加商品",
                name:'shopadd'
                }
        ]}
        handleClick = e => {
            console.log(this, e);
                this.setState(
                    {
                        current: e.key,
                    },
                    () => {
                        //路由跳转：编程式导航
                        // 利用withRouter()高阶组件实现history的传递
                        // console.log(this.props.history);
        
                        this.props.history.push(this.props.match.url +'/'+ e.key.toLowerCase());
                    }
                );
          };   
    render(){
return <Layout>
    <Sider>
<Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" onClick={this.handleClick}>
{
    this.state.nav.map(item=><Menu.Item key={item.name}>
    <Icon type='shop' />
    <span>{item.text}</span>
    <EditableTable/>

    </Menu.Item>)
}
</Menu>
</Sider>
</Layout>
    }
}
Shophandle = withRouter(Shophandle);
export default Shophandle