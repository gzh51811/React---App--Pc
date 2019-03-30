import HomeSearch from "./HomeSearch";
import React,{Component} from "react";
class HomeHeader extends Component{
    render(){
        return (
            <div className="HomeHeader">
                <HomeSearch></HomeSearch>
            </div>
        )
    }
}
export default HomeHeader;