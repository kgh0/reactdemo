import React from 'react';
import { connect } from 'react-redux';
import { getUser } from "../action/LoginAction"
import { Form, Spin, message, Input, Icon, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class LoginUI extends React.Component {

    constructor(props) {
        super(props)

    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            debugger;
            if (!err) {
                if (values.username == "admin" && values.password == '123') {
                    // window.localStorage.setItem("loggedIn", true);
                    debugger;
                    // this.props.history.push("/");
                    let tmp = this.props.loginClick(values.username, values.password);
                    console.log(tmp);
                } else {
                    message.error("账号密码错误", 1);
                }

            }
        })
    }

    render() {
        debugger;
        const { isFetching, data, error } = this.props;

        if (!!data) {
            debugger;
            console.log(this.props.history);
            // this.props.history.push("/");
            window.localStorage.setItem("loggedIn", true);
        }
        const loggedIn = window.localStorage.getItem('loggedIn');

        const { getFieldDecorator } = this.props.form;
        const LoginForm = (
<Spin tip="logining..." spinning={isFetching}>
            <div className="login-container">
                
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className="sub-title">登 录</div>
                        <Form.Item>
                            {
                                getFieldDecorator("username", {
                                    rules: [{ required: true, message: "请输入用户名" }],
                                })(
                                    <Input prefix={<Icon type="user" className="login-icon" />} placeholder="用户名" />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" className='login-icon' />} type="password" placeholder="密码123" />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Form.Item>
                    </Form>
           
            </div>
            </Spin>
        )

        return (
            loggedIn ? (<Redirect to="/" />) : LoginForm
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(LoginUI);

const mapStateToProps = (state, ownProps) => {
    debugger;
    const { isFetching, data, error } = state.HttpEcho;

    return {
        isFetching,
        data,
        error
    }
}


const mapDispatchToProps = dispatch => ({
    loginClick: (username, password) => {
        debugger;
        return dispatch(getUser(username, password));
    }
})

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedNormalLoginForm);

export default Login;