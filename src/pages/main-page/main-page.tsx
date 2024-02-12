import React from 'react';
import { Layout } from 'antd';

import { MainPageSider } from '@components/main-page/sider/sider';
import { MainPageHeader } from '@components/main-page/header/header';
import { MainPageContent } from '@components/main-page/content/content';
import { MainPageFooter } from '@components/main-page/footer/footer';

import bgLight from '@assets/main-page/bg-light.jpg';

export const MainPage: React.FC = () => {
    return (
        <Layout
            style={{ background: `no-repeat center/cover url(${bgLight})`, minHeight: '100vh' }}
        >
            <MainPageSider />
            <Layout style={{ backgroundColor: 'transparent' }}>
                <MainPageHeader />
                <MainPageContent />
                <MainPageFooter />
            </Layout>
        </Layout>
    );
};
