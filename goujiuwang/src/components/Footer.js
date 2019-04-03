import React,{Component} from "react";
import { Icon } from 'antd';
import {withRouter} from "react-router-dom";
class Footer extends Component{
    constructor(){
        super();
        this.state={
            current:"",
            contents:[
                {
                    text:'首页',
                    type:'home',
                    route:'/Home'
                },
                {
                    text:'分类',
                    type:'appstore',
                    route:"/Classification"
                },
                {
                    text:'专享福利',
                    img:require('../assets/images/fuli.png')
                },
                {
                    text:'购物车',
                    type:'shopping-cart',
                    route:"/Cart"
                },
                {
                    text:'我的',
                    type:'user',
                    route:"/My"
                }
            ]
        }
    }
    componentWillMount(){
        this.setState({
            current:this.props.history.location.pathname
        })
    }
    changeCurrent(idx,content){
        this.props.history.push(content.route)
        idx!==2?
        this.setState({
            current:this.props.history.location.pathname
        }):
        this.setState({
            current:""
        })
    }
    navList(){
        return this.state.contents.map((content,idx)=>{
            if(idx===2){
                return (
                    <div className="fl" key={idx}  onClick={this.changeCurrent.bind(this,idx,content)}>
                        <img src={content.img} alt={idx} style={{width:"18px",height:"18px",marginBottom:"5px"}}/><p style={{color:"red"}}>{content.text}</p>
                    </div>
                )
            }else{
                if(this.state.current===content.route){
                    return (
                        <div className="fl" key={idx} style={{color:"red"}} onClick={this.changeCurrent.bind(this,idx,content)}>
                            <Icon type={content.type} /><p>{content.text}</p>
                        </div>
                    )
                }else{
                    return (
                        <div className="fl" key={idx} onClick={this.changeCurrent.bind(this,idx,content)}>
                            <Icon type={content.type} /><p>{content.text}</p>
                        </div>
                    )
                }
            }
        })
    }
    render(){
        return (
            <div className="footer" >
                {
                    this.navList()
                }
            </div>
        )
    }
}
Footer = withRouter(Footer)
export default Footer;