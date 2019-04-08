import React,{Component} from "react";
import {Icon } from "antd";
class GoodsListSearch extends Component{
    render(){
        return (
            <div style={this.props.style} className="search-top clearfix">
                <div className="back fl">
                    <Icon type="left" />
                </div>
                <div className="searchBox2 fl">
                    <div>
                        <Icon type="search" className="searchIcon " />
                        <input  type="text" placeholder="请输入商品名称"/>
                    </div>
                </div>
                <div className="searchBtn fl">搜索</div>
            </div>
        )
    }
}
export default GoodsListSearch;