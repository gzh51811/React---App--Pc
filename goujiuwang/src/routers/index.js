import React,{Component} from "react";
import {Route,Redirect,Switch,withRouter} from "react-router-dom";
import Cart from "../pages/Cart/";
import Classification from "../pages/Classification/";
import GoodsList from "../pages/GoodsList";
import My from "../pages/My/";
import Home from "../pages/Home/";
import Footer from "../components/Footer";

class App extends Component{
    constructor(){
        super();
        this.state={
            route:['/Home','/Classification','/Cart','/My'],
            isShowFooter:true
        }
    }
    componentWillReceiveProps(nextprops){
        let pathname=nextprops.history.location.pathname
        this.showFooter(pathname)
    }
    componentWillMount(){
        let pathname=this.props.history.location.pathname
        this.showFooter(pathname)
    }
    showFooter(pathname){
        // 获取pathname判断是否等于要显示的路由地址
        let res = this.state.route.some(item=>(
            item===pathname
        ))
        this.setState({
            isShowFooter:res
        })
    }
    render(){
        console.log(this.props)
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
                {
                    this.state.isShowFooter? 
                    <div id="footer">
                        <Footer></Footer>
                    </div>
                    :
                    ""
                }
            </div>
            
        )
    }
}
App = withRouter(App);
export default App;