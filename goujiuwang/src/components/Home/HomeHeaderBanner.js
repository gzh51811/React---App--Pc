import React,{Component} from "react";
import Swiper from "swiper";

class HomeHeaderBanner extends Component{
    constructor(){
        super();
        this.state={
            bannerImg:[
                'http://img0.gjw.com/famous/2019/0322/c76cbc2f34984a76b595dd6bf8a6cd55.jpg',
                'http://img0.gjw.com/famous/2019/0111/aac5af4c2b05464089755292b8e081b9.jpg',
                'http://img0.gjw.com/famous/2019/0322/26ef22bd65a1467cab5dc9d05f3f264a.jpg',
                'http://img0.gjw.com/famous/2019/0323/6d1d51f3527d4c8791cef81c9daa6eda.jpg',
                'http://img0.gjw.com/famous/2019/0226/ff9112a706964941ab690b842cf27f38.jpg',
                'http://img0.gjw.com/famous/2018/1210/8f63d19948434358961f84ec1aba5726.jpg'
            ]
        }
    }
    componentDidMount(){
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
    }
    render(){
        return (
            <div className="banner1">
                <div className="swiper-container" id="swiper1">
                    <div className="swiper-wrapper">
                    {this.state.bannerImg.map((bannerImg,idx)=> <div className="swiper-slide" key={idx}>
                            <img src={bannerImg} alt={bannerImg}/>
                        </div>)}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
export default HomeHeaderBanner;