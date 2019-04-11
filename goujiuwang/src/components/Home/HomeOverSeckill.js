import React,{Component} from "react";
class countDown extends Component{
    constructor(){
        super();
        this.state={
            hours: "00",
            minutes: "00",
            seconds: "00",
           seckillGoods:[],
           overTime:''
        }
    }

    componentWillReceiveProps(nextProps){
        const overTime = new Date(nextProps.seckillGoods.EndTime);
        this.setState({
            overTime
        },()=>{
            this._countDown();
        })
        
    }
    componentWillUnmount() {
        clearTimeout(this.time);
    }
    
    _countDown(){
        if(this.time){
            clearTimeout(this.time);
        }
        const currTime = new Date().getTime();
        const deadline = new Date(this.state.overTime);
        const dTime = deadline - currTime;
        if (dTime <= 0) {
            // 这样做更精确
            clearTimeout(this.time);
            this.setState({
                hours: "00",
                minutes: "00",
                seconds: "00"
            });
            return;
        }
        this.time = setTimeout(() => {
            this.setState(this._formatTime(dTime));
            this._countDown();
        }, 1000);
    }
    _formatTime= (time) => {
        const hours = Math.floor(( time / (1000 * 60 * 60)) % 24).toString().padStart(2, "0");
        const minutes = Math.floor(( time / (1000 * 60)) % 60).toString().padStart(2, "0");
        const seconds = Math.floor(( time / 1000) % 60).toString().padStart(2, "0");
        return ({ hours, minutes, seconds });
    }
    render(){
        const { hours,  minutes,  seconds } = this.state;
        return (
            <div className="seckill">
                <b>掌上秒杀</b>
                <span>距结束</span>
                <i>{hours}</i> : <i>{minutes}</i> : <i>{seconds}</i>
            </div>
        )
    }
}
export default countDown;