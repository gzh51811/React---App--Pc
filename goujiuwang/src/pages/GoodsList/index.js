import React,{Component} from "react";
import GoodsListSearch from "../../components/GoodsListSearch";
import ClassifySort from "../../components/ClassifySort";
import GoodsLists from "../../components/GoodsLists";

import "./GoodsList.css";
class GoodsList extends Component{
    render(){
        return (
            <div className="GoodsList">
                <GoodsListSearch style={{position:'fixed',top:'0px',width:"100%"}}></GoodsListSearch>
                <ClassifySort></ClassifySort>
                <GoodsLists></GoodsLists>
            </div>
        )
    }
}
export default GoodsList;