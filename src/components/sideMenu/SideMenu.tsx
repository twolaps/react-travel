import React from "react";
import styles from './App.module.css';
import { sideMenuList } from "./MockUp";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";

export const SideMenu: React.FC = () => {
    return (
        <Menu mode="vertical" className={styles['side-menu']}
          items={sideMenuList.map((mainItem) => ({
            label:mainItem.title,
            icon:<GifOutlined />,
            key:mainItem.title,
            children: mainItem.subMenu.map((subItem) => ({
                label: subItem.title,
                key:mainItem.title, 
                icon: <GifOutlined />,
                children: subItem.subMenu.map((subSubItem) => ({
                    label: subSubItem,
                    key: subSubItem,
                    icon: <GifOutlined />
                })),
            })),
          }))}
        ></Menu>
    );
}