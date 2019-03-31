import React from "react";
import { Row, Col ,Icon } from 'antd';
export default ()=>{
    let contents=[
        {
            icon:'check-circle',
            text:'正品保证'
        },
        {
            icon:'safety-certificate',
            text:'开箱验货'
        },
        {
            icon:'insurance',
            text:'赔付保障'
        }
    ]
    return (
        <div className="HomeContainer">
            <div className="recommend2">
                <Row>
                    <Col span={12}>
                        <img src="http://img0.gjw.com/famous/2019/0329/7403246ab14847c988cd07db1021f3fa.jpg" alt="img1" width="100%"/>
                    </Col>
                    <Col span={6}>
                        <img src="http://img0.gjw.com/famous/2019/0323/3867c7d2cb6d4a779543b5f2f05a83c4.jpg" alt="img2" width="100%"/>
                    </Col>
                    <Col span={6}>
                        <img src="http://img0.gjw.com/famous/2019/0323/17f523a36724440db364fdc72171e003.jpg" alt="img3" width="100%"/>
                    </Col>
                </Row>
            </div>
            <div className="index_ico">
                <Row>
                    { contents.map((content,idx)=>(
                                <Col span={8}  key={idx}>
                                    <Icon type={content.icon} /><span>{content.text}</span>
                                </Col>
                        ))}
                </Row>
            </div>
            <p>
                <img src="http://img0.gjw.com/famous/2019/0326/ac158f016f224d23a221b04bf1d534dd.jpg" alt="" width="100%"/>
            </p>
            <p>
            <img src="http://img0.gjw.com/famous/2019/0323/338e8f9442fe4fd2820cd2a42a14c9e6.jpg" alt="" width="100%"/>
            </p>
        </div>
    )
}