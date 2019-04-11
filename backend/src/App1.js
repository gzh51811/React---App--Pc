import React, { Component } from 'react';
import { Layout, Icon, Menu,Avatar} from 'antd';
import 'antd/dist/antd.css';
import Home from './components/Home';
import List from './components/List';
import Shop from './components/Shop';
import User from './components/User';
import Submenu from './components/Submenu';
import { Switch, Route, withRouter,Redirect } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
	constructor() {
		super();
		this.state = {
			navs: [
				{
					text: '首页',
					path: '/home',
					name: 'Home',
					icon: 'home',
				},
				{
					text: '商品管理',
					path: '/shop',
					name: 'Shop',
					icon: 'shop',
				},
				{
					text: '订单管理',
					path: '/list',
					name: 'List',
					icon: 'file',
				},
				{
					text: '管理员',
					path: '/user',
					name: 'User',
					icon: 'user',
				},
			],
		};
	}

	handleClick = e => {
    console.log(this, e);
		this.setState(
			{
				current: e.key,
			},
			() => {
				//路由跳转：编程式导航
				// 利用withRouter()高阶组件实现history的传递
				console.log(this.props.history);

				this.props.history.push(this.props.match.url +'/'+ e.key.toLowerCase());
			}
		);
	};
	render() {
	
		return (
			<Layout style={{height:'100%'}}>
				{/* 左边导航栏 */}
				<Sider
					breakpoint="lg"
                    collapsedWidth="0"
					onBreakpoint={broken => {
						console.log(broken);
					}}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}
				>
					<div className="logo" />

					<Menu theme = "dark" mode="inline"
                     defaultSelectedKeys={['4']}
                     onClick={this.handleClick}
					 selectedKeys={[this.state.current]}>	
						< Submenu>
					{this.state.navs.map(item => (
						<Menu.Item key={item.name}>	
						      <Icon type={item.icon} />		
						      <span className="nav-text">{item.text}</span>	
							  
						</Menu.Item>	
						)
					)	
					}
					</Submenu>
					</Menu>
				</Sider>
				<Layout>
					{/* 头部 */}
				<Header style={{ background: '#65A3E6', padding: 0 ,position:'relative'}}>
                    <div style={{position:'absolute',right:'10px',top:'5px'}}>
                    <Avatar shape="circle" icon="user" />
                    </div>
                    <span style={{position:'absolute',right:'50px',top:'5px',color:'white'}}>退出</span>
                </Header>

					{/* 中间部分 */}
				<Content style={{ margin: '0px 16px 0 16px' }}>
						<div style={{ background: '#fff', minHeight: 360 }}>
							<Switch>
							    <Route path={this.props.match.path +"/home"} component={Home} />
								<Route path={this.props.match.path +"/shop"} component={Shop} />
								<Route path={this.props.match.path +"/list"} component={List} />
								<Route path={this.props.match.path +"/user"} component={User} />
                                <Redirect from="/" to={this.props.match.path +"/home"}/>
							</Switch>
						</div>
                </Content>
					
						{/* 底部 */}
					<Footer style={{ textAlign: 'center',background:'#ddd' }}>Ant Design ©2018 Created by Ant UED</Footer>
				</Layout>
			</Layout>
		);
	}
}
App = withRouter(App);
export default App;
