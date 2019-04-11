import React,{Component} from "react";
import GoodsListSearch from "../../components/GoodsList/GoodsListSearch";
import GoodsListSort from "../../components/GoodsList/GoodsListSort";
import GoodsLists from "../../components/GoodsList/GoodsLists";

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