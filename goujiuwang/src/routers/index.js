import React,{Component} from "react";
import {Route,Redirect,Switch} from "react-router-dom";
import Cart from "../pages/Cart/";
import Classification from "../pages/Classification/";
import GoodsList from "../pages/GoodsList";
import My from "../pages/My/";
import Home from "../pages/Home/";
import Footer from "../components/Footer";

class App extends Component{
    render(){
        return (
            <div className="container">
                <div id="main">
                    <Switch>
                        <Route path="/Home" component={Home}></Route>
                        <Route path="/Cart" component={Cart}></Route>
                        <Route path="/Classification" component={Classification}></Route>
                        <Route path="/GoodsList" component={GoodsList}></Route>
                        <Route path="/My" component={My}></Route>
                        <Redirect from="/" to="/Home"></Redirect>
                    </Switch>
                </div>
                <div id="footer">
                    <Footer></Footer>
                </div>
            </div>
            
        )
    }
}

export default App;