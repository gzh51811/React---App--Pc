import React,{Component} from "react";
import {Route,Redirect,Switch,NavLink,withRouter} from "react-router-dom";
import Cart from "../pages/Cart/";
import Classification from "../pages/Classification/";
import Goods from "../pages/Goods/";
import My from "../pages/My/";
import Home from "../pages/Home/";
class App extends Component{
    render(){
        return (
            <Switch>
                <Route path="/Home" component={Home}></Route>
                <Route path="/Cart" component={Cart}></Route>
                <Route path="/Classification" component={Classification}></Route>
                <Route path="/Goods" component={Goods}></Route>
                <Route path="/My" component={My}></Route>
                <Redirect from="/" to="/Home"></Redirect>
            </Switch>
        )
    }
}

export default App;