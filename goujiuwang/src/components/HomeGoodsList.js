import React,{Component} from "react";
import { Tabs, Row, Col } from 'antd';
const TabPane = Tabs.TabPane;
class HomeGoodsList extends Component{
     callback(key){
        console.log(key);
    }
    render(){
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback.bind(this,123)}>
                <TabPane tab="Tab 1" key="1">
                    <Row>
                        <Col span={12}>
                            <div className="goods" style={{paddingLeft: "5px" ,paddingRight: "5px"}}>
                                <div className="pro_item">
                                    <a ><img
                                            src="http://img0.gjw.com/product/2017/0629/92b8f818ecd14bbe9a3c55865e7bae38_2.jpg" alt=""
                                            className="pic"/>
                                        <p className="tit2"> 【整箱装】53度 茅台 王子酒 500ml*6瓶 </p>
                                        <div className="tag">
                                            <span style={{backgroundColor:" rgb(197, 140, 255)"}}>
                                                满额立减
                                            </span>
                                        </div>
                                        <div className="red">￥768</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="goods" style={{paddingLeft: "5px" ,paddingRight: "5px"}}>
                                <div className="pro_item">
                                    <a ><img
                                            src="http://img0.gjw.com/product/2017/0629/92b8f818ecd14bbe9a3c55865e7bae38_2.jpg" alt=""
                                            className="pic"/>
                                        <p className="tit2"> 【整箱装】53度 茅台 王子酒 500ml*6瓶 </p>
                                        <div className="tag">
                                            <span style={{backgroundColor:" rgb(197, 140, 255)"}}>
                                                满额立减
                                            </span>
                                        </div>
                                        <div className="red">￥768</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="goods" style={{paddingLeft: "5px" ,paddingRight: "5px"}}>
                                <div className="pro_item">
                                    <a ><img
                                            src="http://img0.gjw.com/product/2017/0629/92b8f818ecd14bbe9a3c55865e7bae38_2.jpg" alt=""
                                            className="pic"/>
                                        <p className="tit2"> 【整箱装】53度 茅台 王子酒 500ml*6瓶 </p>
                                        <div className="tag">
                                            <span style={{backgroundColor:" rgb(197, 140, 255)"}}>
                                                满额立减
                                            </span>
                                        </div>
                                        <div className="red">￥768</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                </TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        )
    }
}
export default HomeGoodsList