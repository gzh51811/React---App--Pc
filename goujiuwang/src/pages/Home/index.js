import React,{Component} from "react";
import "./Home.css";
import HomeHeaderBanner from "../../components/Home/HomeHeaderBanner";
import HomeNotice from "../../components/Home/HomeNotice";
import HomeGoodscCassify from "../../components/Home/HomeGoodscCassify";
import HomeOverSeckill from "../../components/Home/HomeOverSeckill";
import HomeSeckillGoods from "../../components/Home/HomeSeckillGoods";
import HomeAdvertising from "../../components/Home/HomeAdvertising";
import HomeContainer from "../../components/Home/HomeContainer";
import HomeGoodsList from "../../components/Home/HomeGoodsList";
import HomeSearch from "../../components/Home/HomeSearch";
import withAxios from "../../hoc/withAxios";
class Home extends Component{
    constructor(){
        super();
        this.state={
            hasAppSeckill:false,
            seckillGoods:[],
            homeMsg:[],
            goodsClassify:[]
        }
    }
    async getSeckillGoods(){
        let res = await this.props.axios.get('/BtCApi/Home/SeckillList',{
            params:{
                userid:0
            }
        })
        try{
            this.setState({
                seckillGoods:res.data.data[0].AppSeckill,
                hasAppSeckill:true
            })
        }
        catch{
            this.setState({
                hasAppSeckill:false
            })
        }
    }
    async getHomePageImg(){
        let res = await this.props.axios.get('/BtCApi/Home/GetHomePageImg');
        let classifyMsg = res.data.data.filter(goods=>goods.adv_BlockID===3);
        this.setState({
            homeMsg:res.data.data,
            goodsClassify:classifyMsg
        })
    }
    async componentWillMount(){
        this.getSeckillGoods()
        this.getHomePageImg()
    }
    render(){
        return (
            <div className="Home">
                    <HomeSearch></HomeSearch>
                    <HomeHeaderBanner></HomeHeaderBanner>
                    <HomeNotice></HomeNotice>
                    <HomeGoodscCassify goodsClassifyImg={this.state.goodsClassify}></HomeGoodscCassify>
                    {
                        this.state.hasAppSeckill
                        ?
                        <HomeOverSeckill seckillGoods={this.state.seckillGoods}></HomeOverSeckill>
                        :
                        ""
                    }
                    <HomeSeckillGoods goods={this.state.seckillGoods.AppSeckillProList}></HomeSeckillGoods>
                    <HomeAdvertising></HomeAdvertising>
                    <HomeContainer></HomeContainer>
                    <HomeGoodsList homeMsg={this.state.homeMsg}></HomeGoodsList>
            </div>
        )
    }
}
Home = withAxios(Home)
export default Home;