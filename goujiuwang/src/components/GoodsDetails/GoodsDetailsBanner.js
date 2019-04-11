import React,{Component} from "react";
import Swiper from "swiper";
class banner extends Component{
    constructor(){
        super();
        this.state={
            bannerImg:[]
        }
    }
    componentWillReceiveProps(nextprops){
        let {bannerImg} = nextprops;
        this.setState({
            bannerImg
        },()=>{
            new Swiper("#swiper1", {
                loop: true,
                slidesPerView: 1,
                centeredSlides: true,
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: false
                },
                pagination: {
                  el: ".swiper-pagination",
                  bulletClass : 'default',
                  bulletActiveClass : 'now',
                }
              });
        })
    }
    render(){
        return (
            <div className="detailsBanner">
                <div className="swiper-container" id="swiper1">
                    <div className="swiper-wrapper">
                    {this.state.bannerImg.map((bannerImg,idx)=> <div className="swiper-slide" key={idx} >
                            <img src={`http://img0.gjw.com/product/${bannerImg.Pic}`} alt="" width="100%"/>
                        </div>)}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
export default banner;