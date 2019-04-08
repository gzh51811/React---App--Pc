import React,{Component} from "react";
import GoodsDetailsHeader from "../../components/GoodsDetailsHeader";
import GoodsDetailsNav from "../../components/GoodsDetailsNav"

import "./GoodsDetails.css";
class GoodsDetails extends Component{
    render(){
        return (
            <div className="GoodsDetails">
                <GoodsDetailsHeader></GoodsDetailsHeader>
                <GoodsDetailsNav></GoodsDetailsNav>
            </div>
        )
    }
}
export default GoodsDetails;