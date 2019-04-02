import React,{Component} from "react";
import { Icon } from 'antd';
class Footer extends Component{
    constructor(){
        super();
        this.state={
            current:0,
            contents:[
                {
                    text:'首页',
                    type:'home'
                },
                {
                    text:'分类',
                    type:'appstore'
                },
                {
                    text:'专享福利',
                    img:require('../assets/images/fuli.png')
                },
                {
                    text:'购物车',
                    type:'shopping-cart'
                },
                {
                    text:'我的',
                    type:'user'
                }
            ]
        }
    }
    changeCurrent(idx){
        this.setState({
            current:idx
        })
    }
    navList(){
        return this.state.contents.map((content,idx)=>{
            if(idx===2){
                return (
                    <div className="fl" key={idx}  onClick={this.changeCurrent.bind(this,idx)}>
                        <img src={content.img} alt={idx} style={{width:"18px",height:"18px",marginBottom:"5px"}}/><p style={{color:"red"}}>{content.text}</p>
                    </div>
                )
            }else{
                if(this.state.current===idx){
                    return (
                        <div className="fl" key={idx} style={{color:"red"}} onClick={this.changeCurrent.bind(this,idx)}>
                            <Icon type={content.type} /><p>{content.text}</p>
                        </div>
                    )
                }else{
                    return (
                        <div className="fl" key={idx} onClick={this.changeCurrent.bind(this,idx)}>
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
export default Footer;