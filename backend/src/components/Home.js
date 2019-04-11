import React from 'react';
import { Breadcrumb,Icon } from 'antd';
import 'antd/dist/antd.css';

class Home extends React.Component {
	state={
		nav:[
			{
			text:'今日库存',
			icon:'heart'
			}, {
				text: '今日销量',
				icon: 'star'
			}, {
				text: '今日金额',
				icon: 'dollar'
			},
		]
	}
	render() {
		return (
			<main >
				<div style={{height:'20px',background:'#bbb',marginBottom:'2px'}}>
					<Breadcrumb>
						<Breadcrumb.Item>首页</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				<div style={{height:'300px',marginBottom:'2px',display:'flex' ,justifyContent:'center'}}>

				{
					this.state.nav.map(item=><div style={{height:'300px',width:'30%',float:'left',textAlign:'center',position:'relative'}}>
				<div className='box' style={{height:'100px',width:'100px',background:'white',position:'absolute',left:'50%',top:'50%',transform:' translate(-50%, -50%)',}}>
				<h3>{item.text}</h3>
				 <Icon type={item.icon}/>
				 <p>153</p>
				</div>
				</div>)
				}

				</div>
				<div style={{height:'60px',background:'#bbb'}}>
					<h1>你好</h1>
				</div>
		</main>
		);
	}
}

export default Home;
