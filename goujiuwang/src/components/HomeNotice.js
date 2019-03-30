import React,{Component} from "react";
import Swiper from "swiper";

class HomeNotice extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    componentDidMount(){
        var mySwiper = new Swiper("#swiper2", {
            direction : 'vertical',
            loop: true,
            slidesPerView: 1,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            }
          });
    }
    render(){
        return (
            <div className="Notice">
                <div class="ico">
                    <img src={require('../assets/images/toutiao.png')} alt="aaa" />
                </div>
                <div className="swiper-container" id="swiper2">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            太白酒红盒清仓仅需49元
                        </div>
                        <div className="swiper-slide">
                            太白酒红盒清仓仅需49元
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
export default HomeNotice