import React from "react";
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import {Input, Layout, Typography, Menu, Button, Dropdown, Space} from 'antd';
import { GlobalOutlined } from '@ant-design/icons';



export const Header: React.FC = () => {
    return (
        <div className={styles['App-header']}>
        <div className={styles['top-header']}>
            <Typography.Text style={{ whiteSpace: 'nowrap' }}>让旅游更幸福</Typography.Text>
            <Dropdown.Button
              style={{marginLeft: 20}}
              menu={{
                  items: [
                    {key:"1", label: "中文"},
                    {key:"2", label: "English"}
                  ]
              }}
              icon={<GlobalOutlined />}
              >
              语言
            </Dropdown.Button>
            <Space className={styles['button-group']}>
              <Button>注册</Button>
              <Button>登录</Button>
            </Space>
        </div>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="logo" className={styles['App-logo']}/>
          <Typography.Title level={3} className={styles.title}>React 旅游网</Typography.Title>
          <Input.Search
            placeholder="请输入旅游目的地、主题、或关键字"
            className={styles['search-input']}
          />
        </Layout.Header>

        <Menu className={styles['main-menu']} mode={"horizontal"} items={[
          {key: '1', label: '首页'},
          {key: '2', label: '跟团游'},
          {key: '3', label: '周末游'},
          {key: '4', label: '自由行'},
          {key: '5', label: '定制游'},
          {key: '6', label: '游学'},
          {key: '7', label: '签证'},
          {key: '8', label: '企业游'},
          {key: '9', label: '高端游'},
          {key: '10', label: '爱玩户外'},
          {key: '11', label: '主题游'}
        ]}></Menu>
      </div>
    );
}