import React,{Component} from "react";
import HomeSearch from "../../components/Home/HomeSearch";
import ClassifyList from"../../components/ClassifyList";
import "./classify.css";
class Classification extends Component{ 
    render(){
        return (
            <div id="classify">
                <HomeSearch style={{boxSizing:"content-box",background:"#ececec",position:"static",transform:"translateX(0%)",margin:"5px auto"}}></HomeSearch>
                <ClassifyList></ClassifyList>
            </div>
        )
    }
}
export default Classification;