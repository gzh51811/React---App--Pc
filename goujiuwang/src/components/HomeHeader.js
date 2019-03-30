import HomeSearch from "./HomeSearch";
import HomeHeaderBanner from "./HomeHeaderBanner";
import HomeNotice from "./HomeNotice";
import HomeGoodscCassify from "./HomeGoodscCassify";

import React,{Component} from "react";
class HomeHeader extends Component{
    render(){
        return (
            <div className="HomeHeader">
                <HomeSearch></HomeSearch>
                <HomeHeaderBanner></HomeHeaderBanner>
                <HomeNotice></HomeNotice>
                <HomeGoodscCassify></HomeGoodscCassify>
            </div>
        )
    }
}
export default HomeHeader;