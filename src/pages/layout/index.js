import React from "react";
import { Row, Col } from 'antd';
import Sider from "./menu/index";
import Cont from "./cont/index";
import './index.css';

class Layout extends React.Component {

    menuItemClick = (nodedata) => {
        console.log(this.contChild)
        this.contChild.changeMdPath(nodedata)
    }

    bindRef = (ref) => {
        this.contChild = ref;
        console.log( this.contChild)
    }


    render() {
        return (
            <Row className="layout">
                <Col flex="200px">
                    <Sider menuItemClick={this.menuItemClick}></Sider>
                </Col>
                <Col flex="auto">
                    <Cont onRef={this.bindRef}></Cont>
                </Col>
            </Row>
        );
    }
}

export default Layout;
