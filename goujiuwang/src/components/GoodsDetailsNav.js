import React,{Component} from "react";
import {Row,Col} from "antd";

class GoodsDetailsNav extends Component{
    constructor(){
        super();
        this.state={
            content:["商品","详情","评价"]
        }
    }
    render(){
        return (
            <Row>
                {this.state.content.map(item=><Col span={8} key={item}>{item}</Col>)}
            </Row>
        )
    }
}

export default GoodsDetailsNav