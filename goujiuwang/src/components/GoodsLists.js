import React,{Component} from "react";
import {Row,Col} from "antd";
import withAxios from "../hoc/withAxios";
import {withRouter} from "react-router-dom";
import url from "url";

class GoodsLists extends Component {
    constructor(){
        super();
        this.state={
            products:[],
            axiosParams:{}
        }
    }
     componentWillMount(){
        let {location} = this.props;
        let {query}  = url.parse(location.search,true);
        // let obj = this.props
        let obj = {
            ParentID: 0,
            brand: 0,
            strWhere: "0,0,0,0,0",
            sort: 0,
            PageIndex: 1,
            PageSize: 20,
            userID: 0
        }
        var params = Object.assign({}, obj, query);
        this.setState({
            axiosParams:params
        },()=>{
            this.getGoodsMsg()
        })
        
    }
    async getGoodsMsg(){
        let {axios} = this.props;
        let data = await axios.get('/BtCApi/List/GetProListWhere',{
            params:this.state.axiosParams
        })
        this.setState({
            products:data.data.data.Prolist
        })
    }
    showGoodsList(){
        return this.state.products.map(pro=>(
            <Col span={12} key={pro.ID}>
                <div className="pro_item2">
                    <span>
                        <img src={'http://img0.gjw.com/product/'+pro.Pic} alt="img" className="pic"/>
                        <p className="tit2">{pro.ProductName}</p>
                        <div className="tag">
                           {this.ActivityName(pro.ActivityName)}
                        </div>
                        <div className="price">￥{pro.APPPrice}</div>
                        <div className="tip">{pro.GoodCommment}条好评 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   {	Math.round(pro.GoodCommment/pro.SumComment*100)}%好评</div>
                    </span>
                </div>
            </Col>
        ))
    }
    ActivityName(Ativityname){
        if(Ativityname){
            return Ativityname.map((item,idx)=>{
               if(item.Ativityname==="满额立减"||item.Ativityname==="赠品促销"||item.Ativityname==="套装促销"){
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
    render(){
        return (
            <div className="goodsListContainer">
                <div className="pro_list">
                    <Row>
                        {this.showGoodsList()}
                        
                    </Row>
                </div>
            </div>
        )
    }
}
GoodsLists=withAxios(GoodsLists);
GoodsLists=withRouter(GoodsLists);
export default GoodsLists;