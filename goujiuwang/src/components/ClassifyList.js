import React,{Component} from "react";
import withAxios from "../hoc/withAxios";
import { Row, Col } from 'antd';
import {withRouter} from "react-router-dom";
class ClassifyList extends Component{
    constructor(){
        super();
        this.state={
            goodsClassify:[]
        }
    }
    async componentWillMount(){
        let res = await this.props.axios.get('/BtCApi/List/GetSeriesList')
        this.setState({
            goodsClassify:res.data.data.item_data
        })
    }
    boxShow(){
        console.log(this.state.goodsClassify)
        return this.state.goodsClassify.map((classifyList,idx)=>(
            <div className="box" key={idx}>
                <div className="title">
                    {classifyList.TypeName}
                    <span>查看全部 ></span>
                </div>
                <Row className="classifyChunk">
                   {this.typeShow(classifyList.TypeData,classifyList.Url)}
                </Row>
            </div>
        ))
    }
    typeShow(TypeDatas,ParentID){
        return TypeDatas.map((TypeData,idx)=>(
            <Col span={12} className="goodsType" key={idx}>
                <span onClick={this.gotoGoodsListPage.bind(this,ParentID,TypeData.Url)}>{TypeData.Name}</span>
            </Col>
        ))
    }
    gotoGoodsListPage(ParentID,brand){
        this.props.history.push({
            pathname:"/GoodsList",
            search:`?ParentID=${ParentID}&brand=${brand}`
        })
    }
    render(){
        return (
            <div className="list_home">
                {this.boxShow()}  
            </div>
        )
    }
}
ClassifyList = withAxios(ClassifyList);
ClassifyList = withRouter(ClassifyList);
export default ClassifyList;