import React,{Component} from "react";
import { Row, Col } from 'antd';
class HomeGoodsList extends Component{
    constructor(){
        super();
        this.state = {
            current: 6,
            classifyNames:[{
                name:'精选',
                blockid:6
            },
            {
                name:'白酒',
                blockid:7
            },
            {
                name:'葡萄酒',
                blockid:8
            },
            {
                name:'青酒洋酒',
                blockid:9
            },
            {
                name:'黄酒啤酒',
                blockid:10
            },
            {
                name:'年份老酒',
                blockid:11
            }],
            goodsContent:[]
          }
    }
    handleClick(idx){
        this.setState({
            current:idx
        })
    }
    showList(){
        let content = this.state.goodsContent.filter(item=>item.adv_BlockID===this.state.current);
        return content.map(item=>{
            return (
                <Col key={item.ID} span={12}>
                    <div className="goods" style={{paddingLeft: "5px" ,paddingRight: "5px"}}>
                        <div className="pro_item">
                            <a ><img
                                    src={item.Pic} alt=""
                                    className="pic"/>
                                <p className="tit2"> {item.Name} </p>
                                <div className="tag">
                                    {this.listAtivityName(item.listAtivityName)}
                                </div>
                                <div className="red">￥{item.ExtField}</div>
                            </a>
                        </div>
                    </div>
                </Col>
            )
        })
    }
    listAtivityName(AtivityName){
        if(AtivityName){
             return AtivityName.map((item,idx)=>{
                if(item.Ativityname==="赠品促销"){
                    return <span  key={idx} style={{backgroundColor:"rgb(136, 136, 255)"}}>
                            {item.Ativityname}
                        </span>
                    
                }else if(item.Ativityname==="限时抢购"){
                    return <span  key={idx} style={{backgroundColor:"rgb(255, 168, 85)"}}>
                            {item.Ativityname}
                        </span>
                }
            })
        }

    }

    componentWillReceiveProps(nextProps){
        this.setState({
            goodsContent:nextProps.homeMsg})
    }

    render(){
        return (
            <div className="goodsShow">
                <Row className="goodsNav">
                    {
                        this.state.classifyNames.map((classifyName,idx)=>{
                            if(this.state.current===classifyName.blockid){
                                return  <Col key={idx} className="goodsNav current" span={4}>{classifyName.name}</Col>
                            }else{
                                return  <Col key={idx} className="goodsNav" onClick={this.handleClick.bind(this,classifyName.blockid)} span={4}>{classifyName.name}</Col>
                            }
                        })
                    }        
                </Row>
                <Row className="goodsList">
                    {this.showList()}
                </Row>
            </div>
            
        )
    }
}
export default HomeGoodsList