import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Home from './components/Home';
import List from './components/List';
import Shop from './components/Shop';
import User from './components/User';
import Shophandle from './components/son/Shophandle'
import Listhandle from './components/son/Listhandle'
import EditableTable from './components/son/See'

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar, } from 'antd';


const { Header, Content, Footer, Sider, } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false,
    navs: [{
      text: '首页',
      path: '/home',
      name: 'Home',
      icon: 'home',
    },
    {
      text: '管理员',
      path: '/user',
      name: 'User',
      icon: 'user',
    },
    ],
    navs2: [{
      text: '商品管理',
      path: '/shop',
      name: 'Shop',
      icon: 'shop',
      
    
    }, {
      text: '订单管理',
      path: '/list',
      name: 'List',
      icon: 'file',
    },]
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  handleClick = e => {
    console.log(this, e);
    console.log('2',React);
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

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handleClick}>
            {
              this.state.navs.map(item => <Menu.Item key={item.name}>
                <Icon type={item.icon} />
                <span>{item.text}</span>
              </Menu.Item>)

            }{this.state.navs2.map(item => <SubMenu 
              key={item.name}
              title={<span><Icon type={item.icon} /><span>{item.text}</span></span>}
            >
            
            {item.text=='商品管理'? <Shophandle/>:<Listhandle/>}
            
            
            </SubMenu>)}
          </Menu>
        </Sider>

        <Layout>


          {/* 头部 */}
          <Header style={{background: '#5994d4', padding:'0',position:'relative' }}>
           <div style={{position:'absolute',right:'10px',top:'5px'}}>
                    <Avatar shape="circle" icon="user" />
          </div>
                  <span style={{position:'absolute',right:'50px',top:'5px',color:'white'}}>退出</span>
          </Header>
          
          
       {/* 内容显示区域 */}
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                <Route path={this.props.match.path + "/home"} component={Home} />
                <Route path={this.props.match.path + "/shop"} component={Shop} />
                <Route path={this.props.match.path + "/list"} component={List} />
                <Route path={this.props.match.path + "/user"} component={User} />
                <Route path={this.props.match.path + "/shopsee"} component={EditableTable} />
                <Redirect from="/" to={this.props.match.path + "/home"} />
              </Switch>
            </div>
          </Content>


          {/* 底部 */}
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
App = withRouter(App);
export default App