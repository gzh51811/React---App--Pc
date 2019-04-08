import React,{Component} from "react";
import {Row,Col} from "antd";
class ClassifySort extends Component{
    constructor(){
        super();
        this.state={
            sortMsg:[
                {text:"综合"},
                {text:"销量"},
                {text:"价格"}
            ],
            currentIdx:""
        }
    }
    sortNav(){
       return  this.state.sortMsg.map(((item,idx)=>{
            if(this.state.currentIdx===idx){
                return <Col style={{color:"red"}} onClick={this.changeCurrentIdx.bind(this,idx)} span={8} key={idx}>{item.text}</Col>
            }
            else{
                return <Col  onClick={this.changeCurrentIdx.bind(this,idx)} span={8} key={idx}>{item.text}</Col>
            }
        }))
    }
    changeCurrentIdx(idx){
        this.setState({
            currentIdx:idx
        })
    }
    render(){
        return (
            <div className="GoodsSort" style={{position:"fixed",top:"45px"}}>
                <Row className="sortBox">
                   {this.sortNav()}
                </Row>
            </div>
        )
    }
}
export default ClassifySort;