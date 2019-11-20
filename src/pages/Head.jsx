import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu, Icon,Layout } from 'antd';
import { connect } from 'react-redux';
import { NavLink, withRouter } from "react-router-dom"
import menuConfig from '../utils/menuConfig';


const { Item, SubMenu } = Menu;
const {Header} =Layout;
class HeadUI extends React.Component {

    setMenu = (menu, pItem) => {
        debugger;
        return menu.map((item) => {
            if (item.children && item.children.length > 0) {
                return (
                    <SubMenu key={item.link}
                        title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                        {this.setMenu(item.children, item)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.link} pitem={pItem}>
                    <NavLink to={item.link} >
                        {item.icon && <Icon type={item.icon} />}
                        <span>{item.title}</span>
                    </NavLink>
                </Menu.Item>
            )
        });
    };


    render() {
        debugger;
        let menu = this.props.menu|| menuConfig
        return (
            <Header className="header0">
                <div className="header0-menu">
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        defaultSelectedKeys={['/home']}
                        selectedKeys={[this.props.history.location.pathname]}
                    >
                        {/* {!!this.props.data && this.setMenu(this.props.data||[])} */}
                        {this.setMenu(menu)}
                    </Menu>
                </div>
            </Header>
        );
    }
}



export default withRouter(HeadUI);