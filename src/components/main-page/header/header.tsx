import React from 'react';
import { Breadcrumb, Col, Layout, Row, Typography, Grid } from 'antd';

import { Settings } from '../settings/settings';

const { Title } = Typography;

const { useBreakpoint } = Grid;

export const MainPageHeader: React.FC = () => {
    const screens = useBreakpoint();

    const titleLevel = screens.xl ? 1 : screens.md ? 3 : 4;

    return (
        <Layout.Header
            style={{
                height: 'inherit',
                backgroundColor: '#f0f5ff',
                padding: '16px 24px',
            }}
        >
            <Row>
                <Col span={24}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Главная</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col span={18}>
                    <Title level={titleLevel} style={{ fontWeight: 'bold', margin: '0' }}>
                        Приветствуем тебя в CleverFit — приложении,
                        <br />
                        которое поможет тебе добиться своей мечты!
                    </Title>
                </Col>
                <Col span={6} style={{ lineHeight: 1.5715 }}>
                    <Settings />
                </Col>
            </Row>
        </Layout.Header>
    );
};
