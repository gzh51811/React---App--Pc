import React,{Component} from 'react';

import { Form, Icon, Input, Button, Checkbox,} from 'antd';


class Login extends Component{

     handleSubmit = (e) => {
         e.preventDefault();
         this.props.form.validateFields((err, values) => {
             if (!err) {
                 console.log('Received values of form: ', values);
             }
         });
     }
 
 render() {
    const {getFieldDecorator} = this.props.form;

    return (<div style={{height:'200px',width:'400px',background:'#cccccc',position:'absolute',left:'50%',top:'50%',transform:'translateX(-50%)translateY(-50%)'}}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="##" style={{float:'right'}}>注册</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

export default Form.create()(Login);