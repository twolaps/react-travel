import React from "react";
import Title from 'antd/es/typography/Title';
import { Layout } from "antd";

export const Footer: React.FC = () => {
    return (
        <Layout.Footer>
            <Title level={3} style={{textAlign: 'center'}}>
                版权所有@ React旅游网
            </Title>
        </Layout.Footer>
    );
}