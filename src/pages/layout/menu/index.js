import React from "react";
import { Menu } from 'antd';
import Icon from '@ant-design/icons';

import { JsSvg, HtmlSvg, CssSvg,  VueSvg, ReactSvg, NginxSvg} from '../../../utils/svg';



const JsIcon = props => <Icon component={JsSvg} {...props} />;
const HtmlIcon = props => <Icon component={HtmlSvg} {...props} />;
const CssIcon = props => <Icon component={CssSvg} {...props} />;
const VueIcon = props => <Icon component={VueSvg} {...props} />;
const ReactIcon = props => <Icon component={ReactSvg} {...props} />;
const NginxIcon = props => <Icon component={NginxSvg} {...props} />;

const { SubMenu } = Menu;

const menuList = [
    {
        title: "JavaScript 基础",
        icon: <JsIcon />,
        key: "JS",
        children: [{
            title: "1 requestAnimationFrame用法",
            key: "JS-1",
        }, {
            title: "2 执行上下文/作用域链/闭包",
            key: "JS-2",
            children: [{
                title: "2.1 执行上下文",
                key: "JS-2-1",
                mdPath: "JavaScript 基础/执行上下文作用域链闭包/执行上下文.md"
            }, {
                title: "2.2 作用域链",
                key: "JS-2-2",
            }, {
                title: "2.3 闭包",
                key: "JS-2-3",
            }]
        }]
    },
    {
        title: "HTML 基础",
        icon: <HtmlIcon />,
        key: "HTML",
        children: [{
            title: "1 单页应用(SPA)和多页应用(MPA)的区别",
            key: "HTML-1",
            mdPath: "HTML 基础/单页应用(SPA)和多页应用(MPA)的区别.md"
        }]
    },
    {
        title: "CSS 基础",
        icon: <CssIcon />,
        key: "CSS",
        children: [{
            title: "1 css行高line-height的一些深入理解及应用",
            key: "CSS-1",
        }]
    },
    {
        title: "Vue 基础",
        icon: <VueIcon />,
        key: "Vue",
        children: [{
            title: "1 配置文件",
            key: "Vue-1",
            children: [{
                title: "1.1 使用.env文件配置全局变量",
                key: "Vue-1-1",
                mdPath: "Vue 基础/配置文件/使用.env文件配置全局变量.md"
            }]
        }]
    },
    {
        title: "React 基础",
        icon: <ReactIcon />,
        key: "React",
        children: [{
            title: "1 JSX 简介",
            key: "React-1",
        }]
    },
    {
        title: "Nginx 基础",
        icon: <NginxIcon />,
        key: "Nginx",
        children: [{
            title: "1 Nginx 简介",
            key: "Nginx-1",
            mdPath: "Nginx 基础/Nginx 基础.md"
        },
        {
            title: "2 linux环境下搭建jenkins",
            key: "Nginx-2",
            children: [{
                title: "2.1 环境搭建",
                key: "Nginx-2-1",
                mdPath: "Nginx 基础/jenkins之环境搭建1.md"
            }]
        }]
    },
]

const createSubMenu = function (list) {
    let elList = [];
    if (list?.length > 0) {
        list.forEach(item => {
            elList.push(<SubMenu key={item.key} icon={item.icon} title={item.title}> {createMenu(item.children)} </SubMenu>)
        })
    }
    return elList;
}

const createMenu = function (list) {
    let elList = [];
    if (list?.length > 0) {
        list.forEach(item => {
            if (item.children?.length > 0) {
                elList.push(<SubMenu key={item.key} title={item.title}>{createMenu(item.children)}</SubMenu>);
            } else {
                elList.push(<Menu.Item nodedata={item} mdpath={item.mdPath} key={item.key} >{item.title}</Menu.Item>)
            }
        })
    }
    return elList;
}

class Sider extends React.Component {

    handleClick = (e) => {
        let {
            item: {
                props: {
                    nodedata
                } = {}
            } = {}
        } = e || {};

        this.props.menuItemClick(nodedata);
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                { createSubMenu(menuList)}
            </Menu>
        );
    }
}

export default Sider;