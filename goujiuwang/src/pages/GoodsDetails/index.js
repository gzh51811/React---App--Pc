import React,{Component} from "react";
import GoodsDetailsHeader from "../../components/GoodsDetailsHeader";
import GoodsDetailsNav from "../../components/GoodsDetailsNav";
import GoodsDetailsBanner from "../../components/GoodsDetailsBanner";
import withAxios from "../../hoc/withAxios";
import Qs from "qs";
import "./GoodsDetails.css";
class GoodsDetails extends Component{
    constructor(){
        super();
        this.state={
            bannerImg:[]
        }
    }
    componentWillMount(){
        this.getGoodsMsg()
    }
    async getGoodsMsg(){
        let {axios} = this.props;
        let data = {
            Id: 1464,
            UserID: null,
            Signid: null,
            DeviceId: 'bbc0fdf1-251d-4010-b6c4-bfd4502b7ade',
            PhoneVersion: null,
            ClientVersion: '1.0.0.1',
            ClientType: 0,
            ProvinceId: 9
        }
        let res = await axios({
            method:'post',
            url:'/BtCApi/Item/GetProduct',
            data:Qs.stringify(data),
            headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}
        })
        this.setState({
            bannerImg:res.data.data.listpic
        })
        console.log(res.data.data.listpic)
    }
    render(){
        return (
            <div className="GoodsDetails">
                <GoodsDetailsHeader></GoodsDetailsHeader>
                <GoodsDetailsNav></GoodsDetailsNav>
                <GoodsDetailsBanner bannerImg={this.state.bannerImg}></GoodsDetailsBanner>
            </div>
        )
    }
}
GoodsDetails = withAxios(GoodsDetails);
export default GoodsDetails;