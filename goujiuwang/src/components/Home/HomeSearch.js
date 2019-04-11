import React from "react";
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import "../../pages/Home/Home.css";

function HomeSearch(props){
    return (
        <div style={props.style} className="searchBox">
            <Icon type="search" />
            <span>请输入商品名称</span>
        </div>
    )
}
export default HomeSearch;