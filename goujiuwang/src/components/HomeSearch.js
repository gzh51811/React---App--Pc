import React,{Component} from "react";
import { Icon } from 'antd';
import 'antd/dist/antd.css';
class HomeSearch extends Component{
    render(){
        return (
            <div className="searchBox">
                <Icon type="search" />
                <span>请输入商品名称</span>
            </div>
        )
    }
}
export default HomeSearch;