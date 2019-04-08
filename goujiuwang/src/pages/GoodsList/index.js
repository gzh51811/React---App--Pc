import React,{Component} from "react";
import GoodsListSearch from "../../components/GoodsListSearch";
import GoodsListSort from "../../components/GoodsListSort";
import GoodsLists from "../../components/GoodsLists";

import "./GoodsList.css";
class GoodsList extends Component{
    render(){
        return (
            <div className="GoodsList">
                <GoodsListSearch style={{position:'fixed',top:'0px',width:"100%"}}></GoodsListSearch>
                <GoodsListSort></GoodsListSort>
                <GoodsLists></GoodsLists>
            </div>
        )
    }
}
export default GoodsList;