import React,{Component} from "react";
import Swiper from "swiper";
import withAxios from "../hoc/withAxios";
class HomeSeckillGoods extends Component{
    constructor(){
        super();
        this.state={
            seckillGoods:[]
        }
       
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            seckillGoods:nextProps.goods
        },()=>{
            new Swiper("#swiper3", {
                loop: false,
                slidesPerView: "auto",
                centeredSlides: true,
              });
        })
    }
    render(){ console.log(this.state)
        
        return (
             <div className="seckillGood">
                <div className="swiper-container" id="swiper3">
                    <div className="swiper-wrapper">
                        {this.state.seckillGoods.map((goods,idx)=>(
                            <div className="swiper-slide" key={idx} >
                                <div className="good" key={idx}>
                                    <img src={'http://img0.gjw.com/product/'+goods.imgUrl} alt={goods.Id} style={{width:"100px"}}/>
                                    <div className="box">
                                        <h5>{goods.ProductName}</h5>
                                        <div className="bt">
                                            <span>￥{goods.Price}</span>
                                            <a className="btn_qg fr">马上抢</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
        )
    }
}
HomeSeckillGoods = withAxios(HomeSeckillGoods)
export default HomeSeckillGoods;