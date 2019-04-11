import React,{Component} from "react";
import {withRouter} from "react-router-dom";
class HomeGoodscCassify extends Component{
    gotoGoodsListPage(url){
        this.props.history.push({
            pathname:"/GoodsList",
            search:"?ParentID="+url
        })
    }
    render(){
        return (
            <div className="classify">
                {this.props.goodsClassifyImg.map((img,idx)=>(
                    <div key={idx}>
                        <img src={img.Pic} alt={img.Name} onClick={this.gotoGoodsListPage.bind(this,img.Url)}/>
                    </div>
                ))}
            </div>
        )
    }
}
HomeGoodscCassify = withRouter(HomeGoodscCassify);
export default HomeGoodscCassify


