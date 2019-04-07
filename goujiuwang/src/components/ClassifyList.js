import React,{Component} from "react";
import withAxios from "../hoc/withAxios";
import { Row, Col } from 'antd';
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
        },()=>{
            console.log(this.state.goodsClassify)
        })
    }
    boxShow(){
        return this.state.goodsClassify.map((classifyList,idx)=>(
            <div className="box" key={idx}>
                <div className="title">
                    {classifyList.TypeName}
                    <span>查看全部 ></span>
                </div>
                <Row className="classifyChunk">
                   {this.typeShow(classifyList.TypeData)}
                </Row>
            </div>
        ))
    }
    typeShow(TypeDatas){
        return TypeDatas.map((TypeData,idx)=>(
            <Col span={12} className="goodsType" key={idx}>
                <span>{TypeData.Name}</span>
            </Col>
        ))
    }
    render(){
        return (
            <div className="list_home">
                {this.boxShow()}  
            </div>
        )
    }
}
ClassifyList = withAxios(ClassifyList)
export default ClassifyList;