import React,{Component} from "react";
import "./Home.css";
import HomeHeader from "../../components/HomeHeader";

class Home extends Component{
    render(){
        return (
            <div className="Home">
                <HomeHeader></HomeHeader>
            </div>
        )
    }
}
export default Home;