import React from 'react';
import { Layout } from 'antd';

import { MainPageSider } from '@components/main-page/sider/sider';
import { MainPageHeader } from '@components/main-page/header/header';
import { MainPageContent } from '@components/main-page/content/content';
import { MainPageFooter } from '@components/main-page/footer/footer';

import bgLight from '@assets/main-page/bg-light.jpg';

import classes from './main-page.module.css';

const { container } = classes;

export const MainPage: React.FC = () => {
    return (
        <Layout
            className={container}
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
