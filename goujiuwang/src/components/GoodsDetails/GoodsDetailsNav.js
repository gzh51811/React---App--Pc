import React,{Component} from "react";
import {Row,Col,Tabs } from "antd";
const TabPane = Tabs.TabPane;
class GoodsDetailsNav extends Component{
    constructor(){
        super();
        this.state={
            content:["商品","详情","评价"]
        }
    }
    render(){
        return (
                <Tabs defaultActiveKey="0"  className="detailsNav" >
                    {this.state.content.map((item,idx)=><TabPane tab={item} key={idx} ></TabPane>)}
                </Tabs>
           
         
        )
    }
}

export default GoodsDetailsNav